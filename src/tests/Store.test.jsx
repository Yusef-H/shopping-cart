import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Store from '../components/Store';
import { CartProvider } from '../context/CartContext';
import userEvent from '@testing-library/user-event';
import { beforeAll, beforeEach } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

global.fetch = vi.fn();
const mockData = [
    { "id": 1, "title": "Item 1", "price": 10, "image": "image-url-1" },
    { "id": 2, "title": "Item 2", "price": 20, "image": "image-url-2" }
];

describe('Store component', () => {

    beforeAll(() => {
        // Mock the fetch function to resolve with mockData
        window.fetch = vi.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockData),
            })
        );
    });

    afterAll(() => {
        // Restore the original fetch function
        window.fetch.mockRestore();
    });


    it('renders loading state', () => {
        render(<Store />);
        expect(screen.getByTestId('loader')).toBeInTheDocument();
    });

    it('renders store items after data fetching', async () => {
        render(<CartProvider><Store storeItems={mockData} setStoreItems={(mockData) => mockData} /></CartProvider>);
        // Wait for items to be rendered
        await waitFor(() => {
            expect(screen.getByText('Item 1')).toBeInTheDocument();
            expect(screen.getByText('Item 2')).toBeInTheDocument();
        });
    });


    it('renders correct store item details', async () => {
        render(<CartProvider><Store storeItems={mockData} setStoreItems={(mockData) => mockData} /></CartProvider>);
        await waitFor(() => {
            // Assert that store items are rendered with correct details
            expect(screen.getByText('Item 1')).toBeInTheDocument();
            expect(screen.getByText('10 $')).toBeInTheDocument();
        });
    });

    it('handles fetch error', async () => {
        // Mock the fetch function to reject with an error
        window.fetch = vi.fn(() => Promise.reject({ json: () => new Error('Fetch error') }));

        render(<BrowserRouter><CartProvider><Store /></CartProvider ></BrowserRouter>);

        // Wait for error message to be rendered
        await waitFor(() => {
            expect(screen.getAllByText(/Error/i)[0]).toBeInTheDocument();
        });
    });

    describe('store buttons', () => {
        let btns;
        let plusButton;
        let minusButton;
        let user;
        beforeEach(async () => {
            user = userEvent.setup();
            render(<BrowserRouter><CartProvider><Store storeItems={mockData} setStoreItems={(mockData) => mockData} /></CartProvider></BrowserRouter>);
            btns = await screen.findAllByRole('button', { name: "Add To Cart" });
        })

        it('renders add to cart button on item', async () => {
            await waitFor(() => {
                const btns = screen.getAllByRole('button', { name: "Add To Cart" });
                expect(btns[0]).toBeInTheDocument();
            })
        })

        it('renders plus and minus buttons after click', async () => {
            await user.click(btns[0]);
            plusButton = screen.getByRole('button', { name: "+" });
            minusButton = screen.getByRole('button', { name: "-" });
            expect(plusButton).toBeInTheDocument();
            expect(minusButton).toBeInTheDocument();
            expect(screen.getByText('1')).toBeInTheDocument();
        })

        it('updates counter when button is clicked', async () => {
            await user.click(btns[0]);
            plusButton = screen.getByRole('button', { name: "+" });
            await user.click(plusButton);
            await user.click(plusButton);
            await user.click(plusButton);
            expect(screen.getByText('4')).toBeInTheDocument();
        })
    });


});
