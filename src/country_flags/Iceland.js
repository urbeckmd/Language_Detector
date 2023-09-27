import React from 'react'

function Iceland({ dataReceived }) {
    return (
        <div className={'flag_container iceland ' + (dataReceived && 'predicted_flag')}>
            <div className="iceland_vertical_white_stripe">
                <div className="iceland_vertical_red_stripe"></div>
            </div>
            <div className="iceland_horizontal_white_stripe">
                <div className="iceland_horizontal_red_stripe"></div>
            </div>
        </div>
    )
}

export default Iceland
