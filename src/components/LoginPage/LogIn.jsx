import React, { useState } from 'react'
import "./logIn.css"


export default function LogIn() {
    
    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    function changeForm(event) {
        const {name, value} = event.target;
        setForm((prevValue) => ({
            ...prevValue,
            [name]: value
        }))
    }





  return (

    
    <div className='logIn'>
    <h2 className='logInWebsiteName'>12 Week Planner</h2>
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
                    <input type='Checkbox'/>
                    <p>Remember Me</p>
                </div>
                <div>
                    <p>Forgot Password</p>
                </div>
               
            </div>
            <button className='logInButton'>Sign In</button>
        </form>
      </div>
    </div>

  )
}
