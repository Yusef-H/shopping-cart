import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/Navbar.css';
import cartSvg from '../assets/cart.svg';
import menuSvg from '../assets/menu.svg';
import { useCart } from '../context/CartContext';

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const { globalCartQuantity, toggleCart } = useCart();
  const quantity = globalCartQuantity();

  return (
    <nav className='navbar'>
      <button className="menu"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
        <img src={menuSvg} alt="menu" />
      </button>
      <ul className={isNavExpanded ? 'nav-list expanded' : 'nav-list'}>

        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/about">About</Link>
      </ul>


      <button className='cart-btn' onClick={toggleCart}>
        <img src={cartSvg} alt="Cart" className='cart-icon' />
        <div className="counter">{quantity}</div>
      </button>
    </nav>
  )
}

export default Navbar;