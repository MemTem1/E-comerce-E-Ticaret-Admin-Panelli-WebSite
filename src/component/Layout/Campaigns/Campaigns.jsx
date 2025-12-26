import React from 'react'
import './Campaigns.css'
import CampainItem from './CampainItem'

function Campaigns() {
    return (
        <section className="campaigns">
            <div className="container">
                <div className="campaigns-wrapper">
                    <CampainItem />
                    <CampainItem />
                </div>

                <div className="campaigns-wrapper">
                    <CampainItem />
                    <CampainItem />

                </div>
            </div>
        </section>

    )
}

export default Campaigns