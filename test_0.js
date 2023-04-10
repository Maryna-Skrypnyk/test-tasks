//1(string, array)
// 1)
// function myFunction(a, b) {
//   return b.toLowerCase().split("").filter((el) => el === a).length;
// }

// 2)
// function myFunction(a, b) {
//   return b.toLowerCase().split(a).length - 1;
// }

// console.log(myFunction("o", "Close the windows")); // 2
// console.log(myFunction("m", "Maryna is my name")); // 3

// 2(object)
// Write a function that takes an object as argument
// In some cases the object contains other objects with some deeply nested properties
// Return the property 'b' of object 'a' inside the original object if it exists
// If not, return undefined
// function myFunction(obj) {
//   return obj?.a?.b;
// }

// console.log(myFunction({ a: 1 })); // undefined
// console.log(myFunction({ a: { b: { c: 3 } } })); // {c:3}
// console.log(myFunction({ b: { a: 1 } })); // undefined
// console.log(myFunction({ a: { b: 2 } })); // 2

//3(object, rest)
// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// It should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'
//1)
// function myFunction(x, y) {
//   return { ...y, d: y.b, ...x };
// }
//2)
// function myFunction(x, y) {
//   const { b, ...rest } = y;
//   return { ...x, ...rest, d: b };
// }

// console.log(myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })); // { a: 1, b: 2, c: 3, e: 5, d: 4}
// console.log(myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })); // { a: 5, b: 4, c: 3, e: 2, d: 1}

//4(object)
// function myFunction(obj) {
// for (key in obj) {
//   obj[key] = obj[key] === "" || obj[key] === " " ? null : obj[key];
// }
// return { ...obj };
// }

// console.log(myFunction({ a: "a", b: "b", c: "" })); // { a: "a", b: "b", c: null }
// console.log(myFunction({ a: "", b: "b", c: " ", d: "d" })); // { a: null, b: "b", c: null, d: 'd }
// console.log(myFunction({ a: "a", b: "b", c: " ", d: "" })); // { a: "a", b: "b", c: null, d: null }

//5(object, array, reduce, cycle)
//1)
// function myFunction(a, b) {
//   let obj = {};
//   for (let i = 0; i < a.length; i += 1) {
//     obj[a[i]] = b[i];
//   }
//   return obj;
// }
//2)
// function myFunction(a, b) {
//   return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
// }

// console.log(myFunction(["a", "b", "c"], [1, 2, 3])); // {a: 1, b: 2, c: 3}
// console.log(myFunction(["w", "x", "y", "z"], [10, 9, 5, 2])); // {w: 10, x: 9, y: 5, z: 2}
// console.log(myFunction([1, "b"], ["a", 2])); // {1: 'a', b: 2},

//6(array, find)
// function myFunction(arr) {
//   const arrayNum = arr.map((el) => el.length);
//   return arr.find((el) => el.length === Math.max(...arrayNum));
// }

// console.log(myFunction(["help", "me"])); // help
// console.log(myFunction(["I", "need", "candy"])); // candy

//7(object, array, reduce)
// function myFunction(a) {
// return a.reduce((acc, item) => {
//   acc[item] = (acc[item] || 0) + 1;
//   return acc;
// }, {});
// }

// console.log(myFunction([1, 2, 2, 3])); // {1: 1, 2: 2, 3: 1}
// console.log(myFunction([9, 9, 9, 99])); // {9: 3, 99: 1}
// console.log(myFunction([4, 3, 2, 1])); // {1: 1, 2: 1, 3: 1, 4: 1}

//8(object, array)
// function myFunction(arr, str) {
//   return arr.map((el) => ({ ...el, continent: str }));
// }

// console.log(
//   myFunction(
//     [
//       { city: "Tokyo", country: "Japan" },
//       { city: "Bangkok", country: "Thailand" },
//     ],
//     "Asia"
//   )
// ); // [{city: "Tokyo", country: "Japan", continent: "Asia"}, {city: "Bangkok", country: "Thailand", continent: "Asia"}]
// console.log(
//   myFunction(
//     [
//       { city: "Stockholm", country: "Sweden" },
//       { city: "Paris", country: "France" },
//     ],
//     "Europe"
//   )
// ); // [{city: "Stockholm", country: "Sweden", continent: "Europe"}, {city: "Paris", country: "France", continent: "Europe"}]

//9(array, flat)
// function myFunction(...arrays) {
//   return [...arrays.flat()];
// }

// console.log(myFunction([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
// console.log(myFunction(["a", "b", "c"], [4, 5, 6])); // ['a', 'b', 'c', 4, 5, 6]
// console.log(myFunction([true, true], [1, 2], ["a", "b"])); // [true, true, 1, 2, 'a', 'b']

//10(array, reduce)
// function myFunction(a, b) {
//   return a.filter((el) => el > b).reduce((acc, el) => (acc += el), 0);
// }

// console.log(myFunction([1, 2, 3, 4, 5, 6, 7], 2)); // 25
// console.log(myFunction([-10, -11, -3, 1, -4], -3)); // 1
// console.log(myFunction([78, 99, 100, 101, 401], 99)); // 602

//11(object, cycle)
//1)
// function myFunction(obj) {
//   const keys = Object.keys(obj);
//   const values = Object.values(obj);
//   const newObj = {};
//   for (let i = 0; i < keys.length; i += 1) {
//     newObj[values[i]] = keys[i];
//   }
//   return newObj;
// }
//2)
// function myFunction(obj) {
//   const arr = Object.entries(obj);
//   const newObj = {};
//   for (let i = 0; i < arr.length; i += 1) {
//     newObj[arr[i][1]] = arr[i][0];
//   }
//   return newObj;
// }
//3)
// function myFunction(obj) {
//   const keys = Object.keys(obj);
//   const values = Object.values(obj);
//   return values.reduce((acc, el, i) => ({ ...acc, [el]: keys[i] }), {});
// }

// console.log(myFunction({ z: "a", y: "b", x: "c", w: "d" })); // {a: "z", b: "y", c: "x", d: "w"}
// console.log(myFunction({ 2: "a", 4: "b", 6: "c", 8: "d" })); // {a: "2", b: "4", c: "6", d: "8"}
// console.log(myFunction({ a: 1, z: 24 })); // {1: 'a', 24: 'z'}

//12(array)
// function myFunction(arr) {
//   return arr.every((el) => el === arr[0]);
// }

// console.log(myFunction([true, true, true, true])); // true
// console.log(myFunction(["test", "test", "test"])); // true
// console.log(myFunction([1, 1, 1, 2])); // false
// console.log(myFunction(["10", 10, 10, 10])); // false

//13(array, string)
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting
// function myFunction(a) {
//   return a
//     .toString()
//     .split("")
//     .map((el) => Number(el));
// }

// console.log(myFunction(10)); // [1, 0]
// console.log(myFunction(931)); // [9, 3, 1]
// console.log(myFunction(193278)); // [1, 9, 3, 2, 7, 8]

//14(array)
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array
// function myFunction(a, b) {
//   let newArr = [...a];
//   b.forEach((el) => {
//     if (!a.includes(el)) {
//       newArr.push(el);
//     }
//     return newArr;
//   });
//   return newArr.sort((a, b) => a - b);
// }

// console.log(myFunction([1, 2, 3], [3, 4, 5])); // [ 1, 2, 3, 4, 5 ]
// console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])); // [ -11, -10, 5, 22, 41,  42, 333]

