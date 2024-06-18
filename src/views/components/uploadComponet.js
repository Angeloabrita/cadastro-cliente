import React, { useState } from 'react';
import alasql from '../../until/alaSqlSetup';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [jsonData, setJsonData] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      alert('Por favor, selecione um arquivo antes de fazer o upload.');
      return;
    }

    const reader = new FileReader();
    reader.onload = async (event) => {
      const data = JSON.parse(event.target.result);
      setJsonData(data);
      await insertClients(data.clients);
      await insertAddresses(data.addresses);
    };

    reader.readAsText(selectedFile);
  };

  const insertClients = async (clients) => {
    try {
        console.log(clients);
      for (const client of clients) {
    
        // Insira os dados do cliente no banco de dados
        await alasql.promise('INSERT INTO Client (nome, cpf, dataNacimento, telefone, celular) VALUES (?, ?, ?, ?, ?)', [
          client.nome,
          client.cpf,
          client.dataNacimento,
          client.telefone,
          client.celular
        ]);
      }
      console.log('Clientes inseridos com sucesso!');
    } catch (error) {
      console.error('Erro ao inserir clientes:', error);
    }
  };

  const insertAddresses = async (addresses) => {
    try {
        console.log(addresses);
      for (const address of addresses) {
        await alasql.promise('INSERT INTO Adress (CEP, Rua, Bairro, Cidade, Estado, Pais, CPFCliente, EnderecoPrincipal) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [
          address.CEP,
          address.Rua,
          address.Bairro,
          address.Cidade,
          address.Estado,
          address.Pais,
          address.CPFCliente,
          address.EnderecoPrincipal
        ]);
      }
      console.log('Endereços inseridos com sucesso!');
    } catch (error) {
      console.error('Erro ao inserir endereços:', error);
    }
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="formFile">
          <Form.Label>Escolha um arquivo .json</Form.Label>
          <Form.Control 
            type="file" 
            onChange={handleFileChange} 
            accept=".json"
          />
        </Form.Group>
        <Button onClick={handleFileUpload}>Upload</Button>
      </Form>
      {/* Exiba os dados do arquivo .json, se necessário */}
      {jsonData && (
        <pre>{JSON.stringify(jsonData, null, 2)}</pre>
      )}
    </div>
  );
};

export default UploadComponent;
