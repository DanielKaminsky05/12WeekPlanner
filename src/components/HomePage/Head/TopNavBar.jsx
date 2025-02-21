import React from 'react'
import './topNavBar.css'
import { NavLink } from "react-router-dom";

export default function TopNavBar() {
  return (
    <nav className='navContainer'>
      <h1>12 Week Planner</h1>
      <div className='userLogInSignUp'>
      <NavLink to="/login"><button>Login</button></NavLink>
        

      </div>

    </nav>
  )
}
