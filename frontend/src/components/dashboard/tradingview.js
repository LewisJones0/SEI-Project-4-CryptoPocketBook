import React from 'react'

import { TradingViewEmbed, widgetType } from 'react-tradingview-embed'


export default function Widget() {
  return (
    <div
      className="App"
      // style={{background: "rgba(0, 0, 0, 0.85)"}}
    >
      <TradingViewEmbed
        widgetType={widgetType.MARKET_OVERVIEW}
        widgetConfig={{
          colorTheme: 'dark',
          dateRange: '12M',
          showChart: true,
          isTransparent: false,
          showSymbolLogo: true,
          width: '100%',
          height: '100%',
          tabs: [
            {
              'title': 'CRYPTO',
              'symbols': [
                {
                  's': 'COINBASE:BTCUSD',
                  'd': 'BTC/USD'
                },
                {
                  's': 'COINBASE:LINKUSD',
                  'd': 'LINK/USD'
                },
                {
                  's': 'COINBASE:ETHUSD',
                  'd': 'ETH/USD'
                },
                {
                  's': 'COINBASE:LTCUSD',
                  'd': 'LTC/USD'
                },
                {
                  's': 'COINBASE:YFIUSD',
                  'd': 'YFI/USD'
                }
              ]
            }
          ]
        }}
      />
    </div>
  )
}