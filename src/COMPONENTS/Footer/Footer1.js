import React from 'react'
import video from '../../ASSETS/video2.mp4'
import './Footer1.css'
const Footer1 = () => {
  return (
    <div className='footer1'>
        <div className='left'>
        <video src={video} loop autoPlay muted type='video/mp4'></video>
        </div>
        <div className='right'>
            <h1>
            Who's ready for some grocery shopping
            </h1>
            <p>
            Don't forget to add some freshness to your cart with these new produce finds
            </p>
        </div>
    </div>
  )
}

export default Footer1