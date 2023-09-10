import React from "react";
import { FaDownload } from "react-icons/fa";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/icone.jpg";

import "./style.scss";
import Button from "react-bootstrap/Button";

const Menu = () => {
  return (
    <>
      {/* <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        className="menu fixed-top"
      >
        <Container fluid className="container-menu">
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="100"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="justify-content-end"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0 ">
              <Nav.Link href="../"> Inicio</Nav.Link>
              <Nav.Link href="../#motorista"> Motorista</Nav.Link>
              <Nav.Link href="../#passageiro"> passageiro</Nav.Link>
              <Nav.Link href="../#quem-somos"> Quem somos </Nav.Link>
              <Nav.Link href="/ajuda">Ajuda</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        className="menu fixed-top"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="80"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end gap-3">
            <Nav.Link href="../"> Inicio</Nav.Link>
            <Nav.Link href="../#motorista"> Motorista</Nav.Link>
            <Nav.Link href="../#passageiro"> passageiro</Nav.Link>
            <Nav.Link href="../#quem-somos"> Quem somos </Nav.Link>
            <Nav.Link href="/ajuda">Ajuda</Nav.Link>
            <Button className="rounded-pill" variant="success">
              Baixe o app {""}
              <FaDownload />
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
