import React from "react";
import Modal from "react-bootstrap/Modal";
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'

import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  state = {
    formData: {
      email: '',
      password: ''
    }
  } 

  handleChange = event => {
    const formData = {
      ...this.state.formData,
      [event.target.name]: event.target.value
    }
    this.setState({ formData })
  }

  handleSubmit = async event => {
    event.preventDefault()
    try { 
      const response = await loginUser(this.state.formData)
      console.log(response)
      setToken(response.data.token)
      this.props.history.push('/dashboard')
      this.props.closeModal(this.state.show)
      this.setState({show: false})
      } catch (err) {
      this.setState({ errors: err.response.data.errors })
    }
  }


  render() {
    const { email, password } = this.state.formData
    if (!this.props.show) {
      return null;
    }
    return (
    <Modal show={true}>
      <Container className="login-reg-wrapper">
          <Row>
            <Col className="login-reg-section">
              <h3>Sign in</h3>
              <div className='loginForm'>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group as={Row} controlId="formBasicEmail">
                    <Form.Label column sm={4}>
                      Email Address
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control 
                        type="email" 
                        placeholder="Email" 
                        name="email"
                        value={email}
                        onChange={this.handleChange}/>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formBasicPassword">
                    <Form.Label column sm={4}>
                      Password
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control 
                        type="password" 
                        placeholder="Password"                       
                        name="password"
                        value={password}
                        onChange={this.handleChange} />
                    </Col>
                  </Form.Group>
                  <Button variant="danger" type="submit" block>Login</Button>
                </Form>
              </div>
            </Col>
            </Row>
        </Container> 
    </Modal>
    )
  }
}

export default withRouter(Login)