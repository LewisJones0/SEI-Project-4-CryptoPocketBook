import React from 'react'
import { getUser } from '../../lib/api'
import { Container, Card, Grid, Col, Row } from 'react-bootstrap'
import Widget from './tradingview'
// import LineChart from '../d3/linechart'
import CurrencyTracker from './currencytracker'
class Dashboard extends React.Component {
  state = {
    profile: {},
    subaccounts: {},
    transactions: {}
  }

  async componentDidMount() {
    const getData = await getUser()
    console.log(getData)
    this.setState({
      profile: getData.data,
      subaccounts: getData.data.subaccounts,
      transactions: getData.data.owner_transactions
    })
  }


  render() {
    // const { transactions } = this.state.transactions
    return (
      <>
        <Container fluid className="pocketbook-banner">
          <h1>Dashboard</h1>
        </Container>
        <Row className="Dashboard">
          <Col xs={12} md={12} xl={12} className="WidgetRow">
            <Card className="CurrencyTracker">
              <CurrencyTracker />
            </Card>
            <Col className="WidgetRow">
              <Widget />
            </Col>
          </Col>
        </Row>
      </>
    )
  }
}

export default Dashboard