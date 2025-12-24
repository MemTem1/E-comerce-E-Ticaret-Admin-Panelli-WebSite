import React from 'react'
import './Product.css'
import ProductItem from './ProductItem'
import ProductTitle from './ProductTitle'
function Product() {
    return (
        <section className="products">
            <div className="container">
                <ProductTitle />

                <div className="product-wrapper product-carousel">
                    <div className="glide__track" data-glide-el="track">
                        <ul
                            className="product-list glide__slides" id="product-list">
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                        </ul>
                    </div>

                    <div className="glide__arrows" data-glide-el="controls">
                        <button
                            className="glide__arrow glide__arrow--left"
                            data-glide-dir="<"
                        >
                            <i className="bi bi-chevron-left"></i>
                        </button>

                        <button
                            className="glide__arrow glide__arrow--right"
                            data-glide-dir=">"
                        >
                            <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Product