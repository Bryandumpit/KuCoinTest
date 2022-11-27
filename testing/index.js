const api = require('kucoin-node-api')

const config = {
  apiKey: '',
  secretKey: '',
  passphrase: '',
  environment: 'live'
}

api.init(config)

// Public streaming websocket for the orderbook of the provide symbol(s)
api.initSocket({topic: "orderbook", symbols: ['KCS-BTC','MHC-ETH']}, (msg) => {
    let data = JSON.parse(msg)
    console.log(data)
    
    console.log()
  })