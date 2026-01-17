import { createContext, useState } from "react";
import PropTypes from "prop-types";


export const CartContext = createContext();


const CartProivder = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    console.log("cart items :", cartItems)
    const addToCart = (cartItem) => {
        setCartItems((prevCart) => [...prevCart, cartItem])

    }


    return (
        <CartContext.Provider
            value={{
                addToCart
            }}

        >

            {children}
        </CartContext.Provider>
    )
}

export default CartProivder;

CartProivder.propTypes = {
    children: PropTypes.node
}