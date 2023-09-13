/*
function findUnique(arr) { // SOLUTION I: O(n)
    let res = 0;
    for(let num of arr) {
        res ^= num;
    }
    return res;
}
*/

function findUnique(arr) {
    for(let i of arr) {    // SOLUTION II: O(n^2)
        let count = arr.filter(x => x == i).length; // Counts the occurrence of 'i' in the array
        if(count == 1) {
            return i;
        }
    }
}


let A = [1, 2, 3, 7, 3, 2, 1];
let B = [1, 2, 3, 4, 3, 2, 1, 4, 42, 7, 8, 7, 8, 9, 10, 9, 10, 11, 11];
console.log(findUnique(A)); // Returns 7
console.log(findUnique(B)); // Returns 42
