function insertionSort (arr){
    const n = arr.length;
    for (let i=1; i<n; i++){
        let j = i;
        while (j > 0 & arr[j] < arr[j-1]){
            [arr[j] , arr[j-1]] = [arr[j-1] , arr[j]];
            j -= 1;
        }
    }
    return arr;
}

console.log("ORIGINAL:");
let arr = [10,9,8,7,6,5,4,3,2,1];
console.log(arr);
let lista_ordenada = insertionSort(arr)
console.log("ORDENADA:");
console.log(arr);
