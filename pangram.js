function pangrams(s) {
    let alphabet = new Set('abcdefghijklmnopqrstuvwxyz');
    s = s.toLowerCase();

    for (let c of s) {
        alphabet.delete(c);
    }

    if (alphabet.size === 0) {
        return 'pangram';
    } else {
        console.log(alphabet);
        return 'not pangram';
    }
}

console.log(pangrams("The quick brown fox jumps over a lazy dog."));
console.log(pangrams("Pack my box with five dozen liquor jugs."));
console.log(pangrams("Mr. Jock, TV quiz PhD., bags few lynx."));
console.log(pangrams("The problem with the world is that the intelligent people are full of doubts, while the stupid ones are full of confidence."));
