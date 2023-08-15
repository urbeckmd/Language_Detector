import React from 'react'

function France({ dataReceived }) {
  return (
    <div className={'flag_container france ' + (dataReceived && 'predicted_flag')}>
      <div className="france_blue_stripe"></div>
      <div className="france_red_stripe"></div>
    </div>
  )
}

export default France
