//1
// Write a function that takes two Sets as arguments
// Create the union of the two sets
// Return the result
// Tipp: try not to switch to Arrays, this would slow down your code
//1)
// function myFunction(a, b) {
// const newSetA = [...a, ...b];
// return new Set(newSetA);
// }
//2)
// function myFunction(a, b) {
//   const result = new Set(a);
//   b.forEach((el) => result.add(el));
//   return result;
// }

// console.log(myFunction(new Set("123"), new Set("234"))); // new Set('1234')
// console.log(myFunction(new Set([1, 2, 3]), new Set([3, 4, 5]))); // new Set([1, 2, 3, 4, 5])
// console.log(
//   myFunction(new Set([false, false, NaN]), new Set([true, true, NaN]))
// ); // new Set([false, NaN, true])

//2
// Write a function that takes a Set and an array as arguments
// If not already existing, add each element in the array to the Set
// Return the modified Set
// function myFunction(set, arr) {
//   let result = new Set(set);
//   arr.forEach((el) => result.add(el));
//   return new Set(result);
// }

// console.log(myFunction(new Set([1, 2, 3]), [4, 5, 6])); // new Set([1, 2, 3, 4, 5, 6 ])
// console.log(new Set("12345"), [..."6789"]); // new Set([...'123456789'])
// console.log(new Set([1, 2, 3]), [2, 3]); // new Set([1, 2, 3])

//3
// Write a function that takes two sets (a and b) as arguments
// Get the intersection of the sets
// In other words, return a set containing all elements that are both in a as well as b
// function myFunction(a, b) {
//   let newSet = new Set();
//   b.forEach((el) => {
//     a.forEach((item) => {
//       if (item === el) {
//         newSet.add(item);
//       }
//     });
//   });
//   return new Set(newSet);
// }

// console.log(myFunction(new Set([1, 2, 3]), new Set([4, 5, 6]))); // new Set()
// console.log(myFunction(new Set("12345"), new Set([..."45678"]))); // new Set('45')
// console.log(myFunction(new Set([1, 2, 3]), new Set([2, 3, 4]))); // new Set([2, 3])

//4
// Write a function that takes a Set and a value as argument
// If existing in the Set, remove the value from the Set
// Return the result
// function myFunction(set, val) {
//   let newSet = new Set(set);
//   newSet.forEach((el) => {
//     if (el === val) {
//       newSet.delete(el);
//     }
//   });
//   return newSet;
// }

// console.log(myFunction(new Set([1, 2, 3]), 1)); // new Set([2, 3])
// console.log(myFunction(new Set("12345"), "3")); // new Set(['1', '2', '4', '5'])
// console.log(myFunction(new Set([1, 2, 3]), 4)); // new Set([1, 2, 3])

//5
// Write a function that takes a Set and a value as arguments
// Check if the value is present in the Set
// function myFunction(set, val) {
//   return set.has(val);
// }

// console.log(myFunction(new Set([1, 2, 3]), 2)); // true
// console.log(myFunction(new Set([123]), 2)); // false
// console.log(myFunction(new Set(["1", "2", "3"]), "2")); // true
// console.log(myFunction(new Set("123"), "2")); // true

//6
// Write a function that takes three elements of any type as arguments
// Create a Set from those elements
// Return the result
// function myFunction(a, b, c) {
//   return new Set([a, b, c]);
// }

// console.log(myFunction(1, "b", 3)); // new Set([1, 'b', 3])
// console.log(myFunction(NaN, null, false)); // new Set([NaN, null, false])
// console.log(myFunction("a", ["b"], { c: 3 })); // new Set(['a', ['b'], { c: 3 }])

//7
// Write a function that takes a Set as argument
// Convert the Set to an Array
// Return the Array
// function myFunction(set) {
//   return Array.from(set);
// }

// console.log(myFunction(new Set([1, 2, 3]))); // [1, 2, 3]
// console.log(myFunction(new Set([123]))); // [123]
// console.log(myFunction(new Set(["1", "2", "3"]))); // ['1', '2', '3']
// console.log(myFunction(new Set("123"))); // ['1', '2', '3']

//8
// function isIsogram(str) {
//   return new Set(str.toLowerCase()).size === str.length;
// }

// console.log(isIsogram("Dermatoglyphics")); // true
// console.log(isIsogram("isogram")); // true
// console.log(isIsogram("aba")); // false
// console.log(isIsogram("moOse")); // false
// console.log(isIsogram("isIsogram")); // false
// console.log(isIsogram("")); // true

//9
// const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

// console.log(longest("aretheyhere", "yestheyarehere")); // "aehrsty"
// console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")); // "abcdefghilnoprstu"
// console.log(longest("inmanylanguages", "theresapairoffunctions")); // "acefghilmnoprstuy"

//10
