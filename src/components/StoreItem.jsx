import React from 'react'
import '../styles/Store.css'
import { useCart } from '../context/CartContext';

function StoreItem({ id, title, price, image }) {
    const {
        getItemQuantity,
        incrementQuantity,
        decrementQuantity,
        removeFromCart
    } = useCart();
    const quantity = getItemQuantity(id);
    return (
        <div className='item-card'>
            <h1>{title}</h1>
            <img src={image} alt="" />
            <h1>{price} $</h1>
            <div className="btn-container">
                {quantity == 0 ?
                    <button className='add-cart-btn' onClick={() => incrementQuantity(id)}>Add To Cart</button> :
                    <div className='min-plus-container'>
                        <button className='minus-btn' onClick={() => decrementQuantity(id)}>-</button>
                        {quantity}
                        <button className='plus-btn' onClick={() => incrementQuantity(id)}>+</button>
                    </div>
                }
                <button className='remove-btn'>remove</button>
            </div>
        </div>
    )
} { }

export default StoreItem
