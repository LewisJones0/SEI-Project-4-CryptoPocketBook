import React from 'react'
import { getUser } from '../../lib/api'
import { Container, Row, Card, ListGroup } from 'react-bootstrap'
import Widget from './tradingview'

class Dashboard extends React.Component {
  state = {
    profile: {}
  }

  async componentDidMount() {
    const getData = await getUser()
    console.log(getData)
    this.setState({
      profile: getData.data
    })
  }


  render() {
    return (
      <>
        <Container className="DashboardMain">
        <div>testreeeeee</div>
        <Widget />
        </Container>
      </>
    )
  }
}

export default Dashboard