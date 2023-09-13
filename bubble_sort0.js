
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1],  arr[j]];
            }
        }
    }
    return arr;
    }
    const numbers = [8,10,5,1,3,2,4,7,6,9,];
    const sortedNumbers = bubbleSort(numbers);
    console.log(sortedNumbers);