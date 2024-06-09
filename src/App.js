import logo from './logo.svg';
import './App.css';
import Login from './views/pages/login';
import Register from './views/pages/register';
import Dashboard from './views/pages/dashboard';
import Home from './views/pages/home';
import { Routes, Route } from "react-router-dom";
import NotFoud from './views/pages/notfoud';

function App() {
  return (
    <div>
     
     <Routes>
         <Route path="/" element={<Home />} />
         <Route path="login" element={<Login />} />
         <Route path="dashboard" element={<Dashboard />} />
         <Route path="register" element={<Register />} />
         <Route path="*" element={<NotFoud />} />

      </Routes>
      
    </div>
  );
}

export default App;
