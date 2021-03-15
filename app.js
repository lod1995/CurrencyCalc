const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');




function calculate(){
const currency_one = currencyEl_one.value;
const currency_two = currencyEl_two.value;

console.log(currency_one, currency_two)

fetch(`https://v6.exchangerate-api.com/v6/bf32979221b9da7bb4d945d3/latest/USD${currency_one}`)
.then(res => res.json ())
.then(data => {
console.log(data);

});




}


currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

calculate();
