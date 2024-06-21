import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const NotFoud = () => {
  

  return (
    <Container className="text-center my-5">
      <Row>
        <Col>
          <h1 className="display-1">404</h1>
          <h2>Oops! Página não encontrada</h2>
          <p>A página que você está procurando não existe ou foi movida.</p>
          
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoud;
