import React from 'react'
import AdicionarCliente from '../components/clientComponent'
import { Container, Row, Col } from 'react-bootstrap'
import AdicionarEndereco from '../components/enderecoComponent'
import EnderecosTable from '../components/tableEnderecoComponent'

function Dashboard() {
    return (
        <div>
    

    <Container className="my-3">
      <Row className="mb-3">
        <Col xs={12} md={6}>
          <div className="p-3 border bg-light">

          <AdicionarCliente />
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="p-3 border bg-light">

            <AdicionarEndereco />

          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div className="p-3 border bg-light">
            <EnderecosTable /> 
          </div>
        </Col>
      </Row>
    </Container>
            
        </div>
    )
}

export default Dashboard