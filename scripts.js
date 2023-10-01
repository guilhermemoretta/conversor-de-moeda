const convertButton = document.querySelector('.convert-button')
const segundoSelect = document.querySelector('.segundo-select')
const primeiroSelect = document.querySelector('.primeiro-select')


function convertValues() {
  const inputCurrencyValue = document.querySelector('.input-currency').value
  const currencyValueToConvert = document.querySelector(
    '.currency-value-to-convert',
  ) // Valor em Real
  const currencyValueConverted = document.querySelector('.currency-value') // Outras moedas

  const dolarToday = 5.03
  const euroToday = 6.2
  const libraToday = 6.12
  const bitcoinToday = 132615.12
  


  if (segundoSelect.value == 'dolar' && primeiroSelect.value == 'real') {   // Se o select estiver selecionado o valor de dolar, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(inputCurrencyValue / dolarToday) // valor digitado em real, divido pelo valor do dolar

  }

  if (segundoSelect.value == 'euro' && primeiroSelect.value == 'real') {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(inputCurrencyValue / euroToday) //valor digitado em real, divido pelo valor do euro

  }

  if (segundoSelect.value == 'bitcoin' && primeiroSelect.value == 'real') {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'BTC',
    }).format(inputCurrencyValue / bitcoinToday) //valor digitado em real, divido pelo valor do bitcoin

  }

  if (segundoSelect.value == 'libra' && primeiroSelect.value == 'real') {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
    }).format(inputCurrencyValue / libraToday) // valor digitado em real, divido pelo valor da libra

  }

  if (primeiroSelect.value == 'dolar' && segundoSelect.value == 'real') {

    currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(inputCurrencyValue * dolarToday) // valor de 4.78 equivale a um dolar 
  }

  if (primeiroSelect.value == 'dolar' && segundoSelect.value == 'euro') {

    currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(inputCurrencyValue * 0.95) // valor de 0.95 equivale a um euro 
  }

  if (primeiroSelect.value == 'dolar' && segundoSelect.value == 'bitcoin') {

    currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'BTC',
    }).format(inputCurrencyValue * 0.000037 ) // valor de 0.000037 equivale a um bitcoin 
  }

  if (primeiroSelect.value == 'dolar' && segundoSelect.value == 'libra') {

    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
    }).format(inputCurrencyValue * 0.82 ) // valor de 0.82 equivale a uma libra 
  }


  

  currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(inputCurrencyValue)

  currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(inputCurrencyValue)
}



function changeCurrency() {
  const nomeMoeda2 = document.getElementById('nome-moeda-select-2')
  const nomeMoeda1 = document.getElementById('nome-moeda-select-1')
  const currencyImage = document.querySelector('.currency-img')
  const imagemPrimeiroSelect = document.querySelector('.imagem-primeiro-select')
  console.log(nomeMoeda1.value)
  

  if (segundoSelect.value == 'real') {
    nomeMoeda2.innerHTML = 'Real Brasileiro'
    currencyImage.src = './assets/real.png'
  }

  if (primeiroSelect.value == 'real') {
    nomeMoeda1.innerHTML = 'Real Brasileiro'
    imagemPrimeiroSelect.src = './assets/real.png'
  }

  if (segundoSelect.value == 'dolar') {
    nomeMoeda2.innerHTML = 'Dólar americano'
    currencyImage.src = './assets/dolar.png'
  }

  if (primeiroSelect.value == 'dolar') {
    nomeMoeda1.innerHTML = 'Dólar americano'
    imagemPrimeiroSelect.src = './assets/dolar.png'
  }

  if (segundoSelect.value == 'euro') {
    nomeMoeda2.innerHTML = 'Euro'
    currencyImage.src = './assets/euro.png'
  }

  if (segundoSelect.value == 'bitcoin') {
    nomeMoeda2.innerHTML = 'Bitcoin'
    currencyImage.src = './assets/bitcoin.png'
  }

  if (segundoSelect.value == 'libra') {
    nomeMoeda2.innerHTML = 'Libra'
    currencyImage.src = './assets/libra.png'
  }


  convertValues()
}
primeiroSelect.addEventListener('change', changeCurrency)
segundoSelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)