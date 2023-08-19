import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Navbar.css';
import cartSvg from '../assets/cart.svg'

function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='nav-list'>
          <Link to="/">Home</Link>
          <Link to="/Store">Store</Link>
          <Link to="/About">About</Link>
      </ul>

      <button className='cart-btn'>
        <img src={cartSvg} alt="Cart" className='cart-icon' />
      </button>
    </nav>
  )
}

export default Navbar;