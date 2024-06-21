import './App.css';
import Registerr from './views/pages/register';
import Dashboard from './views/pages/dashboard';
import Home from './views/pages/home';
import { Routes, Route, Navigate } from "react-router-dom";
import NotFoud from './views/pages/notfoud';
import Loginn from './views/pages/login';
import NavBar from './views/components/navBarComponent';
import { useState, useEffect } from 'react';
import AuthService from './services/authServices';
import Footer from './views/components/footerComponent';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [userLoged, setUserLoged] = useState("");

  useEffect(() => {

    //verifica a persistencia de usuario logado
    const checkAuth = async () => {
      const auth = await AuthService.isLoged();
      auth.map((item) => {
        console.log(item)
    
       if(item.Status === "loged"){
        setUserLoged(item.UserNome);
        setIsAuthenticated(true);
       }
       else{
        setUserLoged("");
        setIsAuthenticated(false);
       }
      });
   
    };
    checkAuth();
  }, [userLoged]);

  const handleLogin = async (username, password) => {
    const success = await AuthService.login(username, password);
    if (success) {
      setUserLoged(username);
      setIsAuthenticated(true);
    }
  };

  const handleLogout = async () => {
    await AuthService.logout(userLoged);
    setUserLoged("");
    setIsAuthenticated(false);
  };

  return (
    <div className='bg-rs'>
      <NavBar onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Loginn onLogin={handleLogin} />} />
        <Route path="dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="register" element={!isAuthenticated ? <Registerr /> : <Navigate to="/dashboard" />} />
        <Route path="*" element={<NotFoud />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
