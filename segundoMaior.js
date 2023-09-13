function segundoMaior(nums) {
    let uniqueNums = [...new Set(nums)];  // Remove duplicates
    uniqueNums.sort((a, b) => a - b);  // Sort the array
    return uniqueNums[uniqueNums.length - 2];  // Return the second last element
}

let arr = [2, 3, 6, 6, 5];
console.log(segundoMaior(arr));  // Output: 5
