import React from 'react'
import './CategoriesItem.css'
function CategoriesItem() {
    return (
        <li className="category-item">
            <a href="#">
                <img
                    src="img/categories/categories1.png"
                    alt=""
                    className="category-image"
                />
                <span className="category-title">Smartphone</span>
            </a>
        </li>
    )
}

export default CategoriesItem