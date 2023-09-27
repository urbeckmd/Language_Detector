import React from 'react'

function Hungary({ dataReceived }) {
  return (
    <div className={'flag_container hungary ' + (dataReceived && 'predicted_flag')}>
      <div className="hungary_red_stripe"></div>
      <div className="hungary_green_stripe"></div>
    </div>
  )
}

export default Hungary
