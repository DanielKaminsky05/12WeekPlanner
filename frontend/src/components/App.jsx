import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './HomePage/HomePage'
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';
import {  AuthProvider } from '../UserAuth/AuthContext';
import axios from 'axios';
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
