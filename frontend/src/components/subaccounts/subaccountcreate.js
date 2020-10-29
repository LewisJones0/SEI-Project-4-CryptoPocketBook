import React from 'react'
import { Container, Col, Row, Button, Form, Modal } from 'react-bootstrap'
import { newSub } from '../../lib/api'
import { withRouter } from 'react-router-dom'

class SubaccountCreate extends React.Component {
  state = {
    formData: {
      name: ''
    },
    errors: null
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
      const response = await newSub(this.state.formData)
      console.log(response)
      this.closeModal()
      this.props.history.push('/subaccount')
      this.refreshPage()
    } catch (err) {
      this.setState({ errors: err.response.data.errors })
    }
  }

  refreshPage = () =>{
    window.location.reload()
  }


  closeModal = () => {
    this.props.closeModal()
  }

  render() {
    const { name } = this.state.formData
    return (
      <>
        <Modal show={this.props.isOpen}>
          <Container className="modalMaster">
            <Row>
              <Col className="login-reg-section">
                <div className='modalForm'><h3>Subaccount Name</h3>
                  <Button onClick={this.closeModal}>X</Button></div>
                <div className='loginForm'>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Group as={Row} controlId="">
                      <Col sm={8}>
                        <Form.Control 
                          className='subaccountCreationFormTextBox'
                          type="name" 
                          placeholder="Input Subaccount name here" 
                          name="name"
                          value={name}
                          onChange={this.handleChange}/>
                      </Col>
                    </Form.Group>
                    <Button variant="danger" type="submit" className='subaccountCreationFormSubmitButton' block>Create</Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal>
      </>
    )
  }
}

export default withRouter(SubaccountCreate)

