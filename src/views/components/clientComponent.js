import React, { useState } from 'react';
import Client from '../../models/clientModel';
import Validator from '../../services/validator';

const AdicionarCliente = () => {
  const [nomeCliente, setNomeCliente] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [celular, setCelular] = useState('');
  const [cpfValido, setCpfValido] = useState(null);
  const [erro, setErro] = useState('');

  const handleAdicionarCliente = () => {
    // Verificar se todos os campos estão preenchidos
    if (!nomeCliente || !cpf || !dataNascimento || !telefone || !celular || !cpfValido) {
      setErro('Por favor, preencha todos os campos corretamente.');
      return;
    }

    // Inserindo cliente e validando no banco
    Client.create(nomeCliente, cpf, dataNascimento, telefone, celular);
    setErro(''); // Limpar mensagem de erro após sucesso
  };

  // Verificando se CPF é válido
  const handleCPFChange = (e) => {
    let gambVal = false;
    const newCPF = e.target.value.replace(/[^0-9]/g, '');
    setCpf(newCPF);
    if (newCPF.length === 11 && gambVal) {
      validateCPF(newCPF);
      gambVal = true;
    } else {
      setCpfValido(null);
    }
  };

  const validateCPF = (cpf) => {
    if (Validator.validarCPF(cpf)) {
      setCpfValido(true);
      console.log("CPF validado");
    } else {
      setCpfValido(false);
      console.log("CPF inválido");
      setCpf("")
    }
  };

  const handleCPFBlur = () => {
    if (cpf.length === 11) {
      validateCPF(cpf);
    } else {
      setCpfValido(false);
      console.log("CPF inválido");
      alert("CPF inválido");
      setCpf('');
    }
  };

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
          onChange={handleCPFChange}
          onBlur={handleCPFBlur}
        />
        {cpfValido === false && <small className="text-danger">CPF inválido</small>}
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
      {erro && <div className="alert alert-danger">{erro}</div>}
      <button className="btn btn-primary" onClick={handleAdicionarCliente}>Adicionar</button>
    </div>
  );
};

export default AdicionarCliente;
