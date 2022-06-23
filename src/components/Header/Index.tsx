import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import "./style.css";
import escudo from "../../Assets/ff.png";
export default function Header() {
  return (
    <Navbar expand="lg">
  <Container>
   <img src={escudo} alt="" width="75"/>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="#action2">Ingressos</Nav.Link>
        <Nav.Link href="#action2">Loja</Nav.Link>
        <Nav.Link href="#action2">Nossa História</Nav.Link>
        <Nav.Link href="/login" className="btn-login">Login</Nav.Link>

      </Nav>
     
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}
