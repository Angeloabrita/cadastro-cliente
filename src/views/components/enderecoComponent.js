import React, { useState} from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import alasql from './../../until/alaSqlSetup';
import AdressModel from '../../models/adressModel';
 
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
  const [enderecoPrincipal, setEnderecoPrincipal] = useState(false);

  // verifica se CEP exit e autocomple os campos pernitenstes
  const handleCepChange = (e) => {
    const newCep = e.target.value.replace(/[^0-9]/g, '');
    setCep(newCep);

    if (newCep.length !== 8) return;

    const url = `https://viacep.com.br/ws/${newCep}/json/`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (!data) return;
        setCep(data.cep);
        setRua(data.logradouro);
        setBairro(data.bairro);
        setCidade(data.localidade);
        setEstado(data.uf);
      })
      .catch((error) => console.error(error));
  };

    const fetchData = () => {
      alasql.promise('SELECT cpf, nome FROM Client')
          .then((res) => {setClientes(res);
          })
          .catch((err) => console.error("nao ta chegando no tempo " + err)).finally(()=>setLoading(false));
          
  };


  

  


  const handleAdicionarEndereco = async (e) => {

      e.preventDefault();
      
      try{
        await AdressModel.create(
          cep,
          rua,
          bairro,
          cidade,
          estado,
          pais,
          clienteId,
          enderecoPrincipal,
        );
        alert("Endereço adicionado com sucesso!");
        console.log('Endereço adicionado com sucesso!');
        // Limpar os campos do formulário
        setCep('');
        setRua('');
        setBairro('');
        setCidade('');
        setEstado('');
        setPais('');
        setEnderecoPrincipal(false);
      }
      catch(error){
        alert("Erro ao adicionar endereço!");
        console.error('Erro ao adicionar endereço:', error);
      }

  };

  return (
    <Container className="my-3 rounded">
      <h2>Adicionar Endereço</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Select
            id="clienteId"
            value={clienteId}
            
             onChange={
              (e) => {
              setClienteId(e.target.value);
                
            
            }}
              onClick= { (e) => {
                fetchData();
                setClienteId(e.target.value); } }
                required

          >
            {loading && <option>Loading...</option>}
            {clientes.map((cliente) => (
              <option key={cliente.cpf} value={cliente.cpf}>
                {cliente.nome} - {cliente.cpf}
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
            onChange={handleCepChange}
            required

          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            id="rua"
            placeholder="Rua"
            value={rua}
            onChange={handleCepChange}
            required

          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            id="bairro"
            placeholder="Bairro"
            value={bairro}
            onChange={handleCepChange}
            required

          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            id="cidade"
            placeholder="Cidade"
            value={cidade}
            onChange={handleCepChange}
            required

          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            id="estado"
            placeholder="Estado"
            value={estado}
            onChange={handleCepChange}
            required

          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            id="pais"
            placeholder="País"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Check // prettier-ignore
        type="switch"
        id="enderecoPrincipal"
        label="Endereço principal"
        checked={enderecoPrincipal}
        onChange = {(e) => setEnderecoPrincipal(e.target.value)}
        required

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
