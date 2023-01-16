require('dotenv').config();

var myHeaders = new Headers();
myHeaders.append("apikey", process.env.APILAYER_KEY); 

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

async function getRateUSDMYR() {  
  const res1 = await fetch("https://api.apilayer.com/fixer/convert?to=MYR&from=USD&amount=1", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result.info.rate))
}

getRateUSDMYR()

const x = "{'a': 5}"

x['a']

const y = {'a':5}
y['a']