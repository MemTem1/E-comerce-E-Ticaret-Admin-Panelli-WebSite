import React from 'react'
import './ProductItem.css'
function ProductItem({ Product }) {

    return (
        <div
            className="product-item glide__slide glide__slide--clone"

        >
            <div className="product-image">
                <a href="#" draggable={true}>
                    <img
                        src="img/products/product1/1.png"
                        alt=""
                        className="img1"
                    />
                    <img
                        src="img/products/product1/2.png"
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
                    <strong className="new-price">${Product.price.newPrice}</strong>
                    <span className="old-price">${Product.price.oldPrice}</span>
                </div>

                <span className="product-discount">-17%</span>

                <div className="product-links">
                    <button>
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