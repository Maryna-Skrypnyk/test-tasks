// Sort the odd
// Вам дан массив чисел. Ваша задача -  отсортировать по возрастанию нечетные числа,
// а четные оставить на своих местах.

// Примеры:
// [7, 1] => [1, 7]
// [5, 8, 6, 3, 4] => [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] => [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

////////////////////////////
// 1 -> shift()

const sortArray = (arr) => {
  const newArr = [...arr];
  const sortOddArr = newArr.filter((num) => num % 2).sort((a, b) => a - b);

  // console.log(sortOddArr); // [ 1, 3, 5, 7, 9 ]

  return newArr.map((num) => (num % 2 ? sortOddArr.shift() : num));
};

console.log(sortArray([7, 1])); // [1, 7]
console.log(sortArray([5, 8, 6, 3, 4])); // [3, 8, 6, 5, 4]
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); // [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

//////////////////////////
// 2 -> pop()

const sortArray2 = (arr) => {
  const newArr = [...arr];
  const sortOddArr = newArr.filter((num) => num % 2).sort((a, b) => b - a);

  // console.log(sortOddArr); // [ 9, 7, 5, 3, 1 ]

  return newArr.map((num) => (num % 2 ? sortOddArr.pop() : num));
};

console.log(sortArray2([7, 1])); // [1, 7]
console.log(sortArray2([5, 8, 6, 3, 4])); // [3, 8, 6, 5, 4]
console.log(sortArray2([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); // [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

////////////////////////////////////
