import React from 'react'

function Denmark({ dataReceived }) {
    return (
        <div className={'flag_container denmark ' + (dataReceived && 'predicted_flag')}>
            <div className="denmark_vertical_stripe"></div>
            <div className="denmark_horizontal_stripe"></div>
        </div>
    )
}

export default Denmark
