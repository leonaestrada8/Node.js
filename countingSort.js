function countingSort(arr) {
    let result = new Array(100).fill(0);  // Initialize result array with zeros.
    for (let num of arr) {  // For each number in arr.
        result[num]++;  // Increment the corresponding index in the result array.
    }
    return result;
}

let arr = [1, 1, 3, 2, 1];
console.log(countingSort(arr));
