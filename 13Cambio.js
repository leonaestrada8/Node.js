const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const taxasDeCambio = {
  USD_BRL: 5.20,
  EUR_BRL: 6.13,
  EUR_USD: 1.18
};

const converterMoeda = (valor, origem, destino) => {
  let valorEmBRL;

  if (origem === 'USD') {
    valorEmBRL = valor * taxasDeCambio.USD_BRL;
  } else if (origem === 'EUR') {
    valorEmBRL = valor * taxasDeCambio.EUR_BRL;
  } else {
    valorEmBRL = valor;
  }

  let valorConvertido;

  if (destino === 'USD') {
    valorConvertido = valorEmBRL / taxasDeCambio.USD_BRL;
  } else if (destino === 'EUR') {
    valorConvertido = valorEmBRL / taxasDeCambio.EUR_BRL;
  } else {
    valorConvertido = valorEmBRL;
  }

  return valorConvertido;
};

rl.question('Insira a moeda de origem (USD, EUR, BRL): ', (origem) => {
  rl.question('Insira a moeda de destino (USD, EUR, BRL): ', (destino) => {
    rl.question('Insira o valor para conversão: ', (valor) => {
      const valorConvertido = converterMoeda(Number(valor), origem, destino);
      console.log(`Valor convertido: ${destino} ${valorConvertido.toFixed(2)}`);
      rl.close();
    });
  });
});
