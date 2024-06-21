
import {  Button, Row, Col, Container, Image} from "react-bootstrap";
import UploadComponent from "../components/uploadComponet";
import logoLogin from '../../until/storage/logo1.jpeg'



function Home(){

    return (
<Container fluid className="vh-100 d-flex justify-content-center align-items-center">
      <Row className="w-100">
        <Col xs={12} md={6} className="text-center mb-4 mb-md-0 d-flex justify-content-center">
          <Image src={logoLogin} rounded style={{ width: '50%' }} />
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
          <div className="bg-light p-5 rounded text-center w-100">
            <h3>Bem vindo ao cadastro <strong>Sysorga</strong></h3>
            <p>Um simples CRUD com <code>React, Bootstrap e AlaSQL</code></p>
            <div className="d-flex flex-column flex-md-row justify-content-evenly align-items-center">
              <Button href="/register" variant="primary" className="mb-2 mb-md-0">
                Criar Conta
              </Button>
              <Button href="/login" variant="secondary">
                Login
              </Button>
            </div>
            <UploadComponent />
          </div>
        </Col>
      </Row>
    </Container>

        



       
    )
}

export default Home;