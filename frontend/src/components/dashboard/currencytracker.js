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
    bitcoinTotalSpentCalc: '',
    ethereumTotalSpentCalc: '',
    chainlinkTotalSpentCalc: '',
    litecoinTotalSpentCalc: '',
    yearnfinanceTotalSpentCalc: '',
    APIPriceBTC: '',
    APIPriceETH: '',
    APIPriceLINK: '',
    APIPriceLTC: '',
    APIPriceYFI: '',
    btcProfit: '',
    ethProfit: '',
    linkProfit: '',
    ltcProfit: '',
    yfiProfit: ''
  }

  async componentDidMount() {
    const getData = await getUser()
    const getMarketData = await getLiveData()
    console.log(getData)
    console.log(getMarketData)

    this.setState({
      transactions: getData.data.owner_transactions,
      APIPriceBTC: getMarketData.data.bitcoin.usd,
      APIPriceETH: getMarketData.data.ethereum.usd,
      APIPriceLINK: getMarketData.data.chainlink.usd,
      APIPriceLTC: getMarketData.data.litecoin.usd,
      APIPriceYFI: getMarketData.data['yearn-finance'].usd
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
    const btcTotalSpentCalc = this.totalPriceBoughtAt('bitcoin')
    const ethTotalSpentCalc = this.totalPriceBoughtAt('ethereum')
    const linkTotalSpentCalc = this.totalPriceBoughtAt('chainlink')
    const ltcTotalSpentCalc = this.totalPriceBoughtAt('litecoin')
    const yfiTotalSpentCalc = this.totalPriceBoughtAt('yearnfinance')
    this.setState({
      bitcoinTotalSpentCalc: btcTotalSpentCalc,
      ethereumTotalSpentCalc: ethTotalSpentCalc,
      chainlinkTotalSpentCalc: linkTotalSpentCalc,
      litecoinTotalSpentCalc: ltcTotalSpentCalc,
      yearnfinanceTotalSpentCalc: yfiTotalSpentCalc
    })
    const btcProfit = this.profitAndLossCalc(this.state.APIPriceBTC, this.state.bitcoinTotalSpentCalc, this.state.bitcoinTotalAmt)
    const ethProfit = this.profitAndLossCalc(this.state.APIPriceETH, this.state.ethereumTotalSpentCalc, this.state.ethereumTotalAmt)
    const linkProfit = this.profitAndLossCalc(this.state.APIPriceLINK, this.state.chainlinkTotalSpentCalc, this.state.chainlinkTotalAmt)
    const ltcProfit = this.profitAndLossCalc(this.state.APIPriceLTC, this.state.litecoinTotalSpentCalc, this.state.litecoinTotalAmt)
    const yfiProfit = this.profitAndLossCalc(this.state.APIPriceYFI, this.state.yearnfinanceTotalSpentCalc, this.state.yearnfinanceTotalAmt)
    this.setState({
      btcProfit: btcProfit,
      ethProfit: ethProfit,
      linkProfit: linkProfit,
      ltcProfit: ltcProfit,
      yfiProfit: yfiProfit
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

    profitAndLossCalc = (APIPrice, coinTotalSpent, totalCurrencyOwnership) => {
      var currentTotalValue = totalCurrencyOwnership *= APIPrice
      const total = currentTotalValue -= coinTotalSpent
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
                <td>$ {this.state.bitcoinTotalSpentCalc}</td>
                <td>$ {this.state.APIPriceBTC}</td>
                <td>$ {this.state.btcProfit}</td>
              </tr>
              <tr>
                <td>Ethereum</td>
                <td>{this.state.ethereumTotalAmt}</td>
                <td>$ {this.state.ethereumTotalSpentCalc}</td>
                <td>$ {this.state.APIPriceETH}</td>
                <td>$ {this.state.ethProfit}</td>
              </tr>
              <tr>
                <td>ChainLink</td>
                <td>{this.state.chainlinkTotalAmt}</td>
                <td>$ {this.state.chainlinkTotalSpentCalc}</td>
                <td>$ {this.state.APIPriceLINK}</td>
                <td>$ {this.state.linkProfit}</td>
              </tr>
              <tr>
                <td>Litecoin</td>
                <td>{this.state.litecoinTotalAmt}</td>
                <td>$ {this.state.litecoinTotalSpentCalc}</td>
                <td>$ {this.state.APIPriceLTC}</td>
                <td>$ {this.state.ltcProfit}</td>
              </tr>
              <tr>
                <td>YearnFinance</td>
                <td>{this.state.yearnfinanceTotalAmt}</td>
                <td>$ {this.state.yearnfinanceTotalSpentCalc}</td>
                <td>$ {this.state.APIPriceYFI}</td>
                <td>$  {this.state.yfiProfit}</td>
              </tr>
            </tbody>
          </Table>
        </>
      )
    }
}

export default CurrencyTracker