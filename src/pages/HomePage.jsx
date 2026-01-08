import React from 'react'
import Sliders from '../component/Layout/Slider/Sliders.jsx'
import Categories from '../component/Layout/Categories/Categories.jsx'
import Product from '../component/Layout/Products/Product.jsx'
import Campaigns from '../component/Layout/Campaigns/Campaigns.jsx'
import Blogs from '../component/Layout/Blogs/Blogs.jsx'
import Brands from '../component/Layout/Brands/Brands.jsx'
import CampaignSingle from '../component/Layout/CampaignSingle/CampaignSingle.jsx'

function HomePage() {
    return (
        <>
            <Sliders />
            <Categories />
            <Product />
            <Campaigns />
            <Product />
            <Blogs />
            <Brands />
            <CampaignSingle />
        </>
    )
}

export default HomePage