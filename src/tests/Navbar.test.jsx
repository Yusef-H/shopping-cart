import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Navbar from '../components/Navbar';
import App from '../App';
import Home from '../components/Home'
import Store from '../components/Store'
import { userEvent } from '@testing-library/user-event';

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
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole("link", { name: /home/i });
    const storeLink = screen.getByRole("link", { name: /store/i });
    const aboutLink = screen.getByRole("link", { name: /about/i });

    expect(homeLink).toBeInTheDocument();
    expect(storeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });

  it('shows store when clicking on store link', async () => {
    const user = userEvent.setup();
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        <App />
      </BrowserRouter>
    );

    const storeLink = screen.getByRole("link", { name: /store/i });
    console.log(history.location);
    user.click(storeLink);
    console.log(history.location);


    expect(history.location.pathname).toBe("/Store");

  })



});


