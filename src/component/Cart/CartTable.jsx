import React, { useContext } from 'react'
import CartItem from './CartIttem.jsx'
import { CartContext } from '../../context/CartProvider.jsx'
import Cart from './Cart.jsx'
function CartTable() {

    const { cartItems } = useContext(CartContext)
    return (
        <table className="shop-table">
            <thead>
                <tr>
                    <th className="product-thumbnail">&nbsp;</th>
                    <th className="product-thumbnail">&nbsp;</th>
                    <th className="product-name">Product</th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-subtotal">Subtotal</th>
                </tr>
            </thead>
            <tbody className="cart-wrapper">
                {
                    cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))
                }


            </tbody>
        </table>
    )
}

export default CartTable