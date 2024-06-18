import { React, useState, useEffect } from 'react';
//import alasql from '../../until/alaSqlSetup';
import AdressModel from '../../models/adressModel';
import ClientModel from '../../models/clientModel';
import { Button } from 'react-bootstrap';

const BtnDownload = () => {
  const [clientsAndAddresses, setClientsAndAddresses] = useState({});

  useEffect(() => {
    // Baixa os dados dos clientes e endereços
    Promise.all([
       AdressModel.findAll(),
       ClientModel.findAll(),
       
    ]).then((results) => {
      const Client = results[1];
      const Adress = results[0];
      setClientsAndAddresses({ Client, Adress });
    });
  }, []);

  const handleDownload = () => {
    // Cria um link para baixar o JSON
    const link = document.createElement('a');
    link.href = `data:application/json;charset=utf-8,${JSON.stringify(clientsAndAddresses)}`;
    link.download = 'data.json';
    link.click();
  };

  return (
    <div>
        <Button className='btn btn-primary'  onClick={handleDownload} >Baixar dados</Button>
    </div>
  );
};

export default BtnDownload;