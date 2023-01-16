import Binance from 'node-binance-api';

export async function getBTCBUSD() {
  const binance = new Binance() //not the same as the fetch function
  const ticker = await binance.prices()
    if (ticker == "Failed to retrieve price") {
    return "Failed to retrieve price"
    }
  // console.info("BTCBUSD price on Binance:  USD", ticker.BTCBUSD)
  return +ticker.BTCBUSD
}

export default { getBTCBUSD }