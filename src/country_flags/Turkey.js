import React from 'react'
import StarIcon from '@mui/icons-material/Star';

function Turkey({ dataReceived }) {
  return (
    <div className={'flag_container turkey ' + (dataReceived && 'predicted_flag')}>
      <div className="turkey_white_circle">
        <div className="turkey_red_circle"></div>
      </div>
      <StarIcon className='turkey_star'/>
    </div>
  )
}

export default Turkey
