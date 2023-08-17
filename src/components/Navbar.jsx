import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <ul className='nav-list'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Store">Store</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;