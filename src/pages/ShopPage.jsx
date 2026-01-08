import React from 'react'
import Categories from '../component/Layout/Categories/Categories.jsx'
import Product from '../component/Layout/Products/Product.jsx'
import CampaignSingle from '../component/Layout/CampaignSingle/CampaignSingle'
function ShopPage() {
    return (
        <>
            <Categories />
            <Product />
            <CampaignSingle />
            <Product />

        </>
    )
}

export default ShopPage