function stringsXor(s, t) {
    let res = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === t[i]) {
            res += '0';
        } else {
            res += '1';
        }
    }
    return res;
}

let s = "10101";
let t = "00101";
console.log(stringsXor(s, t));  // Outputs "10000"
