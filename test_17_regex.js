// Написати функцію, яка сортує стрічку.
// Кожне число в стрічці буде містити якусь цифру.
// Ця цифра і буде означати позицію, яку слово займе в результаті.
// Уточнення: Цифри можуть бути від 1 до 9.
// 1 буде першим словом (не 0).
// Якщо стрічка пуста - повернути пусту стрічку.
// Слова у вхідній стрічці будуть містити тільки валідні значення.

// sortString("g5et ski3lls on6 use1 your2 to4 7top");
// Результат: 'use1 your2 ski3lls to4 g5et on6 7top'

// sortString("");
// Результат: ''

// sortString("practic3 h4rder yo1u 2hould");
// Результат: 'yo1u 2hould practic3 h4rder'

////////////////////
// Рішення з регулярними виразами

// const sortString = (str) => {
//   return str
//     .split(" ")
//     .sort((a, b) => +/\d+/.exec(a) - +/\d+/.exec(b))
//     .join(" ");
// };

// console.log(sortString("g5et ski3lls on6 use1 your2 to4 7top")); // use1 your2 ski3lls to4 g5et on6 7top
// console.log(sortString(""));

const sortString = (str) => {
  return str
    .split(" ")
    .sort((a, b) => a - b)
    .join(" ");
};

console.log(sortString("g5et ski3lls on6 use1 your2 to4 7top")); // use1 your2 ski3lls to4 g5et on6 7top
console.log(sortString(""));
