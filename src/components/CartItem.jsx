import React, { useEffect } from 'react'
import { useCart } from '../context/CartContext'
import '../styles/Cart.css'
function CartItem({ id, quantity, storeItems }) {
    const { removeFromCart } = useCart();
    const item = storeItems.find(item => item.id === id);

    if (item == null) return null;
    return (
        <div className='cart-item-cont'>
            <img className='item-img-cart' src={item.image} alt="image" />
            <div className='title-price-cont'>
                <h2 className='title'>{item.title} </h2>
                <h3 className='quantity'>x{quantity}</h3>
                <h3 className='price'>{item.price * quantity} $</h3>
            </div>
            <button className="remove-btn" onClick={() => removeFromCart(id)}>X</button>
        </div>
    )
}

export default CartItem
