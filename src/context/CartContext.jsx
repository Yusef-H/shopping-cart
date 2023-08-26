import { createContext, useContext, useState } from "react";
import Cart from "../components/Cart";


const CartContext = createContext({});

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [hidden, setHidden] = useState(true);

    function getItemQuantity(id) {
        const item = cartItems.find(item => item.id === id);
        if (item != null) {
            return item.quantity;
        }
        else {
            return 0;
        }
    }

    function incrementQuantity(id) {
        setCartItems(currItems => {
            // item doesnt exist
            console.log(currItems);
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }];
            } else { //item exists
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    else {
                        return item;
                    }
                })
            }
        })
    }

    function decrementQuantity(id) {
        setCartItems(currItems => {
            // theres only 1 from this item
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id); // remove it.
            } else { // just decrease count by one (no need to remove)
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    else {
                        return item;
                    }
                })
            }
        })
    }

    function removeFromCart(id) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id);
        })
    }

    function globalCartQuantity() {
        return cartItems.reduce((quantity, item) => {
            return item.quantity + quantity
        }, 0);
    }

    function toggleCart() {
        setHidden(!hidden);
    }



    return <CartContext.Provider value={{
        getItemQuantity,
        incrementQuantity,
        decrementQuantity,
        removeFromCart,
        globalCartQuantity,
        hidden,
        toggleCart,
        cartItems
    }}>
        {children}
    </CartContext.Provider>
}