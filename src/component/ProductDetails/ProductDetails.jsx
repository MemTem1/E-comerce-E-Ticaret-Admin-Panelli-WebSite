import React from 'react'
import Breadcrumb from './Breadcrumb/Breadcrumb'
import Galery from './Galery/Galery'
import Info from './Info/Info'
import Tabs from './Tabs/Tabs'
import './ProductDetails.css'

function ProductDetails() {
    return (
        <section className="single-product">
            <div className="container">
                <div className="single-product-wrapper">

                    <Breadcrumb />

                    {/* site main start */}
                    <div className="single-content">
                        <main className="site-main">
                            <Galery />

                            <Info />
                        </main>
                    </div>
                    {/* site main end */}

                    {/* tabs start */}
                    <Tabs />
                    {/* tabs end */}

                </div>
            </div>
        </section>
    )
}

export default ProductDetails