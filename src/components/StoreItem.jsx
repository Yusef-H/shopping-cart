import React from 'react'
import '../styles/Store.css'

function StoreItem({ title, price, image }) {
    const quantity = 1;
    return (
        <div className='item-card'>
            <h1>{title}</h1>
            <img src={image} alt="" />
            <h1>{price} $</h1>
            <div className="btn-container">
                {quantity == 0 ?
                    <button className='add-cart-btn'>Add To Cart</button> :
                    <div className='min-plus-container'>
                        <button className='minus-btn'>-</button>
                        {quantity}
                        <button className='plus-btn'>+</button>
                    </div>
                }
                <button className='remove-btn'>remove</button>
            </div>
        </div>
    )
} { }

export default StoreItem
