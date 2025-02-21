import React from 'react'
import './register.css'

export default function Register() {
  return (
    <div className='registerPage'>
      <div className='registerContainer'>
        <h3 className='registerHeading'>Start Planning Now</h3>
        <form className='registerForm'>
          <div>
            <p className='registerInputHeading'>Email Address</p>
            <input className='registerInput'/>
          </div>
          <div>
            <p className='registerInputHeading'>Password</p>
            <input className='registerInput'/>
          </div>
          <div>
            <p className='registerInputHeading'>Confirm Password</p>
            <input className='registerInput'/>
          </div>
          <button type='submit'>Sign Up</button>
        </form>
      </div>
    </div>
  )
}
