function knapsackGreedy(values, weights, capacity) {
    const n = values.length;
    const ratios = values.map((value, i) => [value / weights[i], value, weights[i]]);
    ratios.sort((a, b) => b[0] - a[0]);

    let totalValue = 0;
    let currentWeight = 0;
    const selectedItems = [];

    for (const [ratio, value, weight] of ratios) {
        if (currentWeight + weight <= capacity) {
            selectedItems.push([value, weight]);
            totalValue += value;
            currentWeight += weight;
        }
    }

    return { totalValue, selectedItems };
}

const itemValues = [60, 100, 120];
const itemWeights = [10, 20, 30];
const knapsackCapacity = 50;

const { totalValue, selectedItems } = knapsackGreedy(itemValues, itemWeights, knapsackCapacity);

console.log(`Valor total na mochila: ${totalValue}`);
console.log("Itens selecionados:");
selectedItems.forEach(([value, weight]) => console.log(`Item - Valor: ${value}, Peso: ${weight}`));
