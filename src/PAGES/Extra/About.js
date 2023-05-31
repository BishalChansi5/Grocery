import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import img from '../../ASSETS/img7.jpg'
import img1 from '../../ASSETS/img10.jpg'
import Footer from '../../COMPONENTS/Footer/Footer'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import './Extrapages.css'
const About = () => {
  return (
    <div className='extrapage'>
        <Navbar/>
        <SingleBanner
        heading="About US"
        bannerimage= 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
        />
        <div className='pgleft pgcommon'>
            <img src={img} alt="image" />
        
        <div>
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores placeat vitae possimus amet esse veritatis numquam? Blanditiis impedit recusandae odit omnis, minima harum enim perferendis beatae nisi similique, reprehenderit nam!</p>
        </div>
        </div>
        <div className='pgright pgcommon'>
            <img src={img1} alt="image" />
        
        <div>
            <h1>Who are we</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores placeat vitae possimus amet esse veritatis numquam? Blanditiis impedit recusandae odit omnis, minima harum enim perferendis beatae nisi similique, reprehenderit nam!</p>
        </div>
        </div>
        <Footer/>
        <Footer2/>
    </div>
  )
}

export default About