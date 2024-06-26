import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const NavBar = ({ onLogout , userLoged })  => {
    console.log("nova" + userLoged);

    return (
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Sysorga</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/dashboard">Painel de controle</Nav.Link>
            <Nav.Link href="/register">Cadastro</Nav.Link>
            <NavDropdown title="Conta" id="basic-nav-dropdown">

                 <NavDropdown.Item href="/login">Login</NavDropdown.Item> 
                <NavDropdown.Item onClick={onLogout}> logout</NavDropdown.Item>
              
        
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default NavBar;
