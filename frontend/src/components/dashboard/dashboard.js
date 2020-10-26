import React from 'react'
import { getUser } from '../../lib/api'
import { Container, Card } from 'react-bootstrap'
import Widget from './tradingview'
import LineChart from '../d3/linechart'

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
        <Container xs={1} md={2} xl={2}  className="DashboardMain">
          <Container className="LineGraph">
            <Card>
              <LineChart/>
            </Card>
          </Container>

          <Container className="WidgetContainer">
            <Card ClassName="WidgetCard">
              <Widget />
            </Card>
          </Container>

          <Container className="CurrencyTracker">
            <Card>
              <Widget />
            </Card>
          </Container>

        </Container>
      </>
    )
  }
}

export default Dashboard