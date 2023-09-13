
function calcularMedia(notas) {
    return notas.reduce((a, b) => a + b) / notas.length;
}
  
function calcularMediana(notas) {
    notas.sort((a, b) => a - b);
    const meio = Math.floor(notas.length / 2);
    if (notas.length % 2 === 0) {
      return (notas[meio - 1] + notas[meio]) / 2;
    } else {
      return notas[meio];
    }
}
  
function calcularDesvioPadrao(notas, media) {
    const somaDasDiferencasQuadradas = notas.reduce((a, b) => a + Math.pow(b - media, 2), 0);
    const variancia = somaDasDiferencasQuadradas / notas.length;
    return Math.sqrt(variancia);
}
  
const readlineSync = require('readline-sync');

function estatisticasTurma() {
    const numAlunos = parseInt(readlineSync.question('Insira o numero de alunos na turma: '));
    const notas = [];

    for (let index = 0; index < numAlunos; index++) {
      const nota = parseFloat(readlineSync.question('Insira a nota do aluno: '));
      notas.push(nota);
    }
  
    const media = calcularMedia(notas);
    const mediana = calcularMediana(notas);
    const desvioPadrao = calcularDesvioPadrao(notas, media);
  
    console.log(`Média da turma: ${media.toFixed(2)}`);
    console.log(`Mediana da turma: ${mediana.toFixed(2)}`);
    console.log(`Desvio Padrão da turma: ${desvioPadrao.toFixed(2)}`);
}
  
estatisticasTurma();
  
  

  