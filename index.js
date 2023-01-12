async function getPrice(){
  const res1 = await fetch("https://api.luno.com/api/1/ticker?pair=XBTMYR")
  const res = await res1.json()
  console.log('BTCMYR price on Luno:  MYR ' + parseInt(res.last_trade))
}

getPrice()