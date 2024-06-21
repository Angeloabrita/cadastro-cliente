import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className=" text-white py-3">
      <Container>
        <Row>
          <Col className="text-center">
            Feito com café e amor por<strong>{' '}</strong> 
            <a
              href="https://github.com/Angeloabrita"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              Angelo Abrita
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
