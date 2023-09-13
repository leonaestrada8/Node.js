function firstDuplicate(arr) {
    let seen = new Set();

    for (let num of arr) {
        // If the number is already in the set, return it
        if (seen.has(num)) {
            return num;
        }
        // Otherwise, add the number to the set
        else {
            seen.add(num);
        }
    }
    // If no duplicates are found, return -1
    return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2])); // Should print 3
