import React from 'react'
import '../styles/error.css';
import { Link } from 'react-router-dom';
function Error({ error }) {
  return (
    <div class='error'>
      <h1 className='error-title'>Error Page!</h1>
      <p className='error-msg'>{error}</p>
      <p className='error-msg'>You can reach home page here:</p>
      <Link to="/home">Home</Link>
    </div>
  )
}

export default Error