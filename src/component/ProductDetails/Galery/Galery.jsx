import React, { useState } from 'react'
import Slider from "react-slick";
import PropTypes from 'prop-types';
import './Galery.css'
import productData from "../../data.json"

const NextBtn = ({ onClick }) => {
    return (
        <button
            className="glide__arrow glide__arrow--right"
            data-glide-dir=">"
            onClick={onClick}
        >
            <i className="bi bi-chevron-right"></i>
        </button>
    )

}
NextBtn.prototypes = {
    onClick: PropTypes.func,
}
const PrevBtn = ({ onClick }) => {
    return (
        <button
            className="glide__arrow glide__arrow--left"
            data-glide-dir="<"
            onClick={onClick}
            style={{
                zIndex: "2"
            }}

        >
            <i className="bi bi-chevron-left"></i>
        </button>
    )
}
PrevBtn.prototypes = {
    onClick: PropTypes.func,
}

function Galery() {
    var sliderSettings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />,
        autoplaySpeed: 3000,
        // autoplay: true,

    }

    console.log()
    const [activeImg, setActiveImg] = useState({
        img: productData[0].img.singleImage,
        imgIndex: 0
    })
    return (
        <div className="product-gallery">
            <div className="single-image-wrapper">
                <img
                    src={activeImg.img}
                    id="single-image"
                    alt=""
                />
            </div>

            <div className="product-thumb">
                <div className="glide__track" data-glide-el="track">
                    <ol className="gallery-thumbs glide__slides">
                        <Slider {...sliderSettings}>
                            {
                                productData[0].img.thumbs.map((itemImg, index) => (
                                    <li className='glide__slide glide__slide--active' key={index} onClick={() => {
                                        setActiveImg({
                                            img: productData[0].img.thumbs[index],
                                            imgIndex: index
                                        })
                                    }}>
                                        <img
                                            src={itemImg}
                                            alt=""
                                            className={`img-flud  ${activeImg.imgIndex === index ? "active" : ""}`} />
                                    </li>

                                ))
                            }
                        </Slider>




                    </ol>
                </div>

                <div className="glide__arrows" data-glide-el="controls">


                </div>
            </div>
        </div>
    )
}

export default Galery