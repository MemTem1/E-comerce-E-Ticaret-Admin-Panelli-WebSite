import React, { useContext, useState } from 'react'
import './ProductItem.css'
import PropTypes from 'prop-types'
import { CartContext } from '../../context/CartProvider'

function ProductItem({ Product }) {
    const { addToCart } = useContext(CartContext);



    return (
        <div
            className="product-item glide__slide glide__slide--clone"

        >
            <div className="product-image">
                <a href="#" draggable={true}>
                    <img
                        src={Product.img.singleImage}
                        alt=""
                        className="img1"
                    />
                    <img
                        src={Product.img.thumbs[1]}
                        alt=""
                        className="img2"
                    />
                </a>
            </div>

            <div className="product-info">
                <a
                    href="$" className="product-title" draggable={true}>
                    {Product.name}
                </a>

                <ul className="product-star">
                    <li>
                        <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                        <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                        <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                        <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                        <i className="bi bi-star-half"></i>
                    </li>
                </ul>

                <div className="product-prices">
                    <strong className="new-price">${Product.price.newPrice.toFixed(2)}</strong>
                    <span className="old-price">${Product.price.oldPrice.toFixed(2)}</span>
                </div>

                <span className="product-discount">-{Product.discount}%</span>

                <div className="product-links">
                    <button className='add-to-cart' onClick={() => addToCart(Product)}>
                        <i className="bi bi-basket-fill"></i>
                    </button>
                    <button>
                        <i className="bi bi-heart-fill"></i>
                    </button>
                    <a href="#" draggable={true}>
                        <i className="bi bi-eye-fill"></i>
                    </a>
                    <a href="#" draggable={true}>
                        <i className="bi bi-share-fill"></i>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default ProductItem

ProductItem.propTypes = {
    Product: PropTypes.object,
    setCartItems: PropTypes.func,
}