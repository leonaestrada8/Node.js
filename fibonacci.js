function fibonacci(n) {
    let arr = [0, 1];

    for (let i = 2; i < n; i++) {
        // console.log(i);
        arr.push(arr[i - 1] + arr[i - 2]);
    }

    let output = "";
    for (let j = 0; j < n; j++) {
        output += arr[j];
        if (j != n - 1) {
            output += " ";
        }
    }
    console.log(output);
}

fibonacci(5);
fibonacci(42);
