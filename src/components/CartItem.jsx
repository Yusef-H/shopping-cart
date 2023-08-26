import React from 'react'
import { useCart } from '../context/CartContext'
import '../styles/Cart.css'
function CartItem({ id, quantity, storeItems }) {
    const { removeFromCart } = useCart();
    const item = storeItems.find(item => item.id === id);
    if (item == null) return null;
    return (
        <div className='cart-item-cont'>
            {item.title}
        </div>
    )
}

export default CartItem
