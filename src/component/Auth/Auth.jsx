import React from 'react'
import Login from '../Auth/Login.jsx'
import Register from '../Auth/Register.jsx'
import Header from '../header/Header.jsx'
import Policy from '../policy/Policy.jsx'
import Footer from '../footer/Footer.jsx'
import './Auth.css'

function Auth() {
    return (
        <>
            <section className="account-page">
                <div className="container">
                    <div className="account-wrapper">
                        <Login />

                        <Register />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Auth