const N = 7;
const M = 5;

const matrix = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => Math.floor(Math.random() * 15) - 5)
);

console.log("Матриця:");
matrix.forEach(row => console.log(row.join("\t")));

const positiveCount = matrix.flat().filter(x => x > 0).length;
console.log("1. Кількість додатних елементів:", positiveCount);

const rowsWithoutZeros = matrix.filter(row => !row.includes(0)).length;
console.log("2. Кількість рядків без нульових елементів:", rowsWithoutZeros);

let columnsWithZero = 0;
for (let col = 0; col < M; col++) {
    for (let row = 0; row < N; row++) {
        if (matrix[row][col] === 0) {
            columnsWithZero++;
            break;
        }
    }
}
console.log("3. Кількість стовпців з хоча б одним нульовим елементом:", columnsWithZero);

function longestSeriesLength(row) {
    let maxLen = 1;
    let currentLen = 1;
    for (let i = 1; i < row.length; i++) {
        if (row[i] === row[i - 1]) {
            currentLen++;
            maxLen = Math.max(maxLen, currentLen);
        } else {
            currentLen = 1;
        }
    }
    return maxLen;
}

let maxSeriesLength = 0;
let maxSeriesRowIndex = -1;

matrix.forEach((row, i) => {
    const len = longestSeriesLength(row);
    if (len > maxSeriesLength) {
        maxSeriesLength = len;
        maxSeriesRowIndex = i;
    }
});

console.log("4. Номер рядка з найдовшою серією однакових елементів:", maxSeriesRowIndex);

const productRowsWithoutNegatives = matrix
    .filter(row => row.every(x => x >= 0))
    .map(row => row.reduce((acc, x) => acc * x, 1));
console.log("5. Добутки рядків без від’ємних елементів:", productRowsWithoutNegatives);

let sumColumnsWithoutNegatives = [];

for (let col = 0; col < M; col++) {
    let column = matrix.map(row => row[col]);
    if (column.every(x => x >= 0)) {
        let sum = column.reduce((acc, x) => acc + x, 0);
        sumColumnsWithoutNegatives.push({ column: col, sum });
    }
}

console.log("6. Суми стовпців без від’ємних елементів:", sumColumnsWithoutNegatives);

let sumColumnsWithNegatives = [];

for (let col = 0; col < M; col++) {
    let column = matrix.map(row => row[col]);
    if (column.some(x => x < 0)) {
        let sum = column.reduce((acc, x) => acc + x, 0);
        sumColumnsWithNegatives.push({ column: col, sum });
    }
}

console.log("7. Суми стовпців з хоча б одним від’ємним елементом:", sumColumnsWithNegatives);

const transposed = Array.from({ length: M }, (_, col) =>
    Array.from({ length: N }, (_, row) => matrix[row][col])
);

console.log("8. Транспонована матриця:");
transposed.forEach(row => console.log(row.join("\t")));
//new text and new again