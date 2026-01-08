import React, { useState } from 'react'
import Header from '../component/Layout/header/Header'
import Footer from '../component/Layout/footer/Footer'
import Proptypes from "prop-types"
import Search from '../component/Modals/Search/Search'

const MainLayout = ({ children }) => {
    const [isSearchShow, setIsSearchShow] = useState(false);
    return (
        <div className='Main-Layout'>
            <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} />
            <Header setIsSearchShow={setIsSearchShow} />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout

MainLayout.propTypes = {
    children: Proptypes.node
}