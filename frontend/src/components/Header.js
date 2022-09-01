import React from 'react'
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'

function Header() {
  return (
    <header>
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">N Protein</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
          <Nav className="mr-auto">
            <Nav.Link href="/dashboard">Home</Nav.Link>
            <Nav.Link href="#link">Protein</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </header>
  )
}

export default Header