import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { logoutID, logoutToken, isAuthenticated } from '../../lib/auth'
import Login from '../auth/login'

class NavbarMaster extends React.Component {
  state = {
    show: false
  }

  showModal = e => {
    this.setState({
      show: true
    })
  }

  handleLogout = () => {
    logoutID()
    logoutToken()
  }

  render() {
    return (
      <>
      <Navbar className="color-nav" expand="lg">
        <Navbar.Brand href="/">
          Crypto Pocketbook
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {!isAuthenticated() && <button onClick={e => {this.showModal()}}>Login</button>}
            <Login show={this.state.show}/>

            {!isAuthenticated() && <Nav.Link href="/register">Register</Nav.Link> }
            { isAuthenticated() && <Nav.Link href="/profile">Profile</Nav.Link> }
            { isAuthenticated() && <Nav.Link href="/" onClick={this.handleLogout}>Logout</Nav.Link> }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </>
    )
  }
}
export default withRouter(NavbarMaster)