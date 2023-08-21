import React from 'react'
import '../styles/Store.css'

function StoreItem({ title, price, image }) {
    return (
        <div className='item-card'>
            <h1>{title}</h1>
            <img src={image} alt="" />
            <h1>{price} $</h1>

        </div>
    )
} { }

export default StoreItem
