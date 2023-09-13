const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => b !== 0 ? a / b : 'Cannot divide by zero'
};

rl.question('Enter first number: ', (a) => {
  rl.question('Enter second number: ', (b) => {
    rl.question('Enter operation (add, subtract, multiply, divide): ', (operation) => {
      const func = operations[operation];
      if (func) {
        const result = func(parseFloat(a), parseFloat(b));
        console.log('Result:', result);
      } else {
        console.log('Invalid operation');
      }
      rl.close();
    });
  });
});
