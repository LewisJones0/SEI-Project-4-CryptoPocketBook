import React from 'react'
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { logoutToken, isAuthenticated } from '../../lib/auth'
import Login from '../auth/login'
import Register from '../auth/register'
import Sidebar from './sidebar.js'

class NavbarMaster extends React.Component {
  state = {
    isOpen: false,
    isOpenn: false
  }

  openModal = () => this.setState({ isOpen: true })
  closeModal = () => this.setState({ isOpen: false })

  openModaln = () => this.setState({ isOpenn: true })
  closeModalLogin = () => this.setState({ isOpenn: false })


  handleLogout = () => {
    logoutToken()
  }

  render() {
    return (
      <>
        { !isAuthenticated() && 
      <Navbar className="navbarMaster" expand="lg">
        <Navbar.Brand className='navbarText' href="/">
          Crypto Pocketbook
        </Navbar.Brand>
        <Navbar aria-controls="basic-navbar-nav" />
        <Nav className="mr-auto">
          <Button onClick={this.openModaln}>Login</Button>
          <Login isOpenn={this.state.isOpenn} closeModalLogin={this.closeModalLogin}/>

          <Button onClick={this.openModal}>Register</Button>
          <Register isOpen={this.state.isOpen} closeModal={this.closeModal}/>

        </Nav>
      </Navbar>}
        { isAuthenticated() && 
        <Container fluid>
          <Row>
            <Col xs={'auto'} id="sidebar-wrapper">      
              <Sidebar />
            </Col>
          </Row>
        </Container>
        }
      </>
    )
  }
}
export default withRouter(NavbarMaster)