import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { logoutID, logoutToken, isAuthenticated } from '../../lib/auth'

const NavBar = () => {

  const handleLogout = () => {
    logoutID()
    logoutToken()
  }

  return (
    <>
    <Navbar className="color-nav" expand="lg">
      <Navbar.Brand href="/">
        Crypto Pocketbook
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {!isAuthenticated() && <Nav.Link href="/login">Login</Nav.Link> }
          {!isAuthenticated() && <Nav.Link href="/register">Register</Nav.Link> }
          { isAuthenticated() && <Nav.Link href="/profile">Profile</Nav.Link> }
          { isAuthenticated() && <Nav.Link href="/" onClick={handleLogout}>Logout</Nav.Link> }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default NavBar