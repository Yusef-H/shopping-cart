import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import './styles/main.css';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  )
}

export default App