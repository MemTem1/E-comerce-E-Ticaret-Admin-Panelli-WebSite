import React, { useState } from 'react'
import './Galery.css'
import productData from "../../data.json"
function Galery() {
    console.log(productData)
    const [activeImg, setActiveImg] = useState("img/products/product1/1.png")
    return (
        <div className="product-gallery">
            <div className="single-image-wrapper">
                <img
                    src={activeImg}
                    id="single-image"
                    alt=""
                />
            </div>

            <div className="product-thumb">
                <div className="glide__track" data-glide-el="track">
                    <ol className="gallery-thumbs glide__slides"></ol>
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
    )
}

export default Galery