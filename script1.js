const paragraphs = document.querySelectorAll('#paragraphs p');
const lengths = Array.from(paragraphs, p => p.innerText.length);
console.log("Масив кількостей символів у кожному абзаці:");
console.log(lengths);
let arr = [20, 17, 4, -4, 10, -9, 13, 4, 12, 22, 13, 19, 1, 3];
let min = Math.min(...arr);
let max = Math.max(...arr);
let evenCount = arr.filter(x => x % 2 === 0).length;
let oddCount = arr.filter(x => x % 2 !== 0).length;
let twoDigitCount = arr.filter(x => Math.abs(x) >= 10 && Math.abs(x) < 100).length;
let positiveCount = arr.filter(x => x > 0).length;
let negativeCount = arr.filter(x => x < 0).length;

console.log("Найменше значення:", min);
console.log("Найбільше значення:", max);
console.log("Кількість парних чисел:", evenCount);
console.log("Кількість непарних чисел:", oddCount);
console.log("Кількість двоцифрових чисел:", twoDigitCount);
console.log("Кількість додатних чисел:", positiveCount);
console.log("Кількість від’ємних чисел:", negativeCount);

let sortedArr = [...arr].sort((a, b) => a - b);
console.log("Відсортований масив:", sortedArr);

let reversedArr = [...arr].reverse();
console.log("Масив у зворотному порядку:", reversedArr);