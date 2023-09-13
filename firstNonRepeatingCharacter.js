function firstNonRepeatingCharacter(s) {
    let charCount = {};

    for (let char of s) {
        if (char in charCount) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    for (let char in charCount) {
        if (charCount[char] == 1) {
            return char;
        }
    }

    return '_';
}

console.log(firstNonRepeatingCharacter("abacabad"));

