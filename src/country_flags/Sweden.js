import React from 'react'

function Sweden({ dataReceived }) {
  return (
    <div className={'flag_container sweden ' + (dataReceived && 'predicted_flag')}>
        <div className="sweden_vertical_stripe"></div>      
        <div className="sweden_horizontal_stripe"></div>
    </div>
  )
}

export default Sweden
