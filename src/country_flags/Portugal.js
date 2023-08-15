import React from 'react'

function Portugal({ dataReceived }) {
    return (
        <div className={'flag_container portugal ' + (dataReceived && 'predicted_flag')}>
            <div className="portugal_green_half"></div>
            <div className="portugal_yellow_logo">
                <div className="portugal_yellow_line"></div>
                <div className="portugal_yellow_line portugal_yellow_line_diagonal_one"></div>
                <div className="portugal_yellow_line portugal_yellow_line_diagonal_two"></div>
                <div className="portugal_red_logo">
                    <div className="portugal_white_logo">
                        <div className="portugal_blue_logo portugal_blue_logo_top portugal_blue_logo_center"></div>
                        <div className="portugal_blue_logo portugal_blue_logo_bottom portugal_blue_logo_center"></div>
                        <div className="portugal_blue_logo portugal_blue_logo_middle portugal_blue_logo_left"></div>
                        <div className="portugal_blue_logo portugal_blue_logo_middle portugal_blue_logo_right"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portugal
