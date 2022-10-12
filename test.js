// ///////////////////////
// // 1

// const num = [1, 2, 3];
// num[10] = 11;
// console.log(num);

// // A: [1, 2, 3, 7 x null, 11]
// // B: [1, 2, 3, 11]
// // C: [1, 2, 3, 7 x empty, 11] //
// // D: SyntaxError

// ///////////////////////
// // 2

// [
//   [0, 1],
//   [2, 3],
// ].reduce(
//   (acc, cur) => {
//     return acc.concat(cur);
//   },
//   [1, 2]
// );

// // Каким будет результат?
// // A: [0, 1, 2, 3, 1, 2]
// // B: [6, 1, 2]
// // C: [1, 2, 0, 1, 2, 3] //
// // D: [1, 2, 6]

// ///////////////////////
// // 3

// console.log(typeof typeof 1);

// // Что будет в консоли?
// // A: "number"
// // B: "string" //
// // C: "object"
// // D: "undefined"

// ///////////////////////
// // 4

// function sayHi() {
//   return (() => 0)();
// }
// typeof sayHi();

// // Каким будет результат?
// // A: "object"
// // B: "number" //
// // C: "function"
// // D: "undefined"

// ///////////////////////
// // 5

// const person = { name: "Lydia" };

// function sayHi(age) {
//   console.log(`${this.name} is ${age}`);
// }

// sayHi.call(person, 21);
// sayHi.bind(person, 21);

// // Что будет в консоли?
// // A: undefined is 21 Lydia is 21
// // B: function function
// // C: Lydia is 21 Lydia is 21
// // D: Lydia is 21 function //

// ///////////////////////
// // 6

// <div onclick="console.log('div')">
//   <p onclick="console.log('p')">Клікни мене!</p>
// </div>;

// // Что будет в консоли после клика по параграфу?
// // A: p div //
// // B: div p
// // C: p
// // D: div

// ///////////////////////
// // 7

// let we = 55;
// let result = we;

// setTimeout(() => {
//   we = 10;
// }, 1000);

// console.log(result);

// // 55
// // 1) Переменная we ссылается на значение 55.
// // 2) Переменная result ссылается на значение переменной we.
// // 3) Выводится значение переменной result в консоль, 55.
// // 4) *через секунду* У we меняется ссылка на другое значение, 10.

// ///////////////////////
// // 8

// [..."Lydia"];

// // Каким будет результат?
// // A: ["L", "y", "d", "i", "a"] //
// // B: ["Lydia"]
// // C: [[], "Lydia"]
// // D: [["L", "y", "d", "i", "a"]]

// ///////////////////////
// // 9 (1)

// const getTotalNumber = (num) => {
//   const arrStr = [...String(num)];
//   const number = arrStr.reduce((acc, num) => {
//     return (acc += Number(num));
//   }, 0);
//   const result =
//     [...String(number)].length > 1 ? getTotalNumber(number) : number;
//   return result;
// };

// console.log(getTotalNumber(942)); // 6
// console.log(getTotalNumber(132189)); // 6
// console.log(getTotalNumber(493193)); // 2
// console.log(getTotalNumber(16)); // 7

// ///////////////////////
// // 9 (2)

// function digital_root(n) {
//   return ((n - 1) % 9) + 1;
// }

// console.log(digital_root(942)); // 6
// console.log(digital_root(132189)); // 6
// console.log(digital_root(493193)); // 2
// console.log(digital_root(16)); // 7

// ///////////////////////
// // 10

// let person = { name: "Lydia" };
// const members = [person];
// person = null;

// console.log(members);
// // Каким будет результат?
// // A: null
// // B: [null]
// // C: [{}]
// // D: [{ name: "Lydia" }] // важливий порядок коду

// ///////////////////////
// // 11
// let farm = {
//   meat: 2,
//   eggs: 6,
//   milk: 3,
// };
// let [eggs, , milk] = Object.values(farm);
// alert(eggs); // 2

// /////////////////////////////
// // 13 - slice

// // Вивести число без знаку валюти

// const extractCurrencyValue = (str) => {
//   return str.slice(1);
// };

// console.log(extractCurrencyValue("$120")); // 120
// console.log(extractCurrencyValue("₴560")); // 560

// //////////////////////////////////
// // 14
// // Как удалить дубли из массива?
// // Используйте new Set() и spread оператор.

// const removeDuplicateItems = (arr) => [...new Set(arr)];

// console.log(removeDuplicateItems([42, "foo", 42, "foo", true, true])); // [ 42, 'foo', true ]

///////////////////////////////////
// 15
// Вивести з масиву унікальні елементи

const arr = [
  "php",
  "php",
  "css",
  "css",
  "script",
  "script",
  "html",
  "html",
  "java",
];

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates(arr)); // [php,css,script,html,java]
