import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/Navbar.css';
import cartSvg from '../assets/cart.svg';
import menuSvg from '../assets/menu.svg';

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);


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
        <Link to="/Store">Store</Link>
        <Link to="/About">About</Link>
      </ul>


      <button className='cart-btn'>
        <img src={cartSvg} alt="Cart" className='cart-icon' />
        <div className="counter">1</div>
      </button>
    </nav>
  )
}

export default Navbar;