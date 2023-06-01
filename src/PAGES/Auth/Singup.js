import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import './AuthPage.css'
import img from '../../ASSETS/img4.jpg'
import { Link } from 'react-router-dom'

const Singup = () => {
  return (
    <div className='authpage'>
    <Navbar/>
    <div className='authcont'>
      <img src={img} alt='no image' />

       <form className='authform'>
        <h1>Signup</h1>
        <div className='form-group-row'>
        <div className='formgroup'>
            <label htmlFor='fname'>First Name</label>
            <input type='text' id='fname' />
        </div>
        </div>
        <div className='formgroup'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' />  
        </div>

        <div className='form-group-row'>
        <div className='formgroup'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' />  
        </div>
        <div className='formgroup'>
          <label htmlFor='cpassword'>Confirm Password</label>
          <input type='password' id='cpassword' />  
        </div>
        </div>
        <Link to='/login' 
        className='stylenone'
        >
        <p>Already have an account?</p>
        </Link>
    
        <h2 className='or'>OR</h2>
        <Link to='/signup' className='stylenone'>
        <button className='btn'>Signup</button>
        </Link>
       </form>
    </div>
</div>
  )
}

export default Singup