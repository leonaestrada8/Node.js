function flippingBits(n) {
    let MAX_32BIT_INT = BigInt(Math.pow(2, 32) - 1);
    n = BigInt(n);
    return Number(n ^ MAX_32BIT_INT);
}

let n = 9;
console.log(flippingBits(n));
