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
        console.log(results);
        setDados(results);
      })
      .catch((error) => {
        console.error(error);
      }) ;
   
  };

  const deletarEndereco = (adressId) => {
    // Função para deletar o endereço, adicione a lógica necessária aqui
    AdressModel.delete(adressId)
      .then((e) => {
        //atualizar a tabela
        alert("Endereço excluido");
        console.log(e + " excluido");
        atualizarTabelaEnderecos();

      })
      .catch((error) => {
        console.error(error);
      })

  };

  const exportarDadosParaJSON = () => {
    // Função para exportar dados para JSON, adicione a lógica necessária aqui
  };

  return (
    <div className="table-responsive">
      <Table striped bordered hover>
        <thead>
          <tr>
            {['Identificador (CPF)', 'Nome do Cliente', 'CEP', 'Rua', 'Bairro', 'Cidade', 'Estado', 'País', 'Ações'].map((titulo) => (
              <th key={titulo} className="align-middle"><b>{titulo}</b></th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.id} className="align-middle">
              <td>{item.clientId}</td>
              <td>{item.clientNome}</td>
              <td>{item.clientCep}</td>
              <td>{item.clientRua}</td>
              <td>{item.clientBairro}</td>
              <td>{item.clientCidade}</td>
              <td>{item.clientEstado}</td>
              <td>{item.clientPais}</td>
              <td className="text-center">
                <Button 
                  variant="danger"
                  size="sm"
                  onClick={() => deletarEndereco(item.id)}
                >
                  Deletar
                </Button>

                <Button 
                  variant="primary"
                  size="sm"
                  onClick={() => deletarEndereco(item.clienteId, item.id)}
                >
                  Atualizar
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
