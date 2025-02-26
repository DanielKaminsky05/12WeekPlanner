import React, { useState, useEffect } from 'react'
import "./logIn.css"
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase';

export default function LogIn() {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [form, setForm] = useState({
        email: "",
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

    async function handleLogin(event) {
        event.preventDefault()
        setError(null)

        const {data, error} = await supabase.auth.signInWithPassword({
            email: form.email,
            password: form.password
        })
        if (error) {
            console.error("Login error:", error.message);
            if (error.status == 400) {
                setError("Invalid Login Credentials");
            }
            
          } else {
            console.log("User logged in:", data);
            navigate('/')
          }
    }

    

  return (

    
    <div className='logIn'>
    <Link to = '/' className='logInWebsiteName'>12 Week Planner</Link>
      <div className='logInContainer'>
        <h1 className='logInWelcome'>Welcome Back</h1>
        <form className='logInForm' onSubmit={handleLogin}>
            <div>
                <h3 className='logInInputSubHeading'>Email Address</h3>
                <input name = 'email' type = 'email' onChange={changeForm} value = {form.username} className='logInInput'/>
            </div>
            <div>
                <h3 className='logInInputSubHeading'>Password</h3>
                <input name = 'password' type = 'password' onChange={changeForm} value = {form.password} className='logInInput'/>
                {error ? <p className='registerInputError'>{error}</p>: ""}
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
