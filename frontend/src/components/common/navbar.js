import React from 'react'
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { logoutToken, isAuthenticated } from '../../lib/auth'
import Login from '../auth/login'
import Register from '../auth/register'
import Sidebar from './sidebar.js'

class NavbarMaster extends React.Component {
  state = {
    show: false
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

  handleLogout = () => {
    logoutToken()
  }

  render() {
    const { show } = this.state
    return (
      <>
        { !isAuthenticated() && 
      <Navbar className="color-nav" expand="lg">
        <Navbar.Brand href="/">
          Crypto Pocketbook
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {!isAuthenticated() && <Button onClick={e => {
              this.showModal()
            }}>Login</Button>}
            <Login show={show} closeModal={this.closeModal}/>
            
            {!isAuthenticated() && <Button onClick={e => {
              this.showModal()
            }}>Register</Button>}
            <Register show={show} closeModal={this.closeModal}/>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        }
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