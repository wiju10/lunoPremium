import Binance from 'node-binance-api';

export async function getBTCBUSD() {
  const binance = new Binance()
  const ticker = await binance.prices('BTCBUSD')
  // console.info("BTCBUSD price on Binance:  USD", ticker.BTCBUSD)
  return +ticker.BTCBUSD
}

export default { getBTCBUSD }