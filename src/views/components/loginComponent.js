import React, { useState } from 'react';
import UserModel from '../../models/userModel';
import AuthService from '../../services/authServices';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {

     await AuthService.login(username, password)
      
    } catch (error) {
      alert('Ops! Ocorreu um erro ao logar, atualize a pagina e tente novamente');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
