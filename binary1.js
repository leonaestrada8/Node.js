function binary(arr,x){
    let right = arr.length -1;
    let left = 0;
    let indexed_arr = arr.map((value, index) => ({index, value}));
    indexed_arr.sort((a,b) => a.value - b.value);
    let mid = 0;
    while (left <= right){
        mid = left + Math.floor((right-left)/2);
        if (indexed_arr[mid].value === x){
            return indexed_arr[mid].index;
        }else if (indexed_arr[mid].value > x){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return -1;
}
    
const arr = [5,6,7,3,2,1,15,10,77,88,99,42,35,21,8,12,13];
const x = 13;

// Chamando a função
const result = binary(arr, x);

if (result !== -1) {
  console.log(`Elemento encontrado no índice ${result}`);
} else {
  console.log("Elemento não encontrado na matriz");
}

