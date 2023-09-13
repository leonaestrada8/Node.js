const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Ponto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function calcularDistancia(a, b) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

const pontos = [];
let numeroDePontos;

const questoes = [
    () => rl.question('Informe o número de pontos: ', resposta => {
        numeroDePontos = parseInt(resposta);
        questoes[1](0);
    }),
    (i) => {
        if (i < numeroDePontos) {
            rl.question(`Informe a coordenada X do ponto ${i + 1}: `, x => {
                rl.question(`Informe a coordenada Y do ponto ${i + 1}: `, y => {
                    pontos.push(new Ponto(parseFloat(x), parseFloat(y)));
                    questoes[1](i + 1);
                });
            });
        } else {
            questoes[2]();
        }
    },
    () => {
        let distanciaTotal = 0;
        for (let i = 0; i < pontos.length - 1; i++) {
            const distancia = calcularDistancia(pontos[i], pontos[i + 1]);
            console.log(`Distância do ponto ${i + 1} ao ponto ${i + 2}: ${distancia}`);
            distanciaTotal += distancia;
        }

        console.log(`Distância total percorrida: ${distanciaTotal}`);
        rl.close();
    }
];

questoes[0]();
