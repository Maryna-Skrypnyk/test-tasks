// const x = 1;
// const x = "hello";
// console.log(x); // SyntaxError: Identifier 'x' has already been declared

// let b = 20;
// if (true) {
//   console.log(b); // ReferenceError: Cannot access 'b' before initialization
//   let b = 10;
// }

// const x;
// x = 1;
// console.log(x); // SyntaxError: Missing initializer in const declaration

// const MAX = 10;
// let amount = 0;
// while (amount++ < MAX) {
//   let sum = amount;
// }
// console.log(sum); // ReferenceError: sum is not defined

// const person = {
//   firstName: "bob",
//   showName() {
//     console.log(this.firstName);
//   },
// };

// person.showName(); // bob

// const foo = function (callback) {
//   callback();
// };

// foo(person.showName); // undefined

// console.log(foo(person.showName)); // undefined

// const person = {
//   age: 10,
//   setAge(newAge) {
//     this.age = newAge;
//   },
//   refreshAge(userId) {
//     fetchAgeFromDb(function (newAge) {
//       this.setAge(newAge);
//     });
//   },
// };

// function fetchAgeFromDb(cb) {
//   cb(20);
// }

// person.refreshAge();
// console.log(person.age); // TypeError: this.setAge is not a function

// const add = (a = 0, b = 10) => a + b;
// const sum = add(10);
// console.log(sum); // 20

// const sum = (...numbers) => numbers.reduce((acc, number) => acc + number, 2);
// const answer = sum(1, 5, 20, 10);
// console.log(answer); // 38

// const multiplyByValue = (value, base, ...numbers) => {
//   return numbers.map((number) => number * value + base);
// };
// console.log(multiplyByValue(2, 100, 1, 5, 20, 10)); // [ 102, 110, 140, 120 ]

// const names = ["bob", ...["donald"], "suzy", "lacy", ...["richard", "alex"]];
// console.log(names); // [ 'bob', 'donald', 'suzy', 'lacy', 'richard', 'alex' ]

// const min = Math.min(...[1, 5, -1, -10]);
// console.log(min); // -10

// const name = "bob";
// const age = 20;
// const obj = { name, age };
// console.log(obj); // {name: 'bob', age: 20}

// const confused = "no";
// const myKey = confused;
// const obj = {
//   [myKey]: false,
// };
// console.log(obj); // {no: false}

// const piece = {
//   x: 0,
//   y: 0,
//   move(x, y) {
//     this.x = x;
//     this.y = y;
//   },
// };
// piece.move(10, 10);
// console.log(piece); // {x: 10, y: 10, move: [Function: move]}

// const [first, , third] = "hello sweet world".split(" ");
// console.log(first, third); // hello world

// const {
//   name,
//   age,
//   gender = "m",
//   hairColor: color,
// } = {
//   name: "bob",
//   age: 20,
//   hairColor: "blue",
// };
// console.log(name, age, gender, color); // bob 20 m blue

// const dog = { name: "Poly" };
// function showDogName() {
//   console.log(this.name); // Poly
// }
// const boundShowDogName = showDogName.bind(dog);
// boundShowDogName();

// const userA = {
//   name: "Mango",
//   age: 5,
// };
// const userB = {
//   ...userA,
//   age: 10,
//   happy: true,
// };
// console.log(userB); // {name: "Mango", age: 10, happy: true}

// const fn = (arr, val) => arr.filter((el) => el > val);
// console.log(fn([1, 2, 3, 4, 5], 3)); // [4, 5]

// const fn = (arr) =>
//   arr.map((el) => {
//     const item = document.createElement("div");
//     item.textContent = el;
//     return item;
//   });
// console.log(fn(["html", "css", "js", "react"])); //