//15(object)
// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}
// function myFunction(arr) {
//   return arr.reduce((acc, el) => {
//     const keyLetter = el.charAt(0).toLowerCase();
//     const arrInObject = acc[keyLetter] || (acc[keyLetter] = []);
//     if (!acc[keyLetter].includes(el)) {
//       arrInObject.push(el);
//     }
//     return acc;
//   }, {});
// }

// console.log(myFunction(["Alf", "Alice", "Ben", "Alice"])); // { a: ['Alf', 'Alice'], b: ['Ben']}
// console.log(myFunction(["Ant", "Bear", "Bird"])); // { a: ['Ant'], b: ['Bear', 'Bird']}
// console.log(myFunction(["Berlin", "Paris", "Prague"])); // { b: ['Berlin'], p: ['Paris', 'Prague']}

//16(number)
// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y
// function myFunction(x, y) {
// if (x % y === 0) {
//   return x;
// } else {
//   while (x % y !== 0) {
//     x++;
//   }
//   return x;
// }
// }

// console.log(myFunction(1, 23)); // 23
// console.log(myFunction(23, 23)); // 23
// console.log(myFunction(7, 3)); // 9
// console.log(myFunction(-5, 7)); // 0

//17(string)
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word
// function myFunction(str) {
//   return str
//     .split("")
//     .map((el) => el.charCodeAt(0) + 1)
//     .map((el) => String.fromCharCode(el))
//     .join("");
// }

// console.log(myFunction("bnchmf")); // 'coding'
// console.log(myFunction("bgddrd")); // 'cheese'
// console.log(myFunction("sdrshmf")); // 'testing'

//18(string)
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc
//1)
// function myFunction(a, b) {
//   const stringB = b
//     .split("")
//     .reverse()
//     .filter((el) => el !== "%")
//     .join("");

//   const stringA =
//     a.charAt(0).toUpperCase() +
//     a
//       .slice(1)
//       .split("")
//       .filter((el) => el !== "%")
//       .join("");

//   const result = stringA.concat(stringB);
//   return result;
// }

// console.log(myFunction("java", "tpi%rcs")); // 'Javascript'
// console.log(myFunction("c%ountry", "edis")); // 'Countryside'
// console.log(myFunction("down", "nw%ot")); // 'Downtown'

//19 (string)
// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string
// function myFunction(a, b) {
// const arrA = a.split("");
// for (let i = arrA.length - 3; i > 0; i -= 3) {
//   arrA.splice(i, 0, b);
// }
// return arrA.join("");
// }

// console.log(myFunction("1234567", ".")); // '1.234.567'
// console.log(myFunction("abcde", "$")); // 'ab$cde'
// console.log(myFunction("zxyzxyzxyzxyzxyz", "w")); // 'zwxyzwxyzwxyzwxyzwxyz'

//20(object)
// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in
// function myFunction(obj) {
//   let newObj = {};
//   for (key in obj) {
//     if (key === "size") {
//       newObj.size = obj[key] + "cm";
//     }
//     if (key === "weight") {
//       newObj.weight = obj[key] + "kg";
//     }
//     if (key === "fn") {
//       newObj.fn = obj[key];
//     }
//     if (key === "ln") {
//       newObj.ln = obj[key];
//     }
//   }

//   return newObj;
// }

// console.log(
//   myFunction({ fn: "Lisa", ln: "Müller", age: 17, size: 175, weight: 67 })
// ); // {fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}
// console.log(
//   myFunction({
//     fn: "Martin",
//     ln: "Harper",
//     age: 26,
//     email: "martin.harper@test.de",
//     weight: 102,
//   })
// ); // {fn: 'Martin', ln: 'Harper', weight: '102kg'}
// console.log(
//   myFunction({ fn: "Andrew", ln: "Harper", age: 81, size: 175, weight: 71 })
// ); // {fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}
// console.log(
//   myFunction({
//     fn: "Matthew",
//     ln: "Müller",
//     age: 19,
//     email: "matthew@mueller.de",
//   })
// ); // {fn: 'Matthew', ln: 'Müller'}

//21(number)
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number
// function myFunction(a) {
//   return Number(a.toFixed(2));
// }

// console.log(myFunction(2.12397)); // 2.12
// console.log(myFunction(3.136)); // 3.14
// console.log(myFunction(1.12397)); // 1.12
// console.log(myFunction(26.1379)); // 26.14

//22(array, cycle)
// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array
// function myFunction(a, n) {
//   let newArr = [];
//   for (let i = n - 1; i < a.length; i += n) {
//     newArr.push(a[i]);
//   }
//   return newArr;
// }

// console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); // [3, 6, 9]
// console.log(myFunction([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5)); // [6, 1]
// console.log(myFunction([7, 2, 1, 6, 3, 4, 5, 8, 9, 10], 2)); // [2, 6, 4, 8, 10]

//23(number)
// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number
// function myFunction(a) {
//   for (let i = 2; i < a; i += 1) {
//     if (a % i === 0) {
//       return myFunction((a += 1));
//     }
//   }

//   return a;
// }

// console.log(myFunction(38)); // 41
// console.log(myFunction(7)); // 7
// console.log(myFunction(115)); // 127
// console.log(myFunction(2000)); // 2003

//24(number, array)
// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max
// function myFunction(min, max) {
// let arr = [];
// for (let i = min; i <= max; i += 1) {
//   arr.push(i);
// }
// return arr;
// }

// console.log(myFunction(2, 10)); // [2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(myFunction(1, 3)); // [1, 2, 3]
// console.log(myFunction(-5, 5)); // [-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]
// console.log(myFunction(2, 7)); // [2, 3, 4, 5, 6, 7]

//25(number)
// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false
// function myFunction(a) {
//   return Number.isInteger(a);
// }

// console.log(myFunction(4)); // true
// console.log(myFunction(1.123)); // false
// console.log(myFunction(1048)); // true
// console.log(myFunction(10.48)); // false

//26(array)
// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result
// function myFunction(arr) {
//   const newArr = [...arr];
//   return newArr.sort();
// }

// console.log(myFunction(["b", "c", "d", "a"])); // ['a', 'b', 'c', 'd']
// console.log(myFunction(["z", "c", "d", "a", "y", "a", "w"])); // ['a', 'a', 'c', 'd', 'w', 'y', 'z']

//27(array)
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of 'a'
// Return the resulting array
// function myFunction(a) {
//   return a.splice(-3);
// }

// console.log(myFunction([1, 2, 3, 4])); // [2, 3, 4]
// console.log(myFunction([5, 4, 3, 2, 1, 0])); // [2, 1, 0]
// console.log(myFunction([99, 1, 1])); // [99, 1, 1]

//28(string)
// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
// function myFunction(a, n) {
//   return a[n - 1];
// }

// console.log(myFunction("abcd", 1)); // 'a'
// console.log(myFunction("zyxbwpl", 5)); // 'w'
// console.log(myFunction("gfedcba", 3)); // 'e'

//29(number)
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order
// function myFunction(a, b, c, d, e, f) {
//   return Math.pow(((a + b - c) * d) / e, f);
// }

// console.log(myFunction(6, 5, 4, 3, 2, 1)); // 10.5
// console.log(myFunction(6, 2, 1, 4, 2, 3)); // 2744
// console.log(myFunction(2, 3, 6, 4, 2, 3)); // -8

