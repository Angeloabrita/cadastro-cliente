import React, { useState } from 'react';

import Client from '../../models/clientModel';

const AdicionarCliente = () => {
  const [nomeCliente, setNomeCliente] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [celular, setCelular] = useState('');

  const handleAdicionarCliente = () => {
    // Inserindo cliente e validando no banco
    Client.create( nomeCliente, cpf, dataNascimento, telefone, celular )
  }

  return (
    <div id="cliente" className="my-3">
      <h2>Adicionar Cliente</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="nomeCliente"
          placeholder="Nome do cliente"
          value={nomeCliente}
          onChange={(e) => setNomeCliente(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="cpf"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="date"
          className="form-control"
          id="dataNascimento"
          placeholder="Data de Nascimento"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="telefone"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="celular"
          placeholder="Celular"
          value={celular}
          onChange={(e) => setCelular(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleAdicionarCliente}>Adicionar</button>
    </div>
  );
};

export default AdicionarCliente;
