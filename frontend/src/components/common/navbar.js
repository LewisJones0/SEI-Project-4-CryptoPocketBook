import React from 'react'
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { logoutToken, isAuthenticated } from '../../lib/auth'
import Login from '../auth/login'
import Register from '../auth/register'
import Sidebar from './sidebar.js'

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

  // showModal1 = e => {
  //   this.setState({
  //     show1: true
  //   })
  // }

  // closeModal1 = e => {
  //   this.setState({
  //     show1: false
  //   })
  // }

  handleLogout = () => {
    logoutToken()
  }

  render() {
    const { show, show1 } = this.state
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
            <Button onClick={e => {
              this.showModal()
            }}>Login</Button>
            <Login show={show} closeModal={this.closeModal}/>

            {/* <Button onClick={e => {
              this.showModal()
            }}>Register</Button>
            <Register show={show} closeModal={this.closeModal}/> */}

            {/* <Button onClick={e => {
              this.showModal1()
            }}>Register</Button>
            <Register show1={show1} closeModal1={this.closeModal1}/> */}
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