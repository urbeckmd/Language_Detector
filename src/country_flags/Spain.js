import React from 'react'

function Spain({ dataReceived }) {
    return (
        <div className={'flag_container spain ' + (dataReceived && 'predicted_flag')}>
            <div className="spain_yellow_stripe">
                <div className="spain_logo_container">
                    <div className="spain_white_bar spain_white_bar_left"></div>
                    <div className="spain_red_logo"></div>
                    <div className="spain_white_bar spain_white_bar_right"></div>
                </div>
            </div>
        </div>
    )
}

export default Spain
