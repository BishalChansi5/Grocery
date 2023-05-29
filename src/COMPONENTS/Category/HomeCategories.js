import React from 'react'
import './HomeCategories.css'
import video2 from '../../ASSETS/video1.mp4'
import img7 from '../../ASSETS/img7.jpg'
import img8 from '../../ASSETS/img8.jpg'
import img9 from '../../ASSETS/4.png'
import img10 from '../../ASSETS/img12.png'
const HomeCategories = () => {
  return (
    <div className='homecategories'>
      <div className='container'>
        <img src={img10}  alt='img10'/>
      {/* <video src={video2} loop autoPlay muted type='video/mp4'></video> */}
      <div className='content'>
        <h1>
        Fresh produce, fresh start!
        </h1>
        <p>Fruits and veggies – nature's candy!</p>
      </div>
      </div>
      <div className='container'>
        <img src={img7} alt='img7'/>
        <div className='content'>
        <h1>
        Shopping for food is my love language!
        </h1>
        <p>The produce section is my happy place!</p>
      </div>
      </div>
      <div className='container'>
      <img src={img8} alt='img8'/>
      <div className='content'>
        <h1>
        Life is too short for bad food!
        </h1>
        <p>Healthy food = happy mood!</p>
      </div>
      </div>
      <div className='container'>
        
      <img src={img9} alt='img9'/>
      <div className='content'>
        <h1>
        Eating healthy starts with a trip to the grocery store.
        </h1>
        <p>Freshness is just a basket away</p>
      </div>
      </div>
    </div>
  )
}

export default HomeCategories