import React from 'react'

function Netherlands({ dataReceived }) {
  return (
    <div className={'flag_container netherlands ' + (dataReceived && 'predicted_flag')}>
      <div className="netherlands_red_stripe"></div>
      <div className="netherlands_blue_stripe"></div>
    </div>
  )
}

export default Netherlands
