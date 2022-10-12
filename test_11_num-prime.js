// https://medium.com/swlh/an-algorithm-a-day-how-to-check-for-a-prime-number-in-javascript-7052630fb4ef
// Реализуйте функцию isTwinPrime, которая возвращает true, если
// 1. number - является простым числом
// 2. number+2 или number-2 - как минимум одно из этих чисел является простым.
//  Если хоть одно условие не выполняется, возвращать false.

// Например, возьмем число 7.
// 1. 7 - простое число.
// 2.  7+2  = 9, 7-2 = 5.  5 простое число
// Ответ: true

// Натуральное число называется простым, если оно имеет только два различных делителя:
// единицу и само себя

// Вивід лише простих чисел
// function isTwinPrime(num) {
//   if (num <= 1) return false;
//   //5 is larger than 1, so we continue with the function
//   if (num === 2) return true;
//   //5 is not 2, so we continue with the function
//   for (let i = 2; i < num; i += 1) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isTwinPrime(5)); // true
// console.log(isTwinPrime(7)); // true
// console.log(isTwinPrime(9)); // false
// console.log(isTwinPrime(953)); // false

///////////////////////
// 2

// function isPrime(num) {
//   if (num <= 1) return false;
//   if (num === 2) return true;
//   let num2 = Math.sqrt(num); //num2 is the square root of num
//   for (let i = 2; i <= num2; i += 1) {
//     //note that we are working now with the square root
//     if (num2 % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(5)); // true
// console.log(isPrime(7)); // true
// console.log(isPrime(9)); // false
// console.log(isPrime(953)); // false
// console.log(isPrime(521)); // true
// console.log(isPrime(9801)); // false
// console.log(isPrime(13037)); // true

////////////////////////////////////
// Вивід простих чисел з умовою задачі

const isTwinPrime = (num) => {
  const isPrime = (num) => {
    const sqrt = Math.sqrt(num);
    for (let i = 2; i <= sqrt; i++) if (num % i === 0) return false;
    return num > 1;
  };

  return isPrime(num) && (isPrime(num - 2) || isPrime(num + 2));
};

console.log(isTwinPrime(5)); // true
console.log(isTwinPrime(9)); // false
console.log(isTwinPrime(7)); // true
console.log(isTwinPrime(953)); // false

////////////////////
