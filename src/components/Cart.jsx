import React, { useEffect, useState } from 'react'
import '../styles/Cart.css'
import { useCart } from '../context/CartContext'
import CartItem from './CartItem'
function Cart({ storeItems }) {
    const { hidden, cartItems } = useCart();
    const [total, setTotal] = useState(0);

    function calculateCartTotal() {
        let cartTotal = 0;
        cartItems.forEach(item => {
            const storeItem = storeItems.find(storeItem => storeItem.id === item.id);
            cartTotal += storeItem.price * item.quantity;
        });
        setTotal(cartTotal);
    };

    useEffect(() => {
        calculateCartTotal();
    }, [cartItems]);


    return (
        <div className={hidden ? "cart hide" : "cart show"}>
            <h1 className='cart-title'>Cart</h1>
            <h2 className='total'>Total: {total.toFixed(2)} $
            </h2>
            {cartItems.map(item => {
                return <CartItem key={item.id} id={item.id} quantity={item.quantity} storeItems={storeItems} />
            })}
        </div>
    )
}

export default Cart