//30(object)
// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string
// function myFunction(obj, key) {
//   for (names in obj) {
//     if (names === key) {
//       return obj[names];
//     }
//   }
// }

// console.log(myFunction({ continent: "Asia", country: "Japan" }, "continent")); // 'Asia'
// console.log(myFunction({ country: "Sweden", continent: "Europe" }, "country")); // 'Sweden'

//31(array, filter, reduce)
// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum
// function myFunction(a, b) {
//   return a.filter((el) => el > b).reduce((acc, el) => (acc += el), 0);
// }

// console.log(myFunction([1, 2, 3, 4, 5, 6, 7], 2)); // 25
// console.log(myFunction([-10, -11, -3, 1, -4], -3)); // 1
// console.log(myFunction([78, 99, 100, 101, 401], 99)); // 602

//32(object)
// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object
// function myFunction(a, b) {
//   return {
//     [a]: b,
//   };
// }

// console.log(myFunction("a", "b")); // {a:'b'}
// console.log(myFunction("z", "x")); // {z:'x'}
// console.log(myFunction("b", "w")); // {b:'w'}\

//33(string)
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
// function myFunction(a) {
//   return a.slice(0, 3);
// }

// console.log(myFunction("abcdefg")); // 'abc'
// console.log(myFunction("1234")); // '123'
// console.log(myFunction("fgedcba")); // 'fge'

//34(object)
// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b'
// Return false otherwise
// Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined
// But the property itself exists
// function myFunction(a, b) {
// const arr = Object.keys(a);
// return arr.some((el) => el === b);
// }

// console.log(myFunction({ a: 1, b: 2, c: 3 }, "b")); // true
// console.log(myFunction({ x: "a", y: "b", z: "c" }, "a")); // false
// console.log(myFunction({ x: "a", y: "b", z: undefined }, "z")); // true

//35(string)
// function myFunction(a) {
//   //   return a.split("").splice(3).join("");
//   return a.slice(3);
// }

// console.log(myFunction("abcdefg")); // 'defg'
// console.log(myFunction("1234")); // '4'
// console.log(myFunction("fgedcba")); // 'dcba'

//36(array)
// function myFunction(arr) {
// const sum = arr.reduce((acc, el) => (acc += el), 0);
// return sum / arr.length;
// }

// console.log(myFunction([10, 100, 40])); // 50
// console.log(myFunction([10, 100, 1000])); // 370
// console.log(myFunction([-50, 0, 50, 200])); // 50

//37(object)
// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b', but only if it has a truthy value
// In other words, it should not be null or undefined or false
// Return false otherwise
// function myFunction(a, b) {
//   return Object.entries(a).some((el) => el[0] === b && el[1]);
// }

// console.log(myFunction({ a: 1, b: 2, c: 3 }, "b")); // true
// console.log(myFunction({ x: "a", y: null, z: "c" }, "y")); // false
// console.log(myFunction({ x: "a", b: "b", z: undefined }, "z")); // false

//38(object, reduce, array)
// Write a function that takes an object (a) as argument
// Return the sum of all object values
// function myFunction(a) {
//   return Object.values(a).reduce((acc, el) => (acc += el), 0);
// }

// console.log(myFunction({ a: 1, b: 2, c: 3 })); // 6
// console.log(myFunction({ j: 9, i: 2, x: 3, z: 4 })); // 18
// console.log(myFunction({ w: 15, x: 22, y: 13 })); // 50

//39(array, object)
// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array
// function myFunction(arr, num) {
//   let newArr = [...arr];
//   if (num < 6) {
//     newArr.unshift(0);
//   } else {
//     newArr.unshift(num);
//   }
//   return newArr;
// }

// console.log(myFunction([1, 2, 3], 6)); // [6,1,2,3]
// console.log(myFunction(["a", "b"], 2)); // [0,'a','b']
// console.log(myFunction([null, false], 11)); // [11,null,false]

//40(object)
// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'
// function myFunction(obj) {
//   const { b, ...rest } = obj;
//   return { ...rest };
// }

// console.log(myFunction({ a: 1, b: 7, c: 3 })); // { a: 1, c: 3 }
// console.log(myFunction({ b: 0, a: 7, d: 8 })); // { a: 7, d: 8 }
// console.log(myFunction({ e: 6, f: 4, b: 5, a: 3 })); // { e: 6, f: 4, a: 3 }

//41(string)
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation
// function myFunction(a, b) {
//   if (a.includes(b)) {
//     return b.concat(a);
//   }
//   return a.concat(b);
// }

// console.log(myFunction("cheese", "cake")); // 'cheesecake'
// console.log(myFunction("lips", "s")); // 'slips'
// console.log(myFunction("Java", "script")); // 'Javascript'
// console.log(myFunction(" think, therefore I am", "I")); // 'I think, therefore I am'

//42(number)
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value
// function myFunction(a, b) {
//   const number = a < b ? a / b : a * b;
//   return number;
// }

// console.log(myFunction(10, 100)); // 0.1
// console.log(myFunction(90, 45)); // 4050
// console.log(myFunction(8, 20)); // 0.4
// console.log(myFunction(2, 0.5)); // 1

//43(array, sort, object)
// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array
// function myFunction(arr) {
//   return [...arr].sort((a, b) => a.b - b.b);
// }

// console.log(
//   myFunction([
//     { a: 1, b: 2 },
//     { a: 5, b: 4 },
//   ])
// ); // [{a:1,b:2},{a:5,b:4}]
// console.log(
//   myFunction([
//     { a: 2, b: 10 },
//     { a: 5, b: 4 },
//   ])
// ); // [{a:5,b:4},{a:2,b:10}]
// console.log(
//   myFunction([
//     { a: 1, b: 7 },
//     { a: 2, b: 1 },
//   ])
// ); // [{a:2,b:1},{a:1,b:7}]

//44(array)
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result
// function myFunction(a) {
//   return a.slice(3);
// }

// console.log(myFunction([1, 2, 3, 4])); // [4]
// console.log(myFunction([5, 4, 3, 2, 1, 0])); // [2, 1, 0]
// console.log(myFunction([99, 1, 1])); // []

//45(string)
// Write a function that accepts an integer n and a string s as parameters,
// and returns a string of s repeated exactly n times.
// function myFunction(n, s) {
//1
//   let resultString = "";
//   for (let i = 0; i < n; i += 1) {
//     resultString += s;
//   }
//     return resultString;
//2
//   return s.repeat(n);
// }

// console.log(myFunction(6, "I")); // "IIIIII"
// console.log(myFunction(5, "Hello")); // "HelloHelloHelloHelloHello"

//46(array, string)
// function fakeBin(x) {
//   let arr = x.split("");
//   console.log(arr);
//   return arr
//     .map((el) => {
//       el.replace();
//     })
//     .join("");
// }

// console.log(fakeBin("45385593107843568")); // '01011110001100111'

//47(array, string)
// String.prototype.toJadenCase = function () {
//   return this
//     .split(" ")
//     .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
//     .join(" ");
// };

// const str = "How can mirrors be real if our eyes aren't real";

// console.log(str.toJadenCase()); // 'How Can Mirrors Be Real If Our Eyes Aren\'t Real'

//48(string, Set, array)
//1)
// function isIsogram(str) {
//   const obj = str.split("").reduce((acc, el) => {
//     acc[el.toLowerCase()] = (acc[el.toLowerCase()] || 0) + 1;
//     return acc;
//   }, {});
//   return str.length === Object.keys(obj).length;
// }

