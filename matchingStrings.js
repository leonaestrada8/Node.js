function matchingStrings(strings, queries) {
    return queries.map(q => strings.filter(s => s === q).length);
}

let strings = ["Luke", "Leia", "Han", "Chewbacca", "Vader", "Yoda", "R2-D2", "C-3PO", "Boba Fett", "Lando", "Obi-Wan", "Anakin", "Padme", "Mace Windu", "Palpatine", "Yoda", "Obi-Wan", "Yoda", "Obi-Wan", "Vader", "Vader", "Vader"];
let queries = ["Yoda", "Vader", "Anakin", "Obi-Wan", "Han", "Leia"];

let res = matchingStrings(strings, queries);

for (let i = 0; i < res.length; i++) {
    console.log(`${queries[i]} - ${res[i]}`);
}
