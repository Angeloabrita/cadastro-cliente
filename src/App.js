import './App.css';
import Registerr from './views/pages/register';
import Dashboard from './views/pages/dashboard';
import Home from './views/pages/home';
import { Routes, Route, Navigate } from "react-router-dom";
import NotFoud from './views/pages/notfoud';
import Loginn from './views/pages/login';
import NavBar from './views/components/navBarComponent';
import { useState } from 'react';
import AuthService from './services/authServices';

function App() {


  const [isAuthenticated, setIsAuthenticated] =  useState(true);
  console.log(isAuthenticated);
  function auth() {
    const auth = AuthService.isLoged()
    setIsAuthenticated(auth);
  }

  return (
    <div className='bg-rs'>
     <NavBar></NavBar>
     <Routes>
         <Route path="/" element={ <Home />} />
         <Route path="login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Loginn />} />
         <Route path="dashboard" element={ isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
         <Route path="register" element={ isAuthenticated ? <Navigate to="/dashboard" /> : <Registerr />} />
         <Route path="*" element={ <NotFoud />} />
         

      </Routes>
      
    </div>
  );
}

export default App;
