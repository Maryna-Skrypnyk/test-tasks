//1
// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise
// function myFunction(a, b) {
//   return a.getDay() === b.getDay();
// }

//2
// function myFunction(a, b) {
//   return (
//     a.getFullYear() === b.getFullYear() &&
//     a.getDate() === b.getDate() &&
//     a.getMonth() === b.getMonth()
//   );
// }

// console.log(myFunction(new Date("2000/01/01"), new Date("2000/01/01"))); // true
// console.log(myFunction(new Date("2000/01/01"), new Date("2000/01/02"))); // false
// console.log(myFunction(new Date("2001/01/01"), new Date("2000/01/01"))); // false
// console.log(myFunction(new Date("2000/11/01"), new Date("2000/01/01"))); // false

//3
// Write a function that takes two date instances as argument
// It should return true if the difference between the dates is less than or equal to 1 hour
// It should return false otherwise
// function myFunction(a, b) {
//   const res = (b.getTime() - a.getTime()) / 1000 / 60 / 60;
//   return Math.abs(res) <= 1;
// }

// console.log(
//   myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00"))
// ); // true
// console.log(
//   myFunction(new Date("2000/01/01 09:00:00"), new Date("2000/01/01 08:45:00"))
// ); // true
// console.log(
//   myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 09:45:00"))
// ); // false
// console.log(
//   myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 09:00:00"))
// ); // true

// console.log(
//   myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 06:00:00"))
// ); // true

//4
// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates
// function myFunction(a, b) {
//   const res = (a.getTime() - b.getTime()) / 1000 / 60 / 60 / 24;
//   return Math.abs(res);
// }

// console.log(myFunction(new Date("2020-06-11"), new Date("2020-06-01"))); // 10
// console.log(myFunction(new Date("2000-01-01"), new Date("2020-06-01"))); // 7457

//5
// function myFunction(a, b) {
//   return {
//     hrs: Math.abs(a.getHours() - b.getHours()),
//     min: Math.abs(a.getMinutes() - b.getMinutes()),
//     sec: Math.abs(a.getSeconds() - b.getSeconds()),
//   };
// }

// console.log(
//   myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:10"))
// ); // { hrs: 0, min: 45, sec: 10 }
// console.log(
//   myFunction(new Date("2000/01/01 09:50:23"), new Date("2000/01/01 08:00:00"))
// ); // { hrs: 1, min: 50, sec: 23 }
// console.log(
//   myFunction(new Date("2000/01/01 11:04:12"), new Date("2000/01/01 08:00:00"))
// ); // { hrs: 3, min: 4, sec: 12 }

//6
// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise
// function myFunction(a, b) {
//   return a.getTime() === b.getTime();
// }

// console.log(myFunction(new Date("2000/01/01"), new Date("2000/01/01"))); // true
// console.log(myFunction(new Date("2000/01/01"), new Date("2000/01/02"))); // false
// console.log(myFunction(new Date("2001/01/01"), new Date("2000/01/01"))); // false
// console.log(myFunction(new Date("2000/11/01"), new Date("2000/01/01"))); // false

//7
// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates
// function myFunction(a, b) {
//   return Math.abs(a.getTime() - b.getTime()) / 1000 / 60 / 60 / 24;
// }

// console.log(myFunction(new Date("2020-06-11"), new Date("2020-06-01"))); // 10
// console.log(myFunction(new Date("2000-01-01"), new Date("2020-06-01"))); // 7457

//8
// Write a function that takes as argument a date instance (a) and a number (b)
// It should add b days to a and return the number of milliseconds since January 1, 1970, 00:00:00 UTC
// function myFunction(a, b) {
//   return a.getTime() + b * 24 * 60 * 60 * 1000;
// }

// console.log(myFunction(new Date(Date.UTC(2000, 01, 01)), 31)); // 952041600000
// console.log(myFunction(new Date(Date.UTC(2000, 01, 01)), 10)); // 950227200000
// console.log(myFunction(new Date(Date.UTC(2000, 02, 28)), 2)); // 954374400000

//9
//Clock shows h hours, m minutes and s seconds after midnight.
//Write a function which returns the time since midnight in milliseconds.
// function past(h, m, s) {
//   // return s * 1000 + m * 60 * 1000 + h * 60 * 60 * 1000;
//   return (s + 60 * (m + h * 60)) * 1000;
// }

// console.log(past(0, 1, 1)); // 61000

//10
