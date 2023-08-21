import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Store from '../components/Store';

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
        expect(screen.getByText('loading')).toBeInTheDocument();
    });

    it('renders store items after data fetching', async () => {
        render(<Store />);
        // Wait for items to be rendered
        await waitFor(() => {
            expect(screen.getByText('Item 1')).toBeInTheDocument();
            expect(screen.getByText('Item 2')).toBeInTheDocument();
        });
    });


    it('renders correct store item details', async () => {
        render(<Store />);
        await waitFor(() => {
            // Assert that store items are rendered with correct details
            expect(screen.getByText('Item 1')).toBeInTheDocument();
            expect(screen.getByText('10 $')).toBeInTheDocument();
        });
    });

    it('handles fetch error', async () => {
        // Mock the fetch function to reject with an error
        window.fetch = vi.fn(() => Promise.reject({ json: () => new Error('Fetch error') }));

        render(<Store />);

        // Wait for error message to be rendered
        await waitFor(() => {
            expect(screen.getByText('Error')).toBeInTheDocument();
        });
    });
});
