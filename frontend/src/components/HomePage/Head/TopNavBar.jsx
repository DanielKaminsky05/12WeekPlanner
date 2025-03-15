import React from 'react'
import './topNavBar.css'
import { NavLink } from "react-router-dom";
import useAuth from '../../../UserAuth/UseAuth';
import { supabase } from '../../../supabase';
import UserMenu from "./UserMenu"
import { useAuthContext } from '../../../UserAuth/AuthContext';

export default function TopNavBar() {
  const { user, loading } = useAuthContext()
  if (loading) return <p>Loading...</p>;

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    if (error) console.error("Logout error:", error.message);
  }

  return (
    <nav className='navContainer'>
      <div style={{display: 'flex', gap: '20px'}}>

    
        <h1>12 Week Planner</h1>
        <NavLink  to="/plans"><p>Plans</p></NavLink>
      </div>
      
      
      <div className='userLogInSignUp'>
      
      {user ? <UserMenu/> : <NavLink  to="/login"><button className='topNavBarLoginButton'>Log in</button></NavLink> }
      </div>
    </nav>
  )
}
