import React from 'react'
import '../styles/Cart.css'
import { useCart } from '../context/CartContext'
import CartItem from './CartItem'
function Cart({ storeItems }) {
    const { hidden, cartItems } = useCart()
    return (
        <div className={hidden ? "cart hide" : "cart show"}>
            {cartItems.map(item => {
                return <CartItem key={item.id} id={item.id} quantity={item.quantity} storeItems={storeItems} />
            })}
        </div>
    )
}

export default Cart
