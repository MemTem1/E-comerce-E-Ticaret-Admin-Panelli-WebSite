import React from 'react'
import FreeProgresBar from '../Cart/FreeProgresBar.jsx'
import CartTable from '../Cart/CartTable.jsx'
import CartCuppon from './CartCuppon.jsx'
import CartTotals from './CartTotals.jsx'
import './Cart.css'


function Cart() {
    return (
        <section className="cart-page">
            <div className="container">
                <div className="cart-page-wrapper">
                    <form className="cart-form">
                        <FreeProgresBar />

                        <div className="shop-table-wrapper">
                            <CartTable />

                            <CartCuppon />
                        </div>
                    </form>

                    <div className="cart-collaterals">
                        <CartTotals />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Cart