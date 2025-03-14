import React, { useEffect, useState } from 'react';
import './register.css';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase';
import { useAuthContext } from '../../UserAuth/AuthContext';

export default function Register() {

  


  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();
  const {user, loading} = useAuthContext();
  useEffect(() => {
    
    if (user) {
      navigate('/');
    }
  }, [user, navigate])

  function changeForm(event) {
    const { name, value } = event.target;
    setForm((prevValue) => ({
      ...prevValue,
      [name]: value
    }));
  }

  async function signUpWithEmail(email, password) {
    const {user, error} = await supabase.auth.signUp({email, password});
    if (error) {
      if (error.status = 422) {
        setPasswordError(error.message)
      }
      else setPasswordError(error.message)
    }
    else {
      navigate('/')
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (form.password == form.confirmPassword) {
      signUpWithEmail(form.email, form.password)
    
    }
    else if (form.password != form.confirmPassword) {
      setPasswordError("Error: Passwords do not match");
    }
    else if (form.password.length < 6) {
      setPasswordError("Error: Password needs to be greater than 6 characters")
    }
    
    
    
  }

  return (
    <div className='registerPage'>
      <div className='registerContainer'>
      <Link to = '/' className='logInWebsiteName'>12 Week Planner</Link>
        <h3 className='registerHeading'>Start Planning Now</h3>
        <form className='registerForm' onSubmit={handleSubmit}>
          <div>
            <p className='registerInputHeading'>Email Address</p>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={changeForm}
              className='registerInput'
            />
          </div>
          <div>
            <p className='registerInputHeading'>Password</p>
            <input
              type='password'
              name='password'
              value={form.password}
              onChange={changeForm}
              className='registerInput'
            />
          </div>
          <div>
            <p className='registerInputHeading'>Confirm Password</p>
            <input
              type='password'
              name='confirmPassword'
              value={form.confirmPassword}
              onChange={changeForm}
              className='registerInput'
            />
            {passwordError ? <p className='registerInputError'>{passwordError}</p>: ""}
          </div>
          
          <div>
          
            <div className='registerLogInLink'>
              <p>Already have an Account?</p>
              <Link to='/login'>Log In Here</Link>
            </div>
          </div>
          <button type='submit' className='registerSubmitButton'>Sign Up</button>
        </form>
      </div>
    </div>
  );
}