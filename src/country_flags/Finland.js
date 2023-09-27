import React from 'react'

function Finland({ dataReceived }) {
  return (
    <div className={'flag_container finland ' + (dataReceived && 'predicted_flag')}>
        <div className="finland_vertical_stripe"></div>      
        <div className="finland_horizontal_stripe"></div>
    </div>
  )
}

export default Finland
