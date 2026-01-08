import React from 'react'
import Auth from '../component/Layout/Auth/Auth.jsx'
import Header from '../component/Layout/header/Header.jsx'
import Policy from '../component/Layout/policy/Policy.jsx'
import Footer from '../component/Layout/footer/Footer.jsx'
function AuthPage() {
    return (
        <>
            <Header />
            <Auth />

            <Footer />
        </>
    )
}

export default AuthPage