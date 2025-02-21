import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './HomePage'
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import useAuth from './UseAuth';

export default  function App() {
  const { user, loading } = useAuth();
  console.log("Current User:", user);
  return(
    <Router>
      <Routes>
        <Route path = '/' element={<HomePage/>}/>
        <Route path = '/login' element={<LoginPage/>}/>
        <Route path = '/register' element={<RegisterPage/>}/>
      </Routes>
    </Router>
  )
}