//2)
// function isIsogram(str) {
//   return new Set(str.toLowerCase()).size === str.length;
// }

// console.log(isIsogram("Dermatoglyphics")); // true
// console.log(isIsogram("isogram")); // true
// console.log(isIsogram("aba")); // false
// console.log(isIsogram("moOse")); // false
// console.log(isIsogram("isIsogram")); // false
// console.log(isIsogram("")); // true

//49()
//1)
// function getCount(str) {
//   const arrVowels = str.match(/[aeiou]/gi);
//   if (arrVowels) {
//     return arrVowels.length;
//   } else return 0;
// }

//2)
// function getCount(str) {
//   return (str.match(/[aeiou]/gi) || []).length;
// }

// console.log(getCount("Vowels Count Tests")); // 5
// console.log(getCount("abracadabra")); // 5
// console.log(getCount("pear tree")); // 4
// console.log(getCount("my pyx")); //

//50(Math, number)
//You might know some pretty large perfect squares. But what about the NEXT one?
//Complete the findNextSquare method that finds the next integral perfect square
//after the one passed as a parameter.Recall that an integral perfect square
//is an integer n such that sqrt(n) is also an integer.
//If the parameter is itself not a perfect square then -1 should be returned.
//You may assume the parameter is non - negative.
//1)
// function findNextSquare(sq) {
//   if (Math.sqrt(sq) !== Math.ceil(Math.sqrt(sq))) {
//     return -1;
//   }
//   return Math.pow(Math.sqrt(sq) + 1, 2);
// }
//2)
// function findNextSquare(sq) {
//   return Math.sqrt(sq) % 1 === 0 ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
// }

// console.log(findNextSquare(121)); // 144
// console.log(findNextSquare(625)); // 676
// console.log(findNextSquare(114)); // -1
// console.log(findNextSquare(319225)); // 320356
// console.log(findNextSquare(15241383936)); // 15241630849
// console.log(findNextSquare(155)); // -1
// console.log(findNextSquare(342786627)); // -1

//51(binary, number)
//Implement a function that adds two numbers together and returns their sum in binary.
//The conversion can be done before, or after the addition.
//The binary number returned should be a string.
//1)
// function addBinary(a, b) {
//   let sum = a + b;
//   let binary = "";
//   while (sum > 0) {
//     binary = (sum % 2) + binary;
//     sum = Math.floor(sum / 2);
//   }
//   return binary;
// }
//2)
// function addBinary(a, b) {
//   return (a + b).toString(2);
// }

// console.log(addBinary(1, 1)); // 10
// console.log(addBinary(5, 9)); // 1110
// console.log(addBinary(1, 2)); // 11
// console.log(addBinary(0, 0)); // 0

//52(numbers, triangle, odd)
//Given the triangle of consecutive odd numbers:
// function rowSumOddNumbers(n) {
//   return Math.pow(n, 3);
// }

// console.log(rowSumOddNumbers(1)); // 1
// console.log(rowSumOddNumbers(42)); // 74088
// console.log(rowSumOddNumbers(3)); // 27

//53(number, string)
//Your task is to write a function which returns the sum
//of following series upto nth term(parameter).
// function SeriesSum(n) {
//   let arr = [];
//   let minNum = 1;
//   for (let i = 0; i < n; i += 1) {
//     arr.push(1 / minNum);
//     minNum += 3;
//   }
//   return arr.reduce((acc, el) => (acc += el), 0).toFixed(2);
// }

// console.log(SeriesSum(1)); // "1.00"
// console.log(SeriesSum(2)); // "1.25"
// console.log(SeriesSum(3)); // "1.39"
// console.log(SeriesSum(4)); // "1.49"
// console.log(SeriesSum(0)); // "0"

//54(numbers, population)
//In a small town the population is p0 = 1000 at the beginning of a year.
//The population regularly increases by 2 percent per year and
//moreover 50 new inhabitants per year come to live in the town.
//How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

//At the end of the first year there will be:
//1000 + 1000 * 0.02 + 50 => 1070 inhabitants

//At the end of the 2nd year there will be:
//1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

//At the end of the 3rd year there will be:
//1141 + 1141 * 0.02 + 50 => 1213

//It will need 3 entire years.

//p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)
//the function nb_year should return n number of entire years needed to get a population greater
//or equal to p.
//aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

//Examples:
//nb_year(1500, 5, 100, 5000) -> 15
//nb_year(1500000, 2.5, 10000, 2000000) -> 10
//Note:
//Don't forget to convert the percent parameter as a percentage
//in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

// function nbYear(p0, percent, aug, p) {
//   let years = 0;
//   while (p0 <= p) {
//     p0 = p0 + p0 * (percent / 100) + aug;
//     years += 1;
//   }
//   return years;
// }

// function nbYear(p0, percent, aug, p) {
//   let years = 0;
//   for (years; p0 <= p; years += 1) {
//     p0 += p0 * (percent / 100) + aug;
//   }
//   return years;
// }

// function nbYear(p0, percent, aug, p) {
//   //   let arrPopulationEachYear = [];
//   //   for (p0; p0 < p; p0 += (p0 * percent) / 100 + aug) {
//   //     currPopulation = p0 + (p0 * percent) / 100 + aug;
//   //     arrPopulationEachYear.push(currPopulation);
//   //   }
//   //     return arrPopulationEachYear.length;

//   let population = 0;
//   let countYear = 0;
//   while (population < p) {
//     population = Math.floor(p0 + p0 * (percent / 100) + aug);
//     p0 = population;
//     countYear++;
//   }
//   return countYear;
// }

// console.log(nbYear(1500, 5, 100, 5000)); // 15
// console.log(nbYear(1500000, 2.5, 10000, 2000000)); // 10
// console.log(nbYear(1500000, 0.25, 1000, 2000000)); // 94
// console.log(nbYear(1500, 1, 50, 1550)); // 1

//55(array, reduce, bus/people)
//There is a bus moving in the city, and it takes and drop some people in each bus stop.
//You are provided with a list (or array) of integer pairs.
//Elements of each pair represent number of people get into bus(The first item) and
//number of people get off the bus(The second item) in a bus stop.
//Your task is to return number of people who are still in the bus
//after the last bus station(after the last array).
//Even though it is the last bus stop, the bus is not empty and some people are still in the bus,
//and they are probably sleeping there: D
//Take a look on the test cases.
//Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0.
//So the return integer can't be negative.
//The second value in the first integer array is 0, since the bus is empty in the first bus stop.

// var number = function (busStops) {
//   return busStops.reduce((acc, el) => {
//     acc += el[0] - el[1];
//     return acc;
//   }, 0);
// };

// console.log(
//   number([
//     [10, 0],
//     [3, 5],
//     [5, 8],
//   ])
// ); // 5
// console.log(
//   number([
//     [3, 0],
//     [9, 1],
//     [4, 10],
//     [12, 2],
//     [6, 1],
//     [7, 10],
//   ])
// ); // 17
// console.log(
//   number([
//     [3, 0],
//     [9, 1],
//     [4, 8],
//     [12, 2],
//     [6, 1],
//     [7, 8],
//   ])
// ); // 21
// console.log(number([[0, 0]])); // 0

//56()
//Given an array of integers.
//Return an array, where the first element is the count of positives numbers and
//the second element is sum of negative numbers. 0 is neither positive nor negative.
//If the input is an empty array or is null, return an empty array.

//Example
//For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// function countPositivesSumNegatives(input) {
//   if (!input || input.length === 0) return [];
//   const arrPositive = input.filter((el) => el > 0);
//   const arrNegative = input.filter((el) => el < 0);
//   return [
//     arrPositive.length,
//     arrNegative.reduce((acc, el) => {
//       acc += el;
//       return acc;
//     }, 0),
//   ];
// }

// console.log(
//   countPositivesSumNegatives([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
//   ])
// ); // [10, -65]
// console.log(
//   countPositivesSumNegatives([
//     0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
//   ])
// ); // [8, -50]
// console.log(countPositivesSumNegatives([])); // []
// console.log(countPositivesSumNegatives(null)); // []

//57(array, number, sort)
// function sumTwoSmallestNumbers(numbers) {
//   const newArr = numbers.sort((a, b) => a - b);
//   return newArr[0] + newArr[1];
// }

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); // 13
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])); // 6
// console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7])); // 10
// console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1])); // 24
// console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4])); // 16

//58(split, map, string, array, charAt, repeat)
// function accum(s) {
//   return s
//     .split("")
//     .map(
//       (el, i) => (el = el.charAt(0).toUpperCase() + el.toLowerCase().repeat(i))
//     )
//     .join("-");
// }

// console.log(accum("ZpglnRxqenU")); // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
// console.log(accum("NyffsGeyylB")); // "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
// console.log(accum("MjtkuBovqrU")); // "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
// console.log(accum("EvidjUnokmM")); // "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
// console.log(accum("HbideVbxncC")); // "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"
// console.log(accum("abcd")); // "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt")); // "C-Ww-Aaa-Tttt"

//59(string, slice)
// function removeChar(str) {
//   return str.slice(1, -1);
// }

// console.log(removeChar("eloquent")); // 'loquen'
// console.log(removeChar("country")); // 'ountr'
// console.log(removeChar("person")); // 'erso'
// console.log(removeChar("place")); // 'lac'
// console.log(removeChar("ooopsss")); // 'oopss'

//60(string, array, split, join)
// function abbrevName(name) {
//   return name
//     .split(" ")
//     .map((el) => el.slice(0, 1).toUpperCase())
//     .join(".");
// }

// console.log(abbrevName("Sam Harris")); // "S.H"
// console.log(abbrevName("Patrick Feenan")); // "P.F"
// console.log(abbrevName("patrick feeney")); // "P.F"
// console.log(abbrevName("Evan Cole")); // "E.C"
// console.log(abbrevName("P Favuzzi")); // "P.F"
// console.log(abbrevName("David Mendieta")); // "D.M"

//61(alphabet, charAtCode)
// function alphabetPosition(text) {
//   const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
//   return text
//     .toLowerCase()
//     .split("")
//     .map((letter) =>
//       alphabets.includes(letter) ? alphabets.indexOf(letter) + 1 : " "
//     )
//     .filter((el) => el !== " ")
//     .join(" ");
// }

// console.log(alphabetPosition("The sunset sets at twelve o' clock.")); // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
// console.log(alphabetPosition("The narwhal bacons at midnight.")); // "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"

//62(array)
//You are going to be given an array of integers.
//Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.If there is no index that would make this happen, return -1.
//For example:
//Let's say you are given the array {1,2,3,4,3,2,1}:
//Your function will return the index 3, because at the 3rd position of the array,
//the sum of left side of the index({ 1, 2, 3}) and the sum of the right side of the index({ 3, 2, 1}) both equal 6.

//Let's look at another one.
//You are given the array {1,100,50,-51,1,1}:
//Your function will return the index 1, because at the 1st position of the array,
//the sum of left side of the index({ 1}) and the sum of the right side of the index({ 50,- 51, 1, 1}) both equal 1.

//Last one:
//You are given the array {20,10,-80,10,10,15,35}
//At index 0 the left side is {}
//The right side is {10,-80,10,10,15,35}
//They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
//Index 0 is the place where the left side and right side are equal.

//Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

//Input:
//An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

//Output:
//The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

//Note:
//If you are given an array with multiple answers, return the lowest correct index.

//1) (array, reduce, findIndex, slice)
// function findEvenIndex(arr) {
//   return arr.findIndex((_el, index, arr) => {
//     return (
//       arr.slice(0, index).reduce((acc, el) => (acc += el), 0) ===
//       arr.slice(index + 1).reduce((acc, el) => (acc += el), 0)
//     );
//   });
// }

// //2)
// function findEvenIndex(arr) {
//   let sum = arr.reduce((acc, el) => acc + el, 0);
//   let sumLeft = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (sum - sumLeft - arr[i] === sumLeft) {
//       return i;
//     }
//     sumLeft = sumLeft + arr[i];
//   }
//   return -1;
// }

// //3)
// function findEvenIndex(arr) {
//   const sum = {
//     left: 0,
//     right: arr.reduce((a, b) => a + b, 0),
//   };

//   for (let i = 0; i < arr.length; i++) {
//     sum.right -= arr[i];
//     if (sum.left === sum.right) {
//       return i;
//     }
//     sum.left += arr[i];
//   }
//   return -1;
// }

// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // 3
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // 1
// console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); // -1
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); // 3

//63(array, cycle)
// function towerBuilder(nFloors) {
//   let arr = [];
//   for (let i = nFloors; i >= 1; i -= 1) {
//     let spaces = nFloors - i;
//     let asterisk = i * 2 - 1;
//     arr.push(" ".repeat(spaces) + "*".repeat(asterisk) + " ".repeat(spaces));
//   }

//   return arr.reverse();
// }

// console.log(towerBuilder(1)); // ["*"]
// console.log(towerBuilder(2)); // [" * ","***"]
// console.log(towerBuilder(3)); // ["  *  "," *** ","*****"]

//64(binary, number, string, parseInt)
// const binaryArrayToNumber = (arr) => {
//   return parseInt(arr.join(""), 2);
// };

// console.log(binaryArrayToNumber([0, 0, 0, 1])); // 1
// console.log(binaryArrayToNumber([0, 0, 1, 0])); // 2
// console.log(binaryArrayToNumber([1, 1, 1, 1])); // 15
// console.log(binaryArrayToNumber([0, 1, 1, 0])); // 6

//65(array, string, reduce, map)
//The goal of this exercise is to convert a string to a new string where each character
//in the new string is "(" if that character appears only once in the original string,
//or ")" if that character appears more than once in the original string.
//Ignore capitalization when determining if a character is a duplicate.

//1)
// function duplicateEncode(word) {
//   const normalizeArr = word.toLowerCase().split("");
//   const obj = normalizeArr.reduce((acc, el) => {
//     acc[el] = (acc[el] || 0) + 1;
//     return acc;
//   }, {});

//   return normalizeArr.map((el) => (el = obj[el] === 1 ? "(" : ")")).join("");
// }

// //2)
// function duplicateEncode(word) {
//   return word
//     .toLowerCase()
//     .split("")
//     .map(function (a, i, w) {
//       return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
//     })
//     .join("");
// }

// console.log(duplicateEncode("din")); // "((("
// console.log(duplicateEncode("recede")); // "()()()"
// console.log(duplicateEncode("Success")); // ")())())"
// console.log(duplicateEncode("(( @")); // "))(("

//66(even, number, boolean)
//Timmy & Sarah think they are in love, but around where they live,
//they will only know once they pick a flower each.
//If one of the flowers has an even number of petals and the other has an odd number
//of petals it means they are in love.

//Write a function that will take the number of petals of each flower
//and return true if they are in love and false if they aren't.

//1)
// const lovefunc = (flower1, flower2) => flower1 % 2 !== flower2 % 2;

//2)
// const lovefunc = (flower1, flower2) => (flower1 + flower2) % 2 === 1;

// console.log(lovefunc(1, 4)); // true
// console.log(lovefunc(2, 2)); // false
// console.log(lovefunc(0, 1)); // true
// console.log(lovefunc(0, 0)); // false

//67()
//Your task is to sort a given string.
//Each word in the string will contain a single number.
//This number is the position the word should have in the result.
//Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

//If the input string is empty, return an empty string.
//The words in the input String will only contain valid consecutive numbers.

//Examples
//"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
//"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
//""  -->  ""

// function order(words) {
//   let arrWords = words.split(" ");
//   let resultArr = [];
//   arrWords.forEach((word) => {
//     let num = word.split("").find((el) => parseInt(el));
//     resultArr.push([word, parseInt(num)]);
//   });

//   resultArr.sort((a, b) => a[1] - b[1]).map((el) => el.splice(1, 1));
//   return resultArr.join(" ");
// }

// console.log(order("is2 Thi1s T4est 3a")); // "Thi1s is2 3a T4est"
// console.log(order("4of Fo1r pe6ople g3ood th5e the2")); // "Fo1r the2 g3ood 4of th5e pe6ople"
// console.log(order("")); // ""

//68(array, sort, number, map, filter)
//You will be given an array of numbers.
//You have to sort the odd numbers in ascending order
//while leaving the even numbers at their original positions.

// function sortArray(array) {
//   const oddArr = array.filter((el) => el % 2).sort((a, b) => a - b);
//   return array.map((el) => (el % 2 ? oddArr.shift() : el));
// }

// console.log(sortArray([5, 3, 2, 8, 1, 4])); // [1, 3, 2, 8, 5, 4]
// console.log(sortArray([5, 3, 1, 8, 0])); // [1, 3, 5, 8, 0]
// console.log(sortArray([])); // []
// console.log(sortArray([7, 1])); // [1, 7]
// console.log(sortArray([5, 8, 6, 3, 4])); // [3, 8, 6, 5, 4]
// console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); // [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

//69(filter, array)
// function arrayDiff(a, b) {
//   //   return a.filter((el) => {
//   //     if (!b.includes(el)) {
//   //       return el;
//   //     }
//   //   });

//   return a.filter((el) => !b.includes(el));
// }

// console.log(arrayDiff([1, 2], [1])); // [2]
// console.log(arrayDiff([1, 2, 2], [1])); // [2, 2]
// console.log(arrayDiff([1, 2, 2], [2])); // [1]
// console.log(arrayDiff([1, 2, 2], [])); // [1, 2, 2]
// console.log(arrayDiff([], [1, 2])); // []
// console.log(arrayDiff([1, 2, 3], [1, 2])); // [3]

//70(array, reduce, object)
//Count the number of Duplicates
//Write a function that will return the count
//of distinct case -insensitive alphabetic characters and
//numeric digits that occur more than once in the input string.
//The input string can be assumed to contain only alphabets(both uppercase and lowercase) and
//numeric digits.

// //1)
// function duplicateCount(text) {
//   const arr = text.toLowerCase().split("");
//   const obj = arr.reduce((acc, el) => {
//     acc[el] = (acc[el] || 0) + 1;
//     return acc;
//   }, {});

//   const newArr = Object.values(obj);
//   return newArr.filter((el) => el > 1).length;
// }

// //2)
// function duplicateCount(text) {
//   const arr = text.toLowerCase().split("");
//   const obj = arr.reduce((acc, el) => {
//     acc[el] = (acc[el] || 0) + 1;
//     return acc;
//   }, {});
//     let res = 0;
//     for (key in obj) {
//       if (obj[key] > 1) {
//         res += 1;
//       }
//     }

//     return res;
// }

// console.log(duplicateCount("")); // 0
// console.log(duplicateCount("abcde")); // 0
// console.log(duplicateCount("aabbcde")); // 2
// console.log(duplicateCount("aabBcde")); // 2
// console.log(duplicateCount("Indivisibility")); //  1
// console.log(duplicateCount("Indivisibilities")); //  2

//71(pangram, string, alphabet, regect)
//1)
// function isPangram(string) {
//   const obj = string
//     .match(/[A-Za-z]/gi)
//     .map((el) => el.toLowerCase())
//     .reduce((acc, el) => {
//       acc[el] = (acc[el] || 0) + 1;
//       return acc;
//     }, {});

//   return Object.keys(obj).length === 26;
// }

//2)
// function isPangram(string) {
//   return "abcdefghijklmnopqrstuvwxyz"
//     .split("")
//     .every((el) => string.toLowerCase().includes(el));
// }

// console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // true
// console.log(isPangram("This is not a pangram.")); // false
// console.log(isPangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ")); // false

//72(cycle, array)
// function countBy(x, n) {
//   let z = [];
//   for (let i = 0; i < n; i += 1) {
//     z.push((i + 1) * x);
//   }
//   return z;
// }

// console.log(countBy(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(countBy(2, 5)); // [2, 4, 6, 8, 10]
// console.log(countBy(3, 6)); // [3, 6, 9, 12, 15, 18]

//73(array, sort, number,sum)
//1)
// function sumArray(array) {
//   if (!array || array.length <= 2) return 0;
//   let newArr = array.sort((a, b) => a - b);
//   newArr.pop();
//   newArr.shift();
//   return newArr.reduce((acc, el) => acc + el, 0);
// }

// //2)
// sumArray = (a) =>
//   a
//     ? a
//         .sort((x, y) => x - y)
//         .slice(1, -1)
//         .reduce((s, e) => s + e, 0)
//         : 0;

// console.log(sumArray(null)); // 0
// console.log(sumArray([])); // 0
// console.log(sumArray([3])); // 0
// console.log(sumArray([3, 5])); // 0
// console.log(sumArray([6, 2, 1, 8, 10])); // 16
// console.log(sumArray([0, 1, 6, 10, 10])); // 17
// console.log(sumArray([-6, -20, -1, -10, -12])); // -28
// console.log(sumArray([-6, 20, -1, 10, -12])); // 3

//74()
// function queueTime(customers, n) {
//   const sum = customers.reduce((acc, el) => acc + el, 0);
//   if (sum < n) {
//     return customers.length;
//   }

//   return sum / n;
// }

// console.log(queueTime([], 1)); // 0
// console.log(queueTime([1, 2, 3, 4], 1)); // 10
// console.log(queueTime([2, 2, 3, 3, 4, 4], 2)); // 9
// console.log(queueTime([1, 2, 3, 4, 5], 100)); // 5
// console.log(queueTime([5, 3, 4], 1)); // 12
// console.log(queueTime([10, 2, 3, 3], 2)); // 10
// console.log(queueTime([2, 3, 10, 2], 2)); // 12

//75(Math, number)
// const areaOrPerimeter = function (l, w) {
//   if (l === w) return Math.pow(l, 2);
//   return 2 * (l + w);
// };

// console.log(areaOrPerimeter(3, 3)); // 9
// console.log(areaOrPerimeter(6, 10)); // 32

//76()
// function squareDigits(num) {
//   return Number(
//     String(num)
//       .split("")
//       .map((el) => String(Math.pow(Number(el), 2)))
//       .join("")
//   );
// }

// console.log(squareDigits(3212)); // 9414
// console.log(squareDigits(2112)); // 4114
// console.log(squareDigits(0)); // 0

//77(array, push, map, forEach)
//1)
// function openOrSenior(data) {
//   let newArr = [];
//   data.forEach((el) => {
//     if (el[0] >= 55 && el[1] > 7) {
//       newArr.push("Senior");
//     } else {
//       newArr.push("Open");
//     }
//   });
//   return newArr;
// }

//2)
// function openOrSenior(data) {
//   return data.map((el) => {
//     el = el[0] >= 55 && el[1] > 7 ? "Senior" : "Open";
//     return el;
//   });
// }

// console.log(
//   openOrSenior([
//     [45, 12],
//     [55, 21],
//     [19, -2],
//     [104, 20],
//   ])
// ); // ['Open', 'Senior', 'Open', 'Senior']
// console.log(
//   openOrSenior([
//     [3, 12],
//     [55, 1],
//     [91, -2],
//     [53, 23],
//   ])
// ); // ['Open', 'Open', 'Open', 'Open']
// console.log(
//   openOrSenior([
//     [59, 12],
//     [55, -1],
//     [12, -2],
//     [12, 12],
//   ])
// ); // ['Senior', 'Open', 'Open', 'Open']

//78(string, numbers, array, split, map, sort)
// function highAndLow(numbers) {
//   const arr = numbers
//     .split(" ")
//     .map((el) => Number(el))
//     .sort((a, b) => a - b);
//   return arr[arr.length - 1] + " " + arr[0];
// }

// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // "42 -9"
// console.log(highAndLow("1 2 3")); // "3 1"
// console.log(highAndLow("1 2 3 4 5")); // "5 1"
// console.log(highAndLow("1 2 -3 4 5")); // "5 -3"

//79()
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     for (const potion of this.potions) {
//       if (this.potions.includes(this.potions[potionName])) {
//         return `Potion ${potionName} is not in inventory!`;
//       }
//       if (potion.name === potionName) {
//         const potionIndex = this.potions.indexOf(potion);
//         this.potions.splice(potionIndex, 1);
//       }
//     }

// const potionIndex = this.potions.indexOf(potionName);

// if (potionIndex === -1) {
//   return `Potion ${potionName} is not in inventory!`;
// }

// this.potions.splice(potionIndex, 1);
// },
// updatePotionName(oldName, newName) {
//   for (const potion of this.potions) {
//     if (this.potions.includes(this.potions[oldName])) {
//       return `Potion ${oldName} is not in inventory!`;
//     }
//     if (potion.name === oldName) {
//       const potionIndex = this.potions.indexOf(potion);
//       this.potions.splice(potionIndex, 1, { ...potion, name: newName });
//     }
//   }
// const potionIndex = this.potions.indexOf(oldName);

// if (potionIndex === -1) {
//   return `Potion ${oldName} is not in inventory!`;
// }

// this.potions.splice(potionIndex, 1, newName);
// },
// Change code above this line
// };

// console.log(atTheOldToad.getPotions()); // [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]

// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 })); //
// // console.log(atTheOldToad.getPotions()); // [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }, { name: "Invisibility", price: 620 }];

// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 })); //
// // console.log(atTheOldToad.getPotions()); // [{ name: 'Speed potion', price: 460 }, { name: 'Dragon breath', price: 780 }, { name: 'Stone skin', price: 520 }, { name: 'Invisibility', price: 620 }, { name: 'Power potion', price: 270 }]

// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })); // "Error! Potion Dragon breath is already in your inventory!"
// // console.log(atTheOldToad.getPotions()); // без змін

// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 })); // "Error! Potion Stone skin is already in your inventory!"
// console.log(atTheOldToad.getPotions()); // без змін

// console.log(atTheOldToad.removePotion("Dragon breath")); //
// console.log(atTheOldToad.getPotions()); // [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]

// console.log(atTheOldToad.removePotion("Speed potion")); //
// console.log(atTheOldToad.getPotions()); // [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]

// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth")); //
// console.log(atTheOldToad.getPotions()); // [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]

// console.log(
//   atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
// ); //
// console.log(atTheOldToad.getPotions()); // [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]

//80(switch, if..., reduce, average, charAt)
//1)
// function getGrade(s1, s2, s3) {
//   const score = (s1 + s2 + s3) / 3;

//   if (90 <= score && score <= 100) {
//     return "A";
//   }
//   if (80 <= score && score < 90) {
//     return "B";
//   }

//   if (70 <= score && score < 80) {
//     return "C";
//   }

//   if (60 <= score && score < 70) {
//     return "D";
//   }

//   return "F";
// }

//2)
// function getGrade(...scores) {
//   const avg = scores.reduce((a, b) => a + b) / scores.length;
//   switch (true) {
//     case avg >= 90:
//       return "A";
//     case avg >= 80:
//       return "B";
//     case avg >= 70:
//       return "C";
//     case avg >= 60:
//       return "D";
//     default:
//       return "F";
//   }
// }

//3)
// const getGrade = (a, b, c) => "FFFFFFDCBAA".charAt((a + b + c) / 3 / 10);

//4)
// function getGrade(...scores) {
//   const average = scores.reduce((a, b) => a + b) / scores.length;

//   if (average >= 90) return "A";
//   if (average >= 80) return "B";
//   if (average >= 70) return "C";
//   if (average >= 60) return "D";
//   return "F";
// }

// console.log(getGrade(95, 90, 93)); // A
// console.log(getGrade(100, 85, 96)); // A
// console.log(getGrade(92, 93, 94)); // A
// console.log(getGrade(70, 70, 100)); // B
// console.log(getGrade(82, 85, 87)); // B
// console.log(getGrade(84, 79, 85)); // B
// console.log(getGrade(89, 89, 90)); // B
// console.log(getGrade(70, 70, 70)); // C
// console.log(getGrade(75, 70, 79)); // C
// console.log(getGrade(60, 82, 76)); // C
// console.log(getGrade(65, 70, 69)); // D
// console.log(getGrade(66, 62, 68)); // D
// console.log(getGrade(58, 62, 70)); // D
// console.log(getGrade(44, 55, 52)); // F
// console.log(getGrade(48, 55, 52)); // F
// console.log(getGrade(58, 59, 60)); // F

//81()
// We need a function that can transform a string into a number.

//1)
// const stringToNumber = function (str) {
//   return Number(str);
// };

//2)
// const stringToNumber = function (str) {
//   return parseInt(str);
// };

//3)
// const stringToNumber = function (str) {
//   return +str;
// };

// console.log(stringToNumber("1234")); // 1234
// console.log(stringToNumber("605")); // 605
// console.log(stringToNumber("1405")); // 1405
// console.log(stringToNumber("-7")); // -7

//82(array, filter, splice, indexOf, smallest)
//1)
// function removeSmallest(numbers) {
//   if (numbers.length === 0) return [];

//   return numbers.filter(
//     (number, i, arr) => i !== arr.indexOf(Math.min(...arr))
//   );
// }

//2)
// function removeSmallest(numbers) {
//   let newArrNum = [...numbers];
//   newArrNum.splice(newArrNum.indexOf(Math.min(...numbers)), 1);
//   return newArrNum;
// }

// console.log(removeSmallest([1, 2, 3, 4, 5])); // [2,3,4,5]
// console.log(removeSmallest([5, 3, 2, 1, 4])); // [5,3,2,4]
// console.log(removeSmallest([2, 2, 1, 2, 1])); // [2,2,2,1]
// console.log(removeSmallest([])); // []

//83()
//1)(reduce, unique value, unrepeat)
// function longest(s1, s2) {
//   const combineStr = s1.concat(s2);
//   const obj = combineStr.split("").reduce((acc, el) => {
//     acc[el.toLowerCase()] = (acc[el.toLowerCase()] || 0) + 1;
//     return acc;
//   }, {});

//   return Object.keys(obj).sort().join("");
// }

//2) (set)
// const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

//3) (unique value, array, string, unrepeat)
// const longest = (s1, s2) =>
//   (s1 + s2)
//     .split("")
//     .sort()
//     .filter((x, i, a) => x !== a[i - 1])
//     .join("");

// const longest = (s1, s2) =>
//   Array.from(s1 + s2)
//     .sort()
//     .filter((x, i, a) => x !== a[i - 1])
//     .join("");

// console.log(longest("aretheyhere", "yestheyarehere")); // "aehrsty"
// console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")); // "abcdefghilnoprstu"
// console.log(longest("inmanylanguages", "theresapairoffunctions")); // "acefghilmnoprstuy"

//84(double repeat, repeated once, string)
// Given a string, you have to return a string in which each character (case-sensitive)
// is repeated once.

// function doubleChar(str) {
//   return [...str].map((el) => el + el).join("");
// }

// console.log(doubleChar("abcd")); // "aabbccdd"
// console.log(doubleChar("Adidas")); // "AAddiiddaass"
// console.log(doubleChar("1337")); // "11333377"
// console.log(doubleChar("illuminati")); // "iilllluummiinnaattii"
// console.log(doubleChar("123456")); // "112233445566"
// console.log(doubleChar("%^&*(")); // "%%^^&&**(("

//85(pow, array)
// function powersOfTwo(n) {
//   let arr = [];
//   for (let i = 0; i <= n; i += 1) {
//     arr.push(Math.pow(2, i));
//   }

//   return arr;
// }

// console.log(powersOfTwo(0)); // [1]               # [2^0]
// console.log(powersOfTwo(1)); // [1, 2]            # [2^0, 2^1]
// console.log(powersOfTwo(2)); // [1, 2, 4]         # [2^0, 2^1, 2^2]
// console.log(powersOfTwo(4)); // [1, 2, 4, 8, 16]  # [2^0, 2^1, 2^2, 2^3, 2^4]

//86(string, split, join)
// //1)
// function removeExclamationMarks(s) {
//   return s
//     .split("")
//     .filter((el) => el !== "!")
//     .join("");
// }

// //2)
// function removeExclamationMarks(s) {
//     return s.split("!").join("");
// }

// console.log(removeExclamationMarks("Hello World!")); // "Hello World"
// console.log(removeExclamationMarks("Hello! World!")); // "Hello World"

//87(endsWith, slice, string, substr)
// //1)
// function solution(str, ending) {
//   if (!ending) return true;
//   return str.slice(-ending.length) === ending;
// }

// //2)
// function solution(str, ending) {
//   return str.substr(-ending.length) == ending;
// }

// //3)
// function solution(str, ending) {
//   return str.endsWith(ending);
// }

// console.log(solution("abcde", "cde")); // true
// console.log(solution("abcde", "abc")); // false
// console.log(solution("abc", "")); // true

//88(recursion)
//1)
// function bouncingBall(h, bounce, window) {
//   const cond = h > 0 && bounce > 0 && bounce < 1 && window < h;
//   if (cond) {
//     return h < window ? -1 : 2 + bouncingBall(h * bounce, bounce, window);
//   } else {
//     return -1;
//   }
// }

//2)
// function bouncingBall(h, bounce, window) {
//   if (h > 0 && bounce > 0 && bounce < 1 && h > window) {
//     while (h > window) {
//       return 2 + bouncingBall(h * bounce, bounce, window);
//     }
//   }
//   return -1;
// }

// console.log(bouncingBall(3.0, 0.66, 1.5)); // 3
// console.log(bouncingBall(30.0, 0.66, 1.5)); // 15
// console.log(bouncingBall(3.0, 1.0, 1.5)); // -1

//89(recursion, sumInteger)
//1)
// function getSum(a, b) {
//   let sum = 0;
//   if (a === b) {
//     return a;
//   } else if (a < b) {
//     for (let i = a; i <= b; i += 1) {
//       sum += i;
//     }
//   } else {
//     for (let i = b; i <= a; i += 1) {
//       sum += i;
//     }
//   }
//   return sum;
// }

//2)
// function GetSum(a, b) {
//   if (a == b) return a;
//   else if (a < b) return a + GetSum(a + 1, b);
//   else return a + GetSum(a - 1, b);
// }

// console.log(getSum(0, -1)); // -1
// console.log(getSum(0, 1)); // 1
// console.log(getSum(2, 2)); // 2
// console.log(getSum(1, 0)); // 1
// console.log(getSum(-1, 2)); // 2

//90(discount, sum, total, if)
// Every day you rent the car costs $40.
// If you rent the car for 7 or more days, you get $50 off your total.
// Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

//1)
// function rentalCarCost(d) {
//   const rentalCarCost = {
//     priceForOneDay: 40,
//     days: d,
//     discountMin: 20,
//     discountMax: 50,
//     totalSumWithoutDiscount() {
//       return this.days * this.priceForOneDay;
//     },
//     totalSumWithDiscountMin() {
//       return this.days * this.priceForOneDay - 20;
//     },
//     totalSumWithDiscountMax() {
//       return this.days * this.priceForOneDay - 50;
//     },
//   };

//   if (d >= 3 && d < 7) {
//     return rentalCarCost.totalSumWithDiscountMin();
//   }
//   if (d >= 7) {
//     return rentalCarCost.totalSumWithDiscountMax();
//   }
//   return rentalCarCost.totalSumWithoutDiscount();
// }

//2)
// function rentalCarCost(d) {
//   let total = d * 40;
//   if (d >= 7) return total - 50;
//   if (d >= 3) return total - 20;
//   return total;
// }

// console.log(rentalCarCost(1)); // 40
// console.log(rentalCarCost(2)); // 80
// console.log(rentalCarCost(3)); // 100
// console.log(rentalCarCost(4)); // 140
// console.log(rentalCarCost(5)); // 180
// console.log(rentalCarCost(6)); // 220
// console.log(rentalCarCost(7)); // 230
// console.log(rentalCarCost(8)); // 270
// console.log(rentalCarCost(9)); // 310
// console.log(rentalCarCost(10)); // 350

//91()
// You will be given a number and you will need to return it as a string in Expanded Form.

// function expandedForm(num) {
//   return num
//     .toString()
//     .split("")
//     .map((el, i, arr) => el * Math.pow(10, arr.length - i - 1))
//     .filter((num) => num !== 0)
//     .join(" + ");
// }

// console.log(expandedForm(12)); // '10 + 2'
// console.log(expandedForm(42)); // '40 + 2'
// console.log(expandedForm(70304)); // '70000 + 300 + 4'

//92()
