//CÓDIGO ORIGINAL ANTES DA REFATORAÇÃO
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculator(a, b, operation) {
  switch (operation) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      if (b !== 0) {
        return a / b;
      } else {
        console.log('Cannot divide by zero');
        return 0;
      }
    default:
      console.log('Invalid operation');
      return 0;
  }
}

rl.question('Enter first number: ', (a) => {
  rl.question('Enter second number: ', (b) => {
    rl.question('Enter operation (add, subtract, multiply, divide): ', (operation) => {
      const result = calculator(parseFloat(a), parseFloat(b), operation);
      console.log('Result:', result);
      rl.close();
    });
  });
});
