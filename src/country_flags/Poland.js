import React from 'react';

function Poland({ dataReceived }) {
    return (
        <div className={'flag_container poland ' + (dataReceived && 'predicted_flag')}>
            <div className="poland_white_stripe"></div>
            <div className="poland_red_stripe"></div>
        </div>
    )
}

export default Poland
