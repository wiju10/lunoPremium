export async function getUsdtoMyrRate() {  
  const resp = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
  const res = await resp.json()
  return +res.conversion_rates.MYR //even though its a number just put the '+' sign for readability
}

export async function convertCoinXR(priceUSD, USDMYRRate) {
  let lunoBTCUSD = priceUSD / USDMYRRate
  // console.log('BTCUSD price on Luno:      USD ' + priceUSD / USDMYRRate)
  // let each function do one thing, console log at the end
  return lunoBTCUSD  
}

export async function priceDiff(price1, price2) {
  let diff = price1 - price2
  return diff
}

export async function calcPremium(price1, price2) {
  let premium = ((((price1 - price2) / price1) * 100).toFixed(4) + "%")
  return premium
}