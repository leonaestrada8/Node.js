const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const filmes = [
  { nome: 'Movie 1', preco: 10 },
  { nome: 'Movie 2', preco: 12 }
];

const salas = [
  { nome: 'Sala 1', assentos: Array(5).fill(Array(10).fill('Livre')) },
  { nome: 'Sala 2', assentos: Array(5).fill(Array(10).fill('Livre')) }
];

console.log('Filmes em Cartaz:');
filmes.forEach((filme, index) => {
  console.log(`${index + 1}. ${filme.nome} - $${filme.preco}`);
});

rl.question('Selecione o filme: ', filmeSelecionado => {
  const filme = filmes[filmeSelecionado - 1];

  console.log('Salas Disponíveis:');
  salas.forEach((sala, index) => {
    console.log(`${index + 1}. ${sala.nome}`);
  });

  rl.question('Selecione a sala: ', salaSelecionada => {
    const sala = salas[salaSelecionada - 1];

    console.log('Assentos:');
    sala.assentos.forEach((row, rowIndex) => {
      console.log(row.map(seat => seat).join(' | '));
    });

    rl.question('Selecione a fileira: ', row => {
      rl.question('Selecione a coluna: ', col => {
        const selectedRow = sala.assentos[row - 1];
        if (selectedRow[col - 1] === 'Livre') {
          selectedRow[col - 1] = 'Ocupado';
          console.log(`Ingresso reservado. Preço Total: $${filme.preco}`);
        } else {
          console.log('Assento já ocupado!');
        }

        rl.close();
      });
    });
  });
});
