/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { newSub } from '../../lib/api'

class NewSubaccount extends React.Component {
  state = {
    formData: {
      name: {}
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
      const response = await newSub(this.state.formData)
      this.props.closeModal1(this.state.show1)
      this.setState({ show1: false })
    } catch (err) {
      this.setState({ errors: err.response.data.errors })
    }
  }


  render() {
    const { name } = this.state.formData
    return (
      <>
        <Container fluid className="login-reg-banner">
          <h1>Register</h1>
        </Container>
        <Col className="login-reg-section">
          <h3>New to The Crypto Pocketbook?</h3>
          <div className="registerForm">
            <Form onSubmit={ this.handleSubmit }>
              <Form.Group as={Row} controlId="formBasicname">
                <Form.Label column sm={4}>Subaccount name</Form.Label>
                <Col sm={8}>
                  <Form.Control 
                    className={`input ${this.state.errors.name ? 'is-danger' : ''}`}
                    type="name" 
                    name="name"
                    placeholder="name"
                    value={name}
                    onChange={this.handleChange}
                  />
                </Col>
              </Form.Group>
              <Button className="switch-btn" variant="Danger" type="submit" block> Create Subaccount</Button>
            </Form>
          </div>
        </Col>
      </>
    )
  }
}

export default NewSubaccount