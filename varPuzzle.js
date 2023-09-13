function var_puzzle() {
    let product1 = "Computer";
    let product2 = "Office desk";
    let age = 30;
    let code = 5290;
    let gender = 'F';
    let price1 = 2100.0;
    let price2 = 650.50;
    let measure = 53.234567;

    console.log("Products:");
    console.log(`${product1}s, which price is $ ${price1.toFixed(2)}`);
    console.log(`${product2}s, which price is $ ${price2.toFixed(2)}`);
    console.log(`Record: ${age} years old, code ${code} and gender: ${gender}`);
    console.log(`Measure with eight decimal places: ${measure.toFixed(8)}`);
    console.log(`Rounded (three decimal places): ${measure.toFixed(3)}`);
    console.log(`US decimal point: ${measure.toFixed(3)}`);
}

var_puzzle();
