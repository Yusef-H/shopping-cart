import React from 'react';
import '../styles/home.css';
import backgroundImage from '../assets/background.jpg';
import { Link } from 'react-router-dom';
function Home() {
  return <div className='home'>
    <img className="bg-img" src={backgroundImage} alt="" />
    <h1 className='home-title'>Discover a world of possibilities with our diverse range of electronics.</h1>
    <Link className='home-shop' to='/store'>Shop Here!</Link>
  </div>
}

export default Home