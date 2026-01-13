import React, { useState, useEffect } from 'react'
import Header from '../component/Layout/header/Header'
import Footer from '../component/Layout/footer/Footer'
import Proptypes from "prop-types"
import Search from '../component/Modals/Search/Search'
import Dialog from '../component/Modals/Dialog/Dialog'
const MainLayout = ({ children }) => {
    const [isSearchShow, setIsSearchShow] = useState(false);
    const [isDialogShow, setisDialogShow] = useState(false)
    useEffect(() => {
        const dialoStatus = localStorage.getItem("dialog") ? JSON.parse(localStorage.getItem("dialog")) : localStorage.setItem("dialog", JSON.stringify(true));
        setTimeout(() => {
            setisDialogShow(dialoStatus)
        }, 2000);
    }, [])


    return (
        <div className='Main-Layout'>
            <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} />
            <Dialog isDialogShow={isDialogShow} setisDialogShow={setisDialogShow} />
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