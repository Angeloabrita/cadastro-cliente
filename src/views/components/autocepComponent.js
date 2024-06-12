import React, { useState } from 'react';

const AutoCep = () => {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');

  const handleCepChange = (event) => {
    const newCep = event.target.value.replace(/[^0-9]/g, '');
    setCep(newCep);

    if (newCep.length !== 8) return;

    const url = `https://viacep.com.br/ws/${newCep}/json/`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (!data) return;

        setEndereco(data.logradouro);
        setBairro(data.bairro);
        setCidade(data.localidade);
        setUf(data.uf);
      })
      .catch((error) => console.error(error));
  };

  return (
    <form>
      <label htmlFor="cep">CEP:</label>
      <input
        type="text"
        id="cep"
        maxLength={9}
        placeholder="13483-000"
        autoFocus
        value={cep}
        onChange={handleCepChange}
      />

      <label htmlFor="endereco">Endereço:</label>
      <input type="text" id="endereco" value={endereco} disabled />

      <label htmlFor="bairro">Bairro:</label>
      <input type="text" id="bairro" value={bairro} disabled />

      <label htmlFor="cidade">Cidade:</label>
      <input type="text" id="cidade" value={cidade} disabled />

      <label htmlFor="uf">UF:</label>
      <input type="text" id="uf" value={uf} disabled />
    </form>
  );
};

export default AutoCep;
