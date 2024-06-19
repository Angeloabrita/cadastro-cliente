import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import AuthService from '../../services/authServices';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cargo, setCargo] = useState('');

  const navigate = useNavigate();

  
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      AuthService.register(username, cargo, password);
      navigate('dashboard');
    } catch (error) {
      alert('Falha ao salvar usuário');
      console.log(error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleRegister} className="p-4 border rounded bg-light">
        <h2 className="text-center mb-4">Cadastro</h2>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nome usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Cargo"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Cadastro
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
