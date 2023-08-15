import React from 'react'

function International({ loading, dataReceived }) {
    return (
        <div className={'flag_container international ' + (loading && 'loading_flag') + " " + (dataReceived && 'removing_flag') + " " + ((!loading & !dataReceived) && 'new_prediction')}>
            <div className="international_rings_container">
                <div className="international_ring international_ring_center"></div>
                <div className="international_ring international_ring_top_left"></div>
                <div className="international_ring international_ring_top_right"></div>
                <div className="international_ring international_ring_right"></div>
                <div className="international_ring international_ring_bottom_right"></div>
                <div className="international_ring international_ring_bottom_left"></div>
                <div className="international_ring international_ring_left"></div>
            </div>
        </div>
    )
}

export default International
