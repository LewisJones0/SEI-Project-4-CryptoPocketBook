import React from 'react'
import { Container, Card, Col, Row, Button, Form } from 'react-bootstrap'
import { newSub } from '../../lib/api'

class SubaccountCreate extends React.Component {
  state = {
    formData: {
      name: ''
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
      const response = await newSub(this.state.formData)
      console.log(response)
      this.props.history.push('/subaccount')
    } catch (err) {
      this.setState({ errors: err.response.data.errors })
    }
  }



  render() {
    const { name } = this.state.formData
    return (
      <>
        <Container fluid className="pocketbook-banner">
          <h1>Create Subaccount</h1>
        </Container>
        <Row className="Dashboard">
          <Col xs={12} md={12} xl={12} className="CreateFormRow">
            <Card className="CreateSubAccount">
              <Form.Group as={Row} controlId="formBasicname">
                <Col sm={12}>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Label column sm={12} className='SAFormTitle'>
                        Desired SubAccount Name
                    </Form.Label>
                    <Form.Control 
                      className='SAFormControl'
                      type="name" 
                      placeholder="Input here"
                      name="name"
                      value={name}
                      onChange={this.handleChange}/>
                    <Button variant="danger" type="submit" block>Create Subaccount</Button>
                  </Form>
                </Col>
              </Form.Group>
            </Card>
          </Col>
        </Row>
      </>
    )
  }
}

export default SubaccountCreate