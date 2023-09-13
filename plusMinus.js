function plusMinus(arr) {
    let n = arr.length;

    let positives = 0;
    let negatives = 0;
    let zeros = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            positives += 1;
        } else if (arr[i] < 0) {
            negatives += 1;
        } else {
            zeros += 1;
        }
    }

    console.log("POSITIVES: " + (positives / n).toFixed(6));
    console.log("NEGATIVES: " + (negatives / n).toFixed(6));
    console.log("ZEROS: " + (zeros / n).toFixed(6));
}

// Testing
let arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);
