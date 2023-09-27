import React from 'react';

function Czech_Republic({ dataReceived }) {
    return (
        <div className={'flag_container czech_republic ' + (dataReceived && 'predicted_flag')}>
            <div className="czech_republic_stripes_container">
                <div className="czech_republic_white_stripe"></div>
                <div className="czech_republic_red_stripe"></div>
            </div>
            <div className="czech_republic_blue_triangle"></div>
        </div>
    )
}

export default Czech_Republic
