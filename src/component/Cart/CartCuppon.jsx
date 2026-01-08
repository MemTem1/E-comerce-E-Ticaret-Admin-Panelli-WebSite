import React from 'react'

function CartCuppon() {
    return (
        <div className="actions-wrapper">
            <div className="coupon">
                <input
                    type="text"
                    className="input-text"
                    placeholder="Coupon code"
                />
                <button className="btn" type="button">
                    Apply Coupon
                </button>
            </div>
            <div className="update-cart">
                <button className="btn" type="button">
                    Update Cart
                </button>
            </div>
        </div>
    )
}

export default CartCuppon