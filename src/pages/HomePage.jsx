import React from 'react'
import Sliders from '../component/Slider/Sliders.jsx'
import Categories from '../component/Categories/Categories.jsx'
import Product from '../component/Products/Product.jsx'
import Campaigns from '../component/Campaigns/Campaigns.jsx'
import Blogs from '../component/Blogs/Blogs.jsx'
import Brands from '../component/Brands/Brands.jsx'
import CampaignSingle from '../component/CampaignSingle/CampaignSingle.jsx'

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