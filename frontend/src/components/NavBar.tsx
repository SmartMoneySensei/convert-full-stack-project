import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { useNavigate } from "react-router-dom";

export default function NavBar() {

    let navigate = useNavigate();
    function redirectDash(){
        navigate("/dashboard")
    }
    function redirectBugs(){
        navigate("/bugs")
    }
    function redirectCreateBug(){
        navigate("/createbug")
    }
    return (
      <Navbar bg="primary" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link onClick={redirectDash}>Dashboard</Nav.Link>
            <Nav.Link onClick={redirectCreateBug}>Create Bugs</Nav.Link>
            <Nav.Link onClick={redirectBugs}>View Bugs</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}

