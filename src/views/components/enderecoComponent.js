import React, { useState} from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import alasql from './../../until/alaSqlSetup';
import ClientModel from '../../models/clientModel';
 
const AdicionarEndereco = () => {
  const [clienteId, setClienteId] = useState('');
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [pais, setPais] = useState('');

    const fetchData = () => {
      alasql.promise('SELECT cpf, nome FROM Client')
          .then((res) => {setClientes(res);
          })
          .catch((err) => console.error("nao ta chegando no tempo " + err)).finally(()=>setLoading(false));
          
  };
  
  const handleAdicionarEndereco = () => {



    alasql.promise('INSERT INTO Endereco (clienteId, cep, rua, bairro, cidade, estado, pais) VALUES (?, ?, ?, ?, ?, ?, ?)', [clienteId, cep, rua, bairro, cidade, estado, pais])
      .then((res) => {
        alert('Endereço adicionado com sucesso');
      })
      .catch((reason) => {
        console.log('Erro: endereço já cadastrado');
        alert('Erro! ' + reason);
      });


      ClientModel.find("02176469054").then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });

  };

  return (
    <Container className="my-3 rounded">
      <h2>Adicionar Endereço</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Select
            id="clienteId"
            value={clienteId}
             onClick= { fetchData }
             onChange={(e) => {
              setClienteId(e.target.value); }}
          >
            {loading && <option>Loading...</option>}
            {clientes.map((cliente) => (
              <option key={cliente.id} value={cliente.id}>
                {cliente.nome}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            id="cep"
            placeholder="CEP"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            id="rua"
            placeholder="Rua"
            value={rua}
            onChange={(e) => setRua(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            id="bairro"
            placeholder="Bairro"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            id="cidade"
            placeholder="Cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            id="estado"
            placeholder="Estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            id="pais"
            placeholder="País"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleAdicionarEndereco}>
          Adicionar
        </Button>
      </Form>
    </Container>
  );
};

export default AdicionarEndereco;
