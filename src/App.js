import logo from './logo.svg';
import './App.css';
import Registerr from './views/pages/register';
import Dashboard from './views/pages/dashboard';
import Home from './views/pages/home';
import { Routes, Route } from "react-router-dom";
import NotFoud from './views/pages/notfoud';
import Loginn from './views/pages/login';

function App() {
  return (
    <div>
     
     <Routes>
         <Route path="/" element={<Home />} />
         <Route path="login" element={<Loginn />} />
         <Route path="dashboard" element={<Dashboard />} />
         <Route path="register" element={<Registerr />} />
         <Route path="*" element={<NotFoud />} />

      </Routes>
      
    </div>
  );
}

export default App;
