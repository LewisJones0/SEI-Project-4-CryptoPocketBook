import React from 'react'
import { getUser, getLiveData } from '../../lib/api'
import { Table } from 'react-bootstrap'

class CurrencyTracker extends React.Component {
  state = {
    transactions: [],
    bitcoinTotalAmt: '',
    ethereumTotalAmt: '',
    chainlinkTotalAmt: '',
    litecoinTotalAmt: '',
    yearnfinanceTotalAmt: '',
    bitcoinAveragePrice: '',
    ethereumAveragePrice: '',
    chainlinkAveragePrice: '',
    litecoinAveragePrice: '',
    yearnfinanceAveragePrice: '',
    APIPriceBTC: {},
    APIPriceETH: {},
    APIPriceLINK: {},
    APIPriceLTC: {},
    // APIPriceYFI: {}
  }

  async componentDidMount() {
    const getData = await getUser()
    const getMarketData = await getLiveData()
    console.log(getData)
    console.log(getMarketData)
    this.setState({
      transactions: getData.data.owner_transactions,
      APIPriceBTC: getMarketData.data.bitcoin,
      APIPriceETH: getMarketData.data.ethereum,
      APIPriceLINK: getMarketData.data.chainlink,
      APIPriceLTC: getMarketData.data.litecoin,
      // APIPriceYFI: getMarketData.data.yfi
    })
  }
  

  render() {
    return (
      <>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Currency</th>
              <th>Amount in Possession</th>
              <th>Average Price Bought At</th>
              <th>Price Now</th>
              <th>PnL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bitcoin</td>
              <td>INTERGER TOTAL</td>
              <td>INTERGER AVERAGE</td>
              <td>{this.state.APIPriceBTC.usd}</td>
              <td>PnL</td>
            </tr>
            <tr>
              <td>Ethereum</td>
              <td>INTERGER TOTAL</td>
              <td>INTERGER AVERAGE</td>
              <td>{this.state.APIPriceETH.usd}</td>
              <td>PnL</td>
            </tr>
            <tr>
              <td>ChainLink</td>
              <td>INTERGER TOTAL</td>
              <td>INTERGER AVERAGE</td>
              <td>{this.state.APIPriceLINK.usd}</td>
              <td>PnL</td>
            </tr>
            <tr>
              <td>LiteCoin</td>
              <td>INTERGER TOTAL</td>
              <td>INTERGER AVERAGE</td>
              <td>{this.state.APIPriceLTC.usd}</td>
              <td>PnL</td>
            </tr>
            <tr>
              <td>YearnFinance</td>
              <td>INTERGER TOTAL</td>
              <td>INTERGER AVERAGE</td>
              <td></td>
              <td>PnL</td>
            </tr>
          </tbody>
        </Table>
      </>
    )
  }
}

export default CurrencyTracker