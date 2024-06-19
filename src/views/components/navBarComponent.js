import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import AuthService from '../../services/authServices'




const NavBar = ({ onLogout , userLoged })  => {


 

    return (
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Go Horse!! </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/dashboard">Painel de controle</Nav.Link>
            <Nav.Link href="/register">Cadastro</Nav.Link>
            <NavDropdown title="Conta" id="basic-nav-dropdown">

                {userLoged?  <NavDropdown.Item href="/login">Login</NavDropdown.Item>
:               <NavDropdown.Item onClick={onLogout}> logout</NavDropdown.Item>}
              
        
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default NavBar;
