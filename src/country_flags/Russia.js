import React from 'react'

function Russia({ dataReceived }) {
  return (
    <div className={'flag_container russia ' + (dataReceived && 'predicted_flag')}>
        <div className="russia_white_stripe"></div>
        <div className="russia_red_stripe"></div>
    </div>
  )
}

export default Russia
