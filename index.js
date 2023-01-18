import dotenv from 'dotenv'
dotenv.config()
import binance from './lib/binance.js'
import luno from './lib/luno.js'
import { getUsdtoMyrRate } from './lib/utils.js'
import { convertCoinXR } from './lib/utils.js'
import { calcPremium } from './lib/utils.js'
import { priceDiff } from './lib/utils.js'
export { main }

async function main() {
  const lunoPriceInMyr = await luno.getLunoMyrPrice()
  const binancePriceInUsd = await binance.getBTCBUSD()
  const er = await getUsdtoMyrRate()
  const lunoPriceInUsd = await convertCoinXR(lunoPriceInMyr, er)
  const diff = await priceDiff(lunoPriceInUsd, binancePriceInUsd)
  const premium = await calcPremium(lunoPriceInUsd, binancePriceInUsd)

  console.log("BTCMYR price on Luno:".padEnd(30, ' ') + `MYR ${lunoPriceInMyr}`)
  console.log("USDMYR:".padEnd(30, ' ') + er)
  console.log("BTCUSD price on Luno:".padEnd(30, ' ') + `USD ${lunoPriceInUsd}`)
  console.log("BTCBUSD price on Binance:".padEnd(30, ' ') + `USD ${binancePriceInUsd}`)
  console.log("Price difference:".padEnd(30, ' ') + `USD ${diff}`)
  console.log("Luno Premium:".padEnd(30, ' ') + premium)
}

main()