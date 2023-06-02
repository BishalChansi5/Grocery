import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import { Link } from 'react-router-dom'
import './AuthPage.css'
import img from '../../ASSETS/img8.jpg'

const ForgotPassword = () => {
  return (
    <div className='authpage'>
    <Navbar reloadnavbar={false} />
    <div className='authcont'>
      <img src={img} alt='no image' />

       <form className='authform'>
        <h1>Forgot Password</h1>

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
          <label htmlFor='cpassword'>Confirm New Password</label>
          <input type='password' id='cpassword' />  
        </div>
        </div>
        <Link to='/login' 
        className='stylenone'
        >
        <p>Try login again?</p>
        </Link>
    
        <h2 className='or'>OR</h2>
        <Link to='/signup' className='stylenone'>
        <button className='btn'>Verify</button>
        </Link>
       </form>
    </div>
</div>
  )
}

export default ForgotPassword