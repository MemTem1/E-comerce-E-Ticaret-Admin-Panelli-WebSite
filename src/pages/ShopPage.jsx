import React from 'react'
import Categories from '../component/Categories/Categories.jsx'
import Product from '../component/Products/Product.jsx'
import CampaignSingle from '../component/CampaignSingle/CampaignSingle.jsx'
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