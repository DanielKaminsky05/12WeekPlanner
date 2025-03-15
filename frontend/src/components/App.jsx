import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './HomePage/HomePage'
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';
import {  AuthProvider } from '../UserAuth/AuthContext';
import axios from 'axios';
import PlanPage from './PlansPage/PlanPage';

const test = async () => {
  try {
    const response = await axios.post(`http://localhost:5000/tasks/123`);
    console.log(response.data);
  } catch (error) {
    console.error('Error making request:', error);
  }
};


export default  function App() {
  
  useEffect(() => {
    test()
  }, [])
  
  return(
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/plans' element={<PlanPage/>}/>
          <Route path = '/' element={<HomePage/>}/>
          <Route path = '/login' element={<LoginPage/>}/>
          <Route path = '/register' element={<RegisterPage/>}/>
        </Routes>
      </Router>
    </AuthProvider>
  )
}
