import React from "react";
import { Navbar, Nav, NavDropdown, Container, Row, Col } from "react-bootstrap";
import SearchBox from "./SearchBox";

const MyNavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
      <Navbar.Brand href="#home">
        <h1 className="f-1 mt0">BOOKTROPOLIS</h1>
      </Navbar.Brand>
      <Navbar.Toggle className="ml-auto" aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
      
        <Nav className="ml-auto">
        <Container fluid={true}>
          <Row className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <SearchBox />
          </Row>
          <Row className="ml-auto">
          <Nav.Link href="#home">Login</Nav.Link>
          <Nav.Link href="#link">Register</Nav.Link>
          </Row>
          </Container>
        </Nav>
  
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavBar;
