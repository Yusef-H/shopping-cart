import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Outlet, useParams } from 'react-router-dom'
import './styles/main.css';
import Home from './components/Home';
import About from './components/About';
import Store from './components/Store';
import { CartProvider } from './context/CartContext';

function App() {
  const { name } = useParams();
  const [storeItems, setStoreItems] = useState(null);
  return (
    <CartProvider>
      <Navbar></Navbar>
      {name === "store" ? (
        <Store
          storeItems={storeItems}
          setStoreItems={setStoreItems} />
      ) : name === "about" ? (
        <About />
      ) :
        <Home />}
    </CartProvider>
  )
}

export default App