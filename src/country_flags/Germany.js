import React from 'react'

function Germany({ dataReceived }) {
  return (
    <div className={'flag_container germany ' + (dataReceived && 'predicted_flag')}>
      <div className="germany_black_stripe"></div>
      <div className="germany_yellow_stripe"></div>
    </div>
  )
}

export default Germany
