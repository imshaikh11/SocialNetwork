import React from 'react'
import { Link } from 'react-router-dom'
import SignIn from './SignIn'

function SignUp() {
  return (
    <div className='mycart'>
      <div className='card auth-card'>
        <h2>InstaBook</h2>
        <input type="text" placeholder='Name' />
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Password' />
        <button class="btn waves-effect waves-light" type="submit">Sign Up</button>
        <h5><Link to = "/SignIn">Already have an account?</Link></h5>
      </div>
    </div>
  )
}

export default SignUp