import React from 'react'
import Header from '../component/Layout/header/Header'
import Categories from '../component/Layout/Categories/Categories.jsx'
import Product from '../component/Layout/Products/Product.jsx'
import CampaignSingle from '../component/Layout/CampaignSingle/CampaignSingle'
import Policy from '../component/Layout/policy/Policy.jsx'
import Footer from '../component/Layout/footer/Footer.jsx'
function ShopPage() {
    return (
        <>
            <Header />
            <Categories />
            <Product />
            <CampaignSingle />
            <Product />
            <Policy />
            <Footer />
        </>
    )
}

export default ShopPage