import React from 'react'

function Slovakia({ dataReceived }) {
    return (
        <div className={'flag_container slovakia ' + (dataReceived && 'predicted_flag')}>
            <div className="slovakia_white_stripe"></div>
            <div className="slovakia_blue_stripe">
                <div className="slovakia_crest_container">
                    <div className="slovakia_crest_cross_container">
                        <div className="slovakia_crest_cross_vertical"></div>
                        <div className="slovakia_crest_cross_top_horizontal"></div>
                        <div className="slovakia_crest_cross_bottom_horizontal"></div>
                    </div>
                    <div className="slovakia_crest_blue_ground"></div>
                </div>
            </div>
            <div className="slovakia_red_stripe"></div>
        </div>
    )
}

export default Slovakia
