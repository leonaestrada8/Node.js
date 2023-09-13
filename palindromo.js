function palindromo(palavra) {
    if (palavra.length < 3) {
        return '?';
    }

    palavra = palavra.toLowerCase();
    var contrario = '';


    for (var i = 0; i < palavra.length; i++) {
        contrario += palavra[palavra.length - i - 1];
    }

    if (palavra === contrario) {
        return 'S';
    } else {
        return 'N';
    }
}

console.log(palindromo("anilina"));  


