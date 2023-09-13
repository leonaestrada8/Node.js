let lista = [1, 2, 4, 7, 9, 5];

for (let i = 0; i < lista.length - 1; i++) {
    let done = true;
    for (let j = 0; j < lista.length - i - 1; j++) {
        if (lista[j] > lista[j + 1]) {
            let temp = lista[j];
            lista[j] = lista[j + 1];
            lista[j + 1] = temp;
            done = false;
        }
    }
    console.log(lista);
    if (done) {
        console.log("Ordenação concluída: break!");
        break;
    }
}
