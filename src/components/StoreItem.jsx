import React from 'react'

function StoreItem({ title, price, image }) {
    return (
        <div className='item-card'>
            <h1>{title}</h1>
            <h1>{price}</h1>
            <img src={image} alt="" />

        </div>
    )
} { }

export default StoreItem
