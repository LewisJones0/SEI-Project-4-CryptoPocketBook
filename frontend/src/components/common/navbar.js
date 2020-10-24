import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { logoutToken, isAuthenticated } from '../../lib/auth'
import Login from '../auth/login'
import Register from '../auth/login'

class NavbarMaster extends React.Component {
  state = {
    show: false,
    show1: false
  }

  showModal = e => {
    this.setState({
      show: true
    })
  }

  closeModal = e => {
    this.setState({
      show: false
    })
  }

  showModal1 = e => {
    this.setState({
      show: true
    })
  }

  closeModal1 = e => {
    this.setState({
      show1: false
    })
  }


  handleLogout = () => {
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
            <Login show={this.state.show} closeModal={this.closeModal}/>

            {!isAuthenticated() && <button onClick={e => {this.showModal1()}}>Register</button>}
            <Register show1={this.state.show1} closeModal1={this.closeModal1}/>

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