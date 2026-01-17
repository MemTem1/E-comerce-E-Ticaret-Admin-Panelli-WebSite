import React from 'react'

function CartIttem({ item }) {
    console.log(item)
    return (
        <tr className="cart-item">
            <td></td>
            <td className="cart-image">
                <img src={item.img.singleImage} alt="" />
                <i className="bi bi-x delete-cart" ></i>
            </td>
            <td>{item.name}</td>
            <td>${item.price.newPrice}</td>
            <td className="product-quantity">1</td>
            <td className="product-subtotal">${item.price.newPrice}</td>
        </tr>
    )
}

export default CartIttem