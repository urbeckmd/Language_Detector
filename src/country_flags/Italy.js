import React from 'react'

function Italy({ dataReceived }) {
  return (
    <div className={'flag_container italy ' + (dataReceived && 'predicted_flag')}>
      <div className="italy_green_stripe"></div>
      <div className="italy_red_stripe"></div>
    </div>
  )
}

export default Italy
