require('dotenv').config();

var myHeaders = new Headers();
myHeaders.append("apikey", process.env.APILAYER_KEY); 

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

async function getPrice() {
  const res1 = await fetch("https://api.luno.com/api/1/ticker?pair=XBTMYR")
  const res = await res1.json()
  console.log('BTCMYR price on Luno:  MYR ' + parseInt(res.last_trade))
}

async function getRateUSDMYR() {  
  const res1 = await fetch("https://api.apilayer.com/fixer/convert?to=MYR&from=USD&amount=1", requestOptions)
  .then(response => response.json())  //would not work earlier because response.json was response.text and was returning string instead of object
  .then(result => console.log('USDMYR:                ' + result.info.rate))
}


getPrice()
getRateUSDMYR()