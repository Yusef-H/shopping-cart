import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { CartProvider } from '../context/CartContext';

vi.mock('../components/Home', () => ({
  default: () => (
    <div>
      <h1>Mocked Home</h1>
    </div>
  )
}));

vi.mock('../components/Store', () => ({
  default: () => (
    <div>
      <h1>Mocked Store</h1>
    </div>
  )
}));

describe('Navbar', () => {
  it("renders navigation links", () => {
    render(
      <CartProvider>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </CartProvider>
    );

    const homeLink = screen.getByRole("link", { name: /home/i });
    const storeLink = screen.getByRole("link", { name: /store/i });
    const aboutLink = screen.getByRole("link", { name: /about/i });

    expect(homeLink).toBeInTheDocument();
    expect(storeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });

  it('renders shopping cart with 0 quantity', async () => {
    const user = userEvent.setup();
    render(
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    );

    expect(screen.getByText('0')).toBeInTheDocument();

  })



});


