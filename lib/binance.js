import Binance from 'node-binance-api';

export async function getBTCBUSD() {
  const binance = new Binance()
  const ticker = await binance.prices('BTCBUSD')
  if (ticker.status != 200) {
    return "Failed to retrieve price"
  }
  // console.info("BTCBUSD price on Binance:  USD", ticker.BTCBUSD)
  return +ticker.BTCBUSD
}

export default { getBTCBUSD }