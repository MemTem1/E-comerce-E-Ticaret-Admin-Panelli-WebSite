import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Slider from "react-slick";
import './Product.css'
import ProductItem from './ProductItem'
import ProductTitle from './ProductTitle'
import productData from '../data.json'


const NextBtn = ({ onClick }) => {
    return (
        <button className="glide__arrow glide__arrow--right" onClick={onClick}>
            <i className="bi bi-chevron-right"></i>
        </button>
    )

}
NextBtn.prototypes = {
    onClick: PropTypes.func,
}
const PrevBtn = ({ onClick }) => {
    return (
        <button className="glide__arrow glide__arrow--left" onClick={onClick}>
            <i className="bi bi-chevron-left"></i>
        </button>
    )
}
PrevBtn.prototypes = {
    onClick: PropTypes.func,
}
function Product() {

    const [products, setProducts] = useState(productData)

    var sliderSettings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />,
        autoplaySpeed: 3000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1
                }
            },
        ]

    }
    return (
        <section className="products">
            <div className="container">
                <ProductTitle />

                <div className="product-wrapper product-carousel">

                    <Slider {...sliderSettings}>
                        {products.map((Product) => (
                            <ProductItem Product={Product} key={Product.id} />
                        ))}
                    </Slider>



                </div>
            </div>
        </section>

    )
}

export default Product
