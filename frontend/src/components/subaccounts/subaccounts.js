import React from 'react'
import { getUser } from '../../lib/api'
import { Container, Card, Grid, Col, Row } from 'react-bootstrap'

class Subaccount extends React.Component {
  state = {
    profile: {},
    subaccounts: {}
  }

  async componentDidMount() {
    const getData = await getUser()
    console.log(getData)
    this.setState({
      profile: getData.data,
      subaccounts: getData.data.subaccounts
    })
  }


  render() {
    return (
      <>
        <Container fluid className="pocketbook-banner">
          <h1>Subaccounts</h1>
        </Container>
        <Row className="Dashboard">
          <Col xs={12} md={12} xl={12} className="CreateSubHero">
          </Col>
        </Row>
      </>
    )
  }
}

export default Subaccount