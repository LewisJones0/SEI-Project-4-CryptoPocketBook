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
    bitcoinTotalSpetCalc: '',
    ethereumTotalSpetCalc: '',
    chainlinkTotalSpetCalc: '',
    litecoinTotalSpetCalc: '',
    yearnfinanceTotalSpetCalc: '',
    APIPriceBTC: {},
    APIPriceETH: {},
    APIPriceLINK: {},
    APIPriceLTC: {},
    APIPriceYFI: {}
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
      APIPriceYFI: getMarketData.data['yearn-finance']
    })
    const btcTotalCalc = this.totalAmountBought('bitcoin')
    const ethTotalCalc = this.totalAmountBought('ethereum')
    const linkTotalCalc = this.totalAmountBought('chainlink')
    const ltcTotalCalc = this.totalAmountBought('litecoin')
    const yfiTotalCalc = this.totalAmountBought('yearnfinance')
    this.setState({
      bitcoinTotalAmt: btcTotalCalc,
      ethereumTotalAmt: ethTotalCalc,
      chainlinkTotalAmt: linkTotalCalc,
      litecoinTotalAmt: ltcTotalCalc,
      yearnfinanceTotalAmt: yfiTotalCalc
    })
    const btcTotalSpetCalc = this.totalPriceBoughtAt('bitcoin')
    const ethTotalSpetCalc = this.totalPriceBoughtAt('ethereum')
    const linkTotalSpetCalc = this.totalPriceBoughtAt('chainlink')
    const ltcTotalSpetCalc = this.totalPriceBoughtAt('litecoin')
    const yfiTotalSpetCalc = this.totalPriceBoughtAt('yearnfinance')
    this.setState({
      bitcoinTotalSpetCalc: btcTotalSpetCalc,
      ethereumTotalSpetCalc: ethTotalSpetCalc,
      chainlinkTotalSpetCalc: linkTotalSpetCalc,
      litecoinTotalSpetCalc: ltcTotalSpetCalc,
      yearnfinanceTotalSpetCalc: yfiTotalSpetCalc
    })
  }

    totalAmountBought = (currency) => {
      const filtered = this.state.transactions.filter(transaction => transaction.currency === currency)
      let total = 0
      for (let i = 0; i < filtered.length; i++) {
        total += parseFloat(filtered[i].amount_bought)
      }
      return total
    }

    totalPriceBoughtAt = (currency) => {
      const filtered = this.state.transactions.filter(transaction => transaction.currency === currency)
      let total = 0
      for (let i = 0; i < filtered.length; i++) {
        total += parseFloat(filtered[i].price_bought_at)
      } 
      return total
    }

    profitAndLossCalc = (currency) => {
      const filtered = this.state.transactions.filter(transaction => transaction.currency === currency)
      let total = 0
      for (let i = 0; i < filtered.length; i++) {
        total += parseFloat(filtered[i].price_bought_at)
      } 
      return total
    }
  

    render() {
      return (
        <>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Currency</th>
                <th>Amount in Possession</th>
                <th>Total Spent</th>
                <th>Price Now</th>
                <th>PnL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bitcoin</td>
                <td>{this.state.bitcoinTotalAmt}</td>
                <td>{this.state.bitcoinTotalSpetCalc}</td>
                <td>{this.state.APIPriceBTC.usd}</td>
                <td>PnL</td>
              </tr>
              <tr>
                <td>Ethereum</td>
                <td>{this.state.ethereumTotalAmt}</td>
                <td>{this.state.ethereumTotalSpetCalc}</td>
                <td>{this.state.APIPriceETH.usd}</td>
                <td>PnL</td>
              </tr>
              <tr>
                <td>ChainLink</td>
                <td>{this.state.chainlinkTotalAmt}</td>
                <td>{this.state.chainlinkTotalSpetCalc}</td>
                <td>{this.state.APIPriceLINK.usd}</td>
                <td>PnL</td>
              </tr>
              <tr>
                <td>Litecoin</td>
                <td>{this.state.litecoinTotalAmt}</td>
                <td>{this.state.litecoinTotalSpetCalc}</td>
                <td>{this.state.APIPriceLTC.usd}</td>
                <td>PnL</td>
              </tr>
              <tr>
                <td>YearnFinance</td>
                <td>{this.state.yearnfinanceTotalAmt}</td>
                <td>{this.state.yearnfinanceTotalSpetCalc}</td>
                <td>{this.state.APIPriceYFI.usd}</td>
                <td>PnL</td>
              </tr>
            </tbody>
          </Table>
        </>
      )
    }
}

export default CurrencyTracker