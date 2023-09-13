function birthday(s, d, m) {
    let ways = 0;
    let sum_squares = 0;
    
    for (let i = 0; i < m; i++) {
        sum_squares += s[i];
    }

    if (sum_squares === d) {
        ways++;
    }

    for (let i = m; i < s.length; i++) {
        sum_squares = sum_squares - s[i - m] + s[i];
        if (sum_squares === d) {
            ways++;
        }
    }
    
    return ways;
}

// Testing
let s = [2, 2, 1, 3, 2];
let d = 4;
let m = 2;
console.log(birthday(s, d, m));  // Outputs: 2
