fetch('https://api.cryptonator.com/api/ticker/btc-usd')
.then(res => {
  return res.json();
})
.then(data => {
  printPrice(data.ticker.price);
})
.catch(err => {
  console.log("Something went wrong", err);
})

function printPrice(price){
  document.querySelector("h2").innerHTML = `$ ${price}`;
}
