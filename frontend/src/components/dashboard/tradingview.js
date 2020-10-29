import React from 'react'
import { TradingViewEmbed, widgetType } from 'react-tradingview-embed'


export default function Widget() {
  return (
    <div
      className="App"
    >
      <TradingViewEmbed
        widgetType={widgetType.MARKET_OVERVIEW}
        widgetConfig={{
          colorTheme: 'dark',
          dateRange: '1M',
          showChart: true,
          isTransparent: false,
          showSymbolLogo: true,
          width: '95%',
          height: '550',
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