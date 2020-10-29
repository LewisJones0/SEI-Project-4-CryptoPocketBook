import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { submitTransaction } from '../../lib/api'

import { withRouter } from 'react-router-dom'

class NewTransaction extends React.Component {
  state = {
    formData: {
      currency: '',
      amount_bought: undefined,
      price_bought_at: '',
      month_bought_at: '',
      subaccountowner: this.props.subaccountowner
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
      const response = await submitTransaction(this.state.formData)
      console.log(response)
      this.props.history.push('/subaccount')
      this.props.closeModal(this.state.show)
      this.refreshPage()
      this.setState({ show: false })
    } catch (err) {
      this.setState({ errors: err.response.data.errors })
      console.log(err)
    }
  }

  refreshPage = () =>{
    window.location.reload()
  }

  closeNewTrans = () => {
    this.props.closeModal()
  }

  render() {
    const { currency, amount_bought, price_bought_at, month_bought_at, subaccountowner } = this.state.formData
    if (!this.props.show) {
      return null
    }
    return (
      <Modal show={true}>
        <Container className="modalMaster">
          <Row>
            <Col className="login-reg-section">
              <div className='modalForm'><h3>New Transaction</h3>
                <Button onClick={this.closeNewTrans}>X</Button></div>
              <div className='loginForm'>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
                    <Form.Label column sm={4}>Currency:</Form.Label>
                    <Col sm={8}>
                      <Form.Control as="select" value={this.state.currency} name="currency" onChange={this.handleChange} defaultValue="Choose...">
                        <option>Choose...</option>
                        <option value='bitcoin'>Bitcoin</option>
                        <option value='ethereum'>Ethereum</option>
                        <option value='chainlink'>Chainlink</option>
                        <option value='litecoin'>Litecoin</option>
                        <option value='yearnfinance'>YearnFinance</option>
                      </Form.Control>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formBasicNumber">
                    <Form.Label column sm={4}>
                    Amount Bought
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control 
                        type="amount_bought" 
                        placeholder="Amount Bought"
                        name="amount_bought"
                        value={amount_bought}
                        onChange={this.handleChange} />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formBasicNumber">
                    <Form.Label column sm={4}>
                    Price Bought At
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control 
                        type="price_bought_at" 
                        placeholder="Price Bought At"
                        name="price_bought_at"
                        value={price_bought_at}
                        onChange={this.handleChange} />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
                    <Form.Label column sm={4}>Month Bought At</Form.Label>
                    <Col sm={8}>
                      <Form.Control as="select" value={this.state.month_bought_at} name="month_bought_at" onChange={this.handleChange} defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                      </Form.Control>
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

export default withRouter(NewTransaction)