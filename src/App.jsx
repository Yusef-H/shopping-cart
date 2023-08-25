import React from 'react'
import Navbar from './components/Navbar'
import { Outlet, useParams } from 'react-router-dom'
import './styles/main.css';
import Home from './components/Home';
import About from './components/About';
import Store from './components/Store';

function App() {
  const { name } = useParams();
  return (
    <>
      <Navbar></Navbar>
      {name === "store" ? (
        <Store />
      ) : name === "about" ? (
        <About />
      ) :
        <Home />}
    </>
  )
}

export default App