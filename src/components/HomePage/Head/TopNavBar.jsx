import React from 'react'
import './topNavBar.css'
import { NavLink } from "react-router-dom";
import useAuth from '../../UseAuth';
import { supabase } from '../../../supabase';

export default function TopNavBar() {
  const { user, loading } = useAuth();
  if (loading) return <p>Loading...</p>;

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    if (error) console.error("Logout error:", error.message);
  }

  return (
    <nav className='navContainer'>
      <h1>12 Week Planner</h1>
      <div className='userLogInSignUp'>
      {user ? <button className='topNavBarLoginButton' onClick={handleLogout}>Sign Out</button>: <NavLink  to="/login"><button className='topNavBarLoginButton'>Log in</button></NavLink> }
      </div>
    </nav>
  )
}
