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
        <Row className="Dashboard">
          {/* <Col xs={2} md={8} xl={12} className="WidgetRow"> */}
            <CurrencyTracker />
          {/* </Col> */}
          <Col xs={2} md={8} xl={12} className="WidgetRow">
            <Container className="WidgetContainer">
              <Card ClassName="WidgetCard">
                <Widget />
              </Card>
            </Container>
          </Col>
        </Row>
      </>
    )
  }
}

export default Dashboard