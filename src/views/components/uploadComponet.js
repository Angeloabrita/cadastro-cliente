import React, { useState } from 'react';
import alasql from '../../until/alaSqlSetup';
import { Button, Form, Row } from 'react-bootstrap';
import AdressModel from '../../models/adressModel';
import ClientModel from '../../models/clientModel';

const UploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
 // const [jsonData, setJsonData] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    
    if (!selectedFile) {
      alert('Por favor, selecione um arquivo antes de fazer o upload.');
      return;

      
    }


    const userConfirmed = window.confirm('Ao fazer o upload os dados atuais serão apagados. Deseja continuar?');
    if (!userConfirmed) {
      return;
    }

    const reader = new FileReader();
    reader.onload = async (event) => {
      const data = JSON.parse(event.target.result);
     // setJsonData(data);
      await insertClients(data.clients);
      await insertAddresses(data.addresses);
    };

    reader.readAsText(selectedFile);
  };

  const insertClients = async (clients) => {
    try {
        
      await ClientModel.deleteAll();
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
      
      await AdressModel.deleteAll();

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
      <Row>
        <Form className='p-3'>
          <Form.Group className='p-3' controlId="formFile">
            <Form.Label>Importe seu banco de dados aqui em formato JSON</Form.Label>
            <div className="d-flex align-items-center">
              <Form.Control
                type="file"
                onChange={handleFileChange}
                accept=".json"
                className="me-2"
              />
              <Button onClick={handleFileUpload}>Upload</Button>
            </div>
          </Form.Group>
        </Form>
      </Row>
    </div>
  );
};

export default UploadComponent;
