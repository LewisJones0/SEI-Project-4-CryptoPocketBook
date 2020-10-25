import React from 'react'


class Widget extends  React.Component {

  componentDidMount() {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js'
      script.async = true;
      script.innerHTML = JSON.stringify({ /* JSON object */})
      document.getElementById("myContainer").appendChild(script);
  }

  render() {
      return(
    <div id="myContainer">
      <div className="tradingview-widget-container">
          <div className="tradingview-widget-container__widget" >
          <div class="tradingview-widget-copyright"><a href="https://uk.tradingview.com/markets/cryptocurrencies/" rel="noopener" target="_blank"><span class="blue-text">Bitcoin and Altcoin Prices</span></a> by TradingView</div>
          
          </div>
      </div>
    </div>
      )
  }
  }

export default Widget


// <!-- TradingView Widget BEGIN -->
// <div class="tradingview-widget-container">
//   <div class="tradingview-widget-container__widget"></div>
//   <div class="tradingview-widget-copyright"><a href="https://uk.tradingview.com/markets/cryptocurrencies/" rel="noopener" target="_blank"><span class="blue-text">Bitcoin and Altcoin Prices</span></a> by TradingView</div>
//   <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js" async>
//   {
//   "title": "Cryptocurrencies",
//   "title_raw": "Cryptocurrencies",
//   "tabs": [
//     {
//       "title": "Overview",
//       "title_raw": "Overview",
//       "symbols": [
//         {
//           "s": "BITSTAMP:BTCUSD"
//         },
//         {
//           "s": "BITSTAMP:ETHUSD"
//         },
//         {
//           "s": "BITSTAMP:XRPUSD"
//         },
//         {
//           "s": "COINBASE:BCHUSD"
//         },
//         {
//           "s": "COINBASE:LTCUSD"
//         },
//         {
//           "s": "BITFINEX:IOTUSD"
//         }
//       ],
//       "quick_link": {
//         "title": "More cryptocurrencies",
//         "href": "/markets/cryptocurrencies/prices-all/"
//       }
//     },
//     {
//       "title": "Bitcoin",
//       "title_raw": "Bitcoin",
//       "symbols": [
//         {
//           "s": "BITSTAMP:BTCUSD"
//         },
//         {
//           "s": "COINBASE:BTCEUR"
//         },
//         {
//           "s": "COINBASE:BTCGBP"
//         },
//         {
//           "s": "BITFLYER:BTCJPY"
//         },
//         {
//           "s": "CEXIO:BTCRUB"
//         },
//         {
//           "s": "CME:BTC1!"
//         }
//       ],
//       "quick_link": {
//         "title": "More Bitcoin pairs",
//         "href": "/markets/cryptocurrencies/prices-bitcoin/"
//       }
//     },
//     {
//       "title": "XRP",
//       "title_raw": "XRP",
//       "symbols": [
//         {
//           "s": "BITSTAMP:XRPUSD"
//         },
//         {
//           "s": "KRAKEN:XRPEUR"
//         },
//         {
//           "s": "KORBIT:XRPKRW"
//         },
//         {
//           "s": "BITSO:XRPMXN"
//         },
//         {
//           "s": "BINANCE:XRPBTC"
//         },
//         {
//           "s": "BITTREX:XRPETH"
//         }
//       ],
//       "quick_link": {
//         "title": "More XRP pairs",
//         "href": "/markets/cryptocurrencies/prices-xrp/"
//       }
//     },
//     {
//       "title": "Ethereum",
//       "title_raw": "Ethereum",
//       "symbols": [
//         {
//           "s": "COINBASE:ETHUSD"
//         },
//         {
//           "s": "KRAKEN:ETHEUR"
//         },
//         {
//           "s": "KRAKEN:ETHGBP"
//         },
//         {
//           "s": "KRAKEN:ETHJPY"
//         },
//         {
//           "s": "POLONIEX:ETHBTC"
//         },
//         {
//           "s": "KRAKEN:ETHXBT"
//         }
//       ],
//       "quick_link": {
//         "title": "More Ethereum pairs",
//         "href": "/markets/cryptocurrencies/prices-ethereum/"
//       }
//     },
//     {
//       "title": "Bitcoin Cash",
//       "title_raw": "Bitcoin Cash",
//       "symbols": [
//         {
//           "s": "COINBASE:BCHUSD"
//         },
//         {
//           "s": "BITSTAMP:BCHEUR"
//         },
//         {
//           "s": "CEXIO:BCHGBP"
//         },
//         {
//           "s": "BITSTAMP:BCHBTC"
//         },
//         {
//           "s": "HITBTC:BCHETH"
//         },
//         {
//           "s": "KRAKEN:BCHXBT"
//         }
//       ],
//       "quick_link": {
//         "title": "More Bitcoin Cash pairs",
//         "href": "/markets/cryptocurrencies/prices-bitcoin-cash/"
//       }
//     }
//   ],
//   "title_link": "/markets/cryptocurrencies/prices-all/",
//   "width": 400,
//   "height": 660,
//   "showChart": true,
//   "locale": "uk",
//   "plotLineColorGrowing": "rgba(33, 150, 243, 1)",
//   "plotLineColorFalling": "rgba(33, 150, 243, 1)",
//   "belowLineFillColorGrowing": "rgba(33, 150, 243, 0.12)",
//   "belowLineFillColorFalling": "rgba(33, 150, 243, 0.12)",
//   "gridLineColor": "#2A2E39",
//   "scaleFontColor": "rgba(120, 123, 134, 1)",
//   "showSymbolLogo": true,
//   "symbolActiveColor": "rgba(33, 150, 243, 0.12)",
//   "colorTheme": "dark"
// }
//   </script>
// </div>
// <!-- TradingView Widget END -->