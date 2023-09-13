function diagonalDifference(arr) {
    let diag1 = 0, diag2 = 0;
    let n = arr.length;
    
    for (let i = 0; i < n; i++) {
        diag1 += arr[i][i];
        diag2 += arr[i][n - i - 1];
    }
    
    return Math.abs(diag1 - diag2);
}

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
];
console.log(diagonalDifference(arr));
