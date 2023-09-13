


function calcular_media(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    let media = soma / notas.length; 
    return media;
}

function calcular_mediana(notas){
    if (notas.length === 0 || notas.some(isNaN)) {
        throw new Error("Array de notas está vazio ou contém valores não numéricos");
    }
    
    let notas_ordenadas = notas.sort((a, b) => a - b);
    const meio = Math.floor(notas.length / 2);
    let mediana;
    if (notas.length % 2 == 0){
        mediana = (notas_ordenadas[meio-1] + notas_ordenadas[meio]) / 2;
    } else{
        mediana = notas_ordenadas[meio];
    }
    return mediana;
}

function calcular_desvio_Padrao(notas, media){
    somatorio_quadrado_medias = notas.reduce((a,b) => a + Math.pow(b - media,2));
    variancia = somatorio_quadrado_medias / notas.length;
    desvio_padrao = Math.sqrt(variancia);
    return desvio_padrao;

}


const readlineSync = require('readline-sync');

function estatisticasTurma() {
    const numAlunos = parseInt(readlineSync.question('Insira o numero de alunos na turma: '));
    const notas = [];
    
    for (let index = 0; index < numAlunos; index++) {
        const nota = parseFloat(readlineSync.question('Insira a nota do aluno: '));
        notas.push(nota);
    }
      
    const media = calcular_media(notas);
    const mediana = calcular_mediana(notas);
    //const desvioPadrao = calcularDesvioPadrao(notas, media);
      
    console.log(`Média da turma: ${media.toFixed(2)}`);
    console.log(`Mediana da turma: ${mediana.toFixed(2)}`);
    //console.log(`Desvio Padrão da turma: ${desvioPadrao.toFixed(2)}`);
}





estatisticasTurma()