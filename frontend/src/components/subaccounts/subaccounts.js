import React from 'react'
import { getUser } from '../../lib/api'
import { Container, Col, Row } from 'react-bootstrap'
import SubaccountWidget from './subaccountwidget'

class Subaccount extends React.Component {
  state = {
    subaccounts: [],
    subaccountdetails: []
  }

  async componentDidMount() {
    const getData = await getUser()
    console.log(getData)
    this.setState({
      subaccounts: getData.data.subaccounts,
      subaccountdetails: getData.data.subaccounts.transactions
    })
  }


  render() {
    if (Object.keys(this.state.subaccounts).length === 0) {
      return (
        <>
          <Container fluid className="pocketbook-banner">
            <h1>No accounts</h1>
          </Container>
        </>
      )
    }
    return (
      <>
        <Container fluid className="pocketbook-banner">
          <h1>Subaccounts</h1>
        </Container>
        <Row className="Dashboard">
          <Col xs={12} md={12} xl={12} className="CreateSubaccountRow">
            { this.state.subaccounts.map(subaccount => (
              <SubaccountWidget
                key={subaccount.id}
                {...subaccount} />
            )) }
          </Col>
        </Row>
      </>
    )
  }
}


export default Subaccount