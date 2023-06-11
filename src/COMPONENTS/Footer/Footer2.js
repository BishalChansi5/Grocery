import React from 'react'
import img from '../../ASSETS/esewa.png'
import logo from '../../ASSETS/logo.png'
import facebook from '../../ASSETS/facebbok1.png'
import twitter from '../../ASSETS/twitter.png'
import './Footer2.css'
import { Link } from 'react-router-dom'
const Footer2 = () => {
  return (
    <div className='footer'>
      <div className='footerin1'>
         <div className='f1'>
          <img src={logo} alt='logo' className='logo'/> 
          <p>We highly value your feedback. See what our clients are saying about us.
            Client success is always a priority for us. We strive to deliver high-quality solutions that are tailored specifically to our clients' needs and helped them achieve their goals</p>
          <div className='img'>
           <img src={facebook} alt='facebook' className='social' />
          <img src={twitter} alt='twitter' className='social' />
          </div>
         </div>
         <div className='f2'>
          <h3>About Us</h3>
          <Link to='/about' className='stylenone'>
            <p>About us</p>
          </Link>
          <Link to='/contact' className='stylenone'>
            <p>Contact us</p>
          </Link>
          <p>About team</p>
          <p>Customer Support</p>
        </div>
        <div className='f2'>

          <h3>Our Information</h3>
          <Link to='/privacypolicy' className='stylenone'>
            <p>Privacy policy</p>
          </Link>
          <Link to='/termsandconditions' className='stylenone'>
            <p>Terms & conditions</p>
          </Link>
          <Link to='/FAQ' className='stylenone'>
          <p>FAQs</p>
          </Link>
          <p>Site Map</p>

        </div>
         <div className='f2'>
         <h3>Community</h3>
           <p>Announcements</p>
           <p>Answer Center</p>
           <p>Discussion Boards</p>
           <p>Giving Works</p>
         </div>
         <div className='f2'>
          <h3>Subscribe Now</h3>
          <p>Subscribe your email for newsletter and featured news based on your interest</p>
          <div className='inputcontainer'>
            <span className='icon1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                </svg>

            </span>
            <input type='text' placeholder='Enter your email' />
            <span className='icon2'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
               </svg>

            </span>
          </div>
         </div>
      </div>
      <div className='footerin2'>
        <h3>
          @ Copyright 2023 Ashish SuperMart, Inc. All rights reserved
        </h3>
        <img src={img} alt='image'/>
      </div>
    </div>
  )
}

export default Footer2