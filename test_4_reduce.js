// // reduce 1: виведення в об'єкт кількості унікальних фруктів по ключу і значенню кількості

// const fruitBasket = [
//   "banana",
//   "cherry",
//   "orange",
//   "apple",
//   "cherry",
//   "orange",
//   "apple",
//   "banana",
//   "cherry",
//   "orange",
//   "fig",
// ];

// // 1 спосіб

// const count = fruitBasket.reduce((tally, fruit) => {
//   tally[fruit] = (tally[fruit] || 0) + 1;
//   return tally;
// }, {});

// // 2 спосіб

// const count2 = fruitBasket.reduce((tally, fruit) => {
//   if (!tally[fruit]) {
//     tally[fruit] = 1;
//   } else {
//     tally[fruit] = tally[fruit] + 1;
//   }
//   return tally;
// }, {});

// console.log(count); // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }
// console.log(count2); // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }

////////////////////////
// const array = [1, 2, 3, 3, 4, 4, 4, 5, 5, 5];
// // output: { '1': 1, '2': 1, '3': 2, '4': 3, '5': 3 }

// // 1
// const uniqueNumber = (arr) => {
//   return arr.reduce((acc, item) => {
//     acc[item] = (acc[item] || 0) + 1;
//     return acc;
//   }, {});
// };

// console.log(uniqueNumber(array));

// // 2
// const uniqueNumber = (arr) => {
//   return arr.reduce((acc, item) => {
//     if (!acc[item]) {
//       acc[item] = 1;
//     } else {
//       acc[item] = acc[item] + 1;
//     }
//     return acc;
//   }, {});
// };

// console.log(uniqueNumber(array));

// ////////////////////////

// // reduce 2: Сливаем массив воедино

// const data = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// // 1 спосіб (reduce-concat)

// const flat = data.reduce((total, amount) => {
//   return total.concat(amount);
// }, []);

// console.log(flat); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// // 2 спосіб (reduce-push)

// const flat2 = data.reduce((total, amount) => {
//   total.push(...amount);
//   return total;
// }, []);

// console.log(flat2); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// // 3 спосіб (spread-оператор)

// const flat3 = [].concat(...data);

// console.log(flat3); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// // 4 спосіб (toString-split-map):

// const arr = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

// const newArr = arr
//   .toString()
//   .split(",")
//   .map((item) => Number(item));

// console.log(arr.toString()); // 1,2,3,1,2,3,1,2,3
// console.log(arr.toString().split(",")); // ['1', '2', '3', '1', '2', '3', '1', '2', '3']
// console.log(newArr); // [1, 2, 3, 1, 2, 3, 1, 2, 3]

// ////////////////////////////

// // Отримати всі унікальні кольори в масиві об'єктів

// const data = [
//   { a: "happy", b: "robin", c: ["blue", "green"] },
//   { a: "tired", b: "panther", c: ["green", "black", "orange", "blue"] },
//   { a: "sad", b: "goldfish", c: ["green", "red"] },
// ];

// // 1 спосіб

// const arrColors = data.reduce((acc, item) => {
//   item.c.forEach((color) => {
//     if (acc.indexOf(color) === -1) {
//       acc.push(color);
//     }
//   });
//   return acc;
// }, []);

// console.log(allColors);

// // 2 спосіб

// const getColors = (arr) =>
//   arr.reduce((allColors, item) => {
//     allColors.push(...item.c);
//     return allColors;
//   }, []);

// const allArrColors = getColors(data);

// console.log(allArrColors);

// // Виведення масиву унікальних кольорів

// const arrUniqueColors = allArrColors.reduce((acc, color) => {
//   if (!acc.includes(color)) {
//     acc.push(color);
//   }
//   return acc;
// }, []);

// console.log(arrUniqueColors);

// // виведення підрахунку кількості унікальних кольорів в об'єкт
// // 1 спосіб

// const countColors = allArrColors.reduce((acc, color) => {
//   if (!acc.hasOwnProperty(color)) {
//     acc[color] = 0;
//   }
//   acc[color] += 1;
//   return acc;
// }, {});

// console.log(countColors);

// // 2 спосіб

// const countColors2 = allArrColors.reduce((acc, color) => {
//   acc[color] = (acc[color] || 0) + 1;
//   return acc;
// }, {});

// console.log(countColors2);

// ////////////////
// // Клонування масиву зі збереженням вихідного масиву

// const vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];
// function arrayClone(arr) {
//   // return arr.slice();
//   return [...arr];
// }

// const arr1 = arrayClone(vegetables);
// console.log(arr1); // ['Капуста', 'Репа', 'Редиска', 'Морковка']

// ////////////////
// // Преобразование массива в строку
// const vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];

// const str1 = vegetables.toString();
// const str2 = vegetables.join(", ");
// const str3 = "".concat(vegetables);
// const str4 = "" + vegetables;

// console.log(str1); // "Капуста,Репа,Редиска,Морковка"
// console.log(str2); // "Капуста, Репа, Редиска, Морковка"
// console.log(str3); // "Капуста,Репа,Редиска,Морковка"
// console.log(str4); // "Капуста,Репа,Редиска,Морковка"

// ///////////////////////
// // 12 Масив в інший масив унікальних значень по спаданню їх кількості
// // reduce, sort, Object.entries(obj),
// const classNames = [
//   "header",
//   "menu",
//   "menu-item",
//   "menu-item",
//   "menu-item",
//   "footer",
//   "menu",
//   "link",
//   "link",
//   "link",
//   "link",
// ];
// // result = ['link', 'menu-item', 'menu', 'header', 'footer]

// const getUniqueClassNames = (arr) => {
//   const uniqueObjectClassNames = arr.reduce((acc, item) => {
//     acc[item] = (acc[item] || 0) + 1;
//     return acc;
//   }, {});
//   console.log(uniqueObjectClassNames); // { header: 1, menu: 2, 'menu-item': 3, footer: 1, link: 4 }

//   return Object.entries(uniqueObjectClassNames) // [['header', 1], ['menu', 2], ...[...]]
//     .sort((a, b) => {
//       return b[1] - a[1]; // [['link', 4], ['menu-item', 3], ['menu', 2], ['header', 1], ['footer'], 1]
//     })
//     .reduce((acc, item) => {
//       acc.push(item[0]);
//       return acc;
//     }, []);
// };

// console.log(getUniqueClassNames(classNames)); // [ 'link', 'menu-item', 'menu', 'header', 'footer' ]

///////////////////////////////////
// Вивести з масиву унікальні елементи - reduce

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
  return arr.reduce((acc, item) => {
    !acc.includes(item) ? acc.push(item) : null;
    return acc;
  }, []);
}

console.log(removeDuplicates(arr)); // [php,css,script,html,java]

//////////////
