import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";


export const CartContext = createContext();


const CartProivder = ({ children }) => {
    const [cartItems, setCartItems] = useState(

        localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
    );

    useEffect(() => {

        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }, [cartItems])


    const addToCart = (cartItem) => {
        setCartItems((prevCart) => [...prevCart, cartItem])

    }

    const removeFromCart = (itemId) => {

        const filteredCartItems =  ()=>{

        }



    }


    return (
        <CartContext.Provider
            value={{
                cartItems,
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