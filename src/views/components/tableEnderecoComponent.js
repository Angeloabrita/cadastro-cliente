import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdressModel from '../../models/adressModel';

const EnderecosTable = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    atualizarTabelaEnderecos();
  }, []);

  const atualizarTabelaEnderecos = () => {
    AdressModel.getAll()
      .then((results) => {
        setDados(results);
      })
      .catch((error) => {
        console.error(error);
      }) ;
   
  };

  const deletarEndereco = (clienteCpf, clienteCep) => {
    // Função para deletar o endereço, adicione a lógica necessária aqui
  };

  const exportarDadosParaJSON = () => {
    // Função para exportar dados para JSON, adicione a lógica necessária aqui
  };

  return (
    <div className="table-responsive">
      <Table striped bordered hover>
        <thead>
          <tr>
            {['ID', 'Nome do Cliente', 'CEP', 'Rua', 'Bairro', 'Cidade', 'Estado', 'País', 'Ações'].map((titulo) => (
              <th key={titulo} className="align-middle"><b>{titulo}</b></th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.clienteId} className="align-middle">
              <td>{item.clienteId}</td>
              <td>{item.clienteNome}</td>
              <td>{item.clienteCep}</td>
              <td>{item.clienteRua}</td>
              <td>{item.clienteBairro}</td>
              <td>{item.clienteCidade}</td>
              <td>{item.clienteEstado}</td>
              <td>{item.clientePais}</td>
              <td className="text-center">
                <Button 
                  variant="danger"
                  size="sm"
                  onClick={() => deletarEndereco(item.clienteId, item.clienteCep)}
                >
                  Deletar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button className="btn btn-primary" onClick={exportarDadosParaJSON}>Exportar</Button>
    </div>
  );
};

export default EnderecosTable;
