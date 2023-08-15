import React from 'react';
import StarIcon from '@mui/icons-material/Star';

function America({ dataReceived }) {
    return (
        <div className={'flag_container america ' + (dataReceived && 'predicted_flag')}>
            <div className="america_stripe_container">
                <div className="america_red_strip"></div>
                <div className="america_red_strip"></div>
                <div className="america_red_strip"></div>
                <div className="america_red_strip"></div>
                <div className="america_red_strip"></div>
            </div>
            <div className="america_stars_container">
                <StarIcon className='america_star america_star_left america_star_top' />
                <StarIcon className='america_star america_star_left america_star_middle' />
                <StarIcon className='america_star america_star_left america_star_bottom' />
                <StarIcon className='america_star america_star_center america_star_top' />
                <StarIcon className='america_star america_star_center america_star_middle america_star_dead_center' />
                <StarIcon className='america_star america_star_center america_star_bottom' />
                <StarIcon className='america_star america_star_right america_star_top' />
                <StarIcon className='america_star america_star_right america_star_middle' />
                <StarIcon className='america_star america_star_right america_star_bottom' />
            </div>
        </div>
    )
}

export default America
