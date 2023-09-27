import React from 'react'

function Norway({ dataReceived }) {
    return (
        <div className={'flag_container norway ' + (dataReceived && 'predicted_flag')}>
            <div className="norway_vertical_white_stripe">
                <div className="norway_vertical_blue_stripe"></div>
            </div>
            <div className="norway_horizontal_white_stripe">
                <div className="norway_horizontal_blue_stripe"></div>
            </div>
        </div>
    )
}

export default Norway
