import Binance from 'node-binance-api';

export async function getBTCBUSD() {
  try {
    const binance = new Binance() //not the same as the fetch function
    const ticker = await binance.prices()
    // console.info("BTCBUSD price on Binance:  USD", ticker.BTCBUSD)
    return +ticker.BTCBUSD
  }
  catch (err) {
    return NaN
  }
}

export default { getBTCBUSD }