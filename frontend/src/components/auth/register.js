/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Form, Button, Row, Col, Modal } from 'react-bootstrap'
import { registerUser } from '../../lib/api'
import { withRouter } from 'react-router-dom'

class Register extends React.Component {
  state = {
    formData: {
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
    },
    errors: {}
  }

  handleChange = event => {
    const formData = {
      ...this.state.formData,
      [event.target.name]: event.target.value
    }
    const errors = {
      ...this.state.errors,
      [event.target.name]: ''
    }
    this.setState({  formData, errors })
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await registerUser(this.state.formData)
      console.log(response)
      this.props.closeModal()
    } catch (err) {
      this.setState({ errors: err.response.data.errors })
    }
  }
  
  closeRegister = () => {
    this.props.closeModal()
  }


  render() {
    const { username, email, password, password_confirmation } = this.state.formData
    return (
      <>
        <Modal show={this.props.isOpen}>
          <div className='homepage-form'><h3>Register</h3>
            <Button onClick={this.closeRegister}>X</Button></div>
          <Col className="login-reg-section">
            <div className="registerForm">
              <Form onSubmit={ this.handleSubmit }>
                <Form.Group as={Row} controlId="formBasicUsername">
                  <Form.Label column sm={4}>Username</Form.Label>
                  <Col sm={8}>
                    <Form.Control 
                      className="username"
                      type="username" 
                      name="username"
                      placeholder="Username"
                      value={username}
                      onChange={this.handleChange}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formBasicEmail">
                  <Form.Label column sm={4}>Email address</Form.Label>
                  <Col sm={8}>
                    <Form.Control 
                      type="email" 
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={this.handleChange}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formBasicPassword">
                  <Form.Label column sm={4}>Password</Form.Label>
                  <Col sm={8}>
                    <Form.Control 
                      type="password" 
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={this.handleChange}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formBasicPassword">
                  <Form.Label column sm={4}>Confirm Password</Form.Label>
                  <Col sm={8}>
                    <Form.Control 
                      type="password" 
                      placeholder="Password Confirmation"
                      name="password_confirmation"
                      value={password_confirmation}
                      onChange={this.handleChange}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                  </Col>
                </Form.Group>
                <Button className="switch-btn" type="submit" block> Register</Button>
              </Form>
            </div>
          </Col>
        </Modal>
      </>
    )
  }
}

export default withRouter(Register)