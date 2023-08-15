import React from 'react'

function Greece({ dataReceived }) {
    return (
        <div className={'flag_container greece ' + (dataReceived && 'predicted_flag')}>
            <div className="greece_stripe_container">
                <div className="greece_blue_strip"></div>
                <div className="greece_blue_strip"></div>
                <div className="greece_blue_strip"></div>
                <div className="greece_blue_strip"></div>
                <div className="greece_blue_strip"></div>
            </div>
            <div className="greece_cross_container">
                <div className="greece_cross_vertical_stripe"></div>
                <div className="greece_cross_horizontal_stripe"></div>
            </div>
        </div>
    )
}

export default Greece
