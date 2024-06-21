import React, { useState } from 'react';
import AuthService from '../../services/authServices';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import logoLogin from '../../until/storage/logo.jpeg';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(username, password);
      navigate('dashboard');
    } catch (error) {
      alert('Ops! Ocorreu um erro ao logar, atualize a página e tente novamente');
    }
  };

  return (
    <Container className='d-flex justify-content-center align-items-center vh-100 p-5'>
      
      <Row className="justify-content-center align-items-center w-100">
        <Col xs={12} md={4} className="text-center mb-4 mb-md-0">
          <Image src={logoLogin} rounded style={{ width: '80%' }} />
        </Col>
        <Col xs={12} md={4}>
        
          <Form onSubmit={handleLogin} className="p-4 bg-light rounded">
          <h2 className="text-center mb-4">Conectar</h2>

            <Form.Group controlId="formUsername">
              <Form.Label>Usuário</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entre com seu usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Entre com sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4">
              Conectar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
