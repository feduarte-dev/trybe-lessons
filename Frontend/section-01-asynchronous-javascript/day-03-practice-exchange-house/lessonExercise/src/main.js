import Swal from 'sweetalert2';

const inputCurrency = document.querySelector('#inputCurrency');
const buttonSearch = document.querySelector('#buttonSearch');
const tableTittle = document.querySelector('#tableTittle');
const tableCurrency = document.querySelector('#tableCurrency');

const getCurrency = () => {
  const moeda = inputCurrency.value;
  const CURRENCY_API = `https://api.exchangerate.host/latest?base=${moeda}`;
  fetch(CURRENCY_API)
    .then((response) => response.json())
    .then((data) => {
      Object.entries(data.rates).forEach((currency) => {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        const span = document.createElement('span');
        td.innerText = `${currency[0]}`;
        span.innerText = `${currency[1]}`;
        tableCurrency.appendChild(tr).appendChild(td).appendChild(span);
      });
    });
};

const captureCurrency = () => {
  const currencyArr = [];
  const moeda = inputCurrency.value;
  const CURRENCY_API = `https://api.exchangerate.host/latest?base=${moeda}`;
  fetch(CURRENCY_API)
    .then((response) => response.json())
    .then((data) =>
      Object.keys(data.rates).forEach((currency) => {
        currencyArr.push(currency);
      })
    );
  return currencyArr;
};

const inputCheck = () => {
  const moeda = inputCurrency.value;
  return captureCurrency().some((currency) => currency === moeda.toUpperCase());
};

buttonSearch.addEventListener('click', (event) => {
  tableCurrency.innerHTML = '';
  event.preventDefault();
  inputCheck();
  if (!inputCurrency.value) {
    Swal.fire({
      title: 'Ops...',
      text: 'Você precisa passar uma moeda',
      icon: 'error',
      confirmButtonText: 'Ok',
    });
  } else if (inputCheck() === false) {
    Swal.fire({
      title: 'Ops...',
      text: 'Moeda não existente!',
      icon: 'error',
      confirmButtonText: 'Ok',
    });
  } else {
    tableTittle.innerHTML = `Valores referentes a 1 ${inputCurrency.value.toUpperCase()}`;
    getCurrency();
  }
});
