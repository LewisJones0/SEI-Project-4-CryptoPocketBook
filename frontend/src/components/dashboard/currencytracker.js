import React from 'react'
import { getUser } from '../../lib/api'
import { Container, Row, Col, Table } from 'react-bootstrap'

class CurrencyTracker extends React.Component {
  state = {
    profile: {}
  }

  async componentDidMount() {
    const getData = await getUser()
    console.log(getData)
    this.setState({
      profile: getData.data
      // subaccounts: getData.data.subaccounts
    })
  }


  render() {
    return (
        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Currency</th>
            <th>Amount in Possention</th>
            <th>Average Price Bought At</th>
            <th>Price Now</th>
            <th>PnL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bitcoin</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Ethereum</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>ChainLink</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    )
  }
}

export default CurrencyTracker