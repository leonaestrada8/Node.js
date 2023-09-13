function twoArrays(k, A, B) {
    A.sort((a, b) => a - b);  // Sort A in ascending order
    B.sort((a, b) => b - a);  // Sort B in descending order
    console.log("A:" + A);
    console.log("B:" + B);

    for (let i = 0; i < A.length; i++) {
        console.log("checking: .... " + A[i] + " + " + B[i] + " = " + (A[i] + B[i]) + " < " + k + " ???");
        if (A[i] + B[i] < k) {  // If any pair doesn't satisfy the condition, return "NO"
            console.log("FAILED " + A[i] + " + " + B[i] + " = " + (A[i] + B[i]) + " < " + k + " !!!");
            return "NO";
        }
    }
    return "YES";  // If all pairs satisfy the condition, return "YES"
}

// testing
let k = 32;
let A = [0, 1, 5, 7, 8, 42, 20, 77, 99];
let B = [0, 2, 88, 5, 40, 25, 66, 15, 11];
console.log(twoArrays(k, A, B));  // returns "YES"
