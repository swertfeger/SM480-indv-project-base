import React, { useState } from 'react';
import './TwitterPopup.scss';
import TweetInfo from './TweetInfo';

function  TwitterPopup(props){

    return (
        <div className="twitter-popup-container" >
            <div className="exit-tweet">
                X
            </div>

            <p>
                Art Info
            </p> 

            <div className="art-img">
                <img src="" alt=""/>
            </div>

            <TweetInfo />
        </div>
    )
}

// Adding this broke things
// Popup.propTypes = {
//     // eslint-disable-next-line no-undef
//     show: PropTypes.bool,
//     // for hiding pop up
//     // eslint-disable-next-line no-undef
//     hidePopUp: PropTypes.func,
// }
 
export default TwitterPopup;