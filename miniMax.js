function miniMaxSum(arr) {
    let n = arr.length;

    let maior = Math.max(...arr);
    let menor = Math.min(...arr);
    let soma = arr.reduce((a, b) => a + b, 0);

    console.log("Arr:", arr);
    console.log("Maior:", maior);
    console.log("Menor:", menor);
    console.log("Soma:", soma);
    console.log("Menor soma:", soma - maior);
    console.log("Maior soma:", soma - menor);
}

// Testing
let arr = [-4, 3, -9, 0, 4, 1];
miniMaxSum(arr);
