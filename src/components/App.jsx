import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './HomePage/HomePage'
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';
import useAuth from './../UserAuth/UseAuth';
import {  AuthProvider } from '../UserAuth/AuthContext';
export default  function App() {
  
 
  return(
    <AuthProvider>
      <Router>
        <Routes>
          <Route path = '/' element={<HomePage/>}/>
          <Route path = '/login' element={<LoginPage/>}/>
          <Route path = '/register' element={<RegisterPage/>}/>
        </Routes>
      </Router>
    </AuthProvider>
  )
}
