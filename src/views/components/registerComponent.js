import React, { useState } from 'react';
import bcrypt from 'bcryptjs'

import UserModel from '../../models/userModel';
function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cargo, setCargo] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const hashedPassword =  bcrypt.hashSync(password, 10);
      console.log(hashedPassword);
      UserModel.create(username, cargo, hashedPassword); 
      alert('Usuario criado com sucesso');
      

    } catch (error) {
      alert('Falha ao salvar usuario' );
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="text"
        placeholder="Cargo"
        value={cargo}
        onChange={(e) => setCargo(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
