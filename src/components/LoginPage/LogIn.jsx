import React, { useState, useEffect } from 'react'
import "./logIn.css"
import { Link } from 'react-router-dom';


export default function LogIn() {
    
    const [form, setForm] = useState({
        username: "",
        password: "",
        remember: false
    })

    function changeForm(event) {
        const {name, value} = event.target;
        setForm((prevValue) => ({
            ...prevValue,
            [name]: value
        }))
    }

    function changeRemember() {
        const value = form.remember
        setForm((prevValue) => ({
            ...prevValue,
            remember: !value
        }))
       
    }


  return (

    
    <div className='logIn'>
    <Link to = '/' className='logInWebsiteName'>12 Week Planner</Link>
      <div className='logInContainer'>
        <h1 className='logInWelcome'>Welcome Back</h1>
        <form className='logInForm'>
            <div>
                <h3 className='logInInputSubHeading'>Email Address</h3>
                <input name = 'username' type = 'text' onChange={changeForm} value = {form.username} className='logInInput'/>
            </div>
            <div>
                <h3 className='logInInputSubHeading'>Password</h3>
                <input name = 'password' type = 'text' onChange={changeForm} value = {form.password} className='logInInput'/>
           </div> 
            <div className='logInForgot'>
                <div className='logInRemember'>
                    <input value = {form.remember} className='logInRememberInput' type='Checkbox' onChange={changeRemember}/>
                    <p>Remember Me</p>
                </div>
                <div>
                    <p>Forgot Password</p>
                </div>
               
            </div>
            <button type = 'submit' className='logInButton'>Sign In</button>
        </form>
        <div className='logInRegisterLink'>
            <p>New to 12 Week Planner?</p>
            <Link to="/register">Join Now</Link>
        </div>
      </div>
    </div>

  )
}
