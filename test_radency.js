// const chooseOptimalDistance = (t, k, ls) => {
//   let optimalDistance = 0;
//   if (ls.length < k) {
//     return null;
//   }
//   if (k < 1 || t <= 0) {
//     return 0;
//   }

//   for (let i = 0; i < ls.length; i += 1) {
//     const newArrLs = ls.slice();
//     newArrLs.splice(i, 1);

//     const totalDistance = chooseOptimalDistance(t - ls[i], k - 1, newArrLs);
//     if (totalDistance + ls[i] > optimalDistance && totalDistance + ls[i] <= t) {
//       optimalDistance = totalDistance + ls[i];
//     } else optimalDistance = null;
//   }

//   return optimalDistance;
// };

// chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61]); //173
// chooseOptimalDistance(163, 3, [50]); // null

// console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61])); // 173
// console.log(chooseOptimalDistance(163, 3, [50])); // null
// console.log(chooseOptimalDistance(0, 3, [51, 56, 58, 59, 61])); // 0
// console.log(chooseOptimalDistance(1000, 3, [185, 310, 335, 475, 314, 78])); // 995
// console.log(chooseOptimalDistance(1000, 0, [185, 310, 335, 475, 314, 78])); // 0
// console.log(chooseOptimalDistance(230, 3, [91, 74, 73, 85, 73, 81, 87])); // 228
// console.log(chooseOptimalDistance(331, 5, [91, 74, 73, 85, 73, 81, 87]));

//////////////////////////////

// const chooseOptimalDistance = (t, k, ls) => {
//   let optimalDistance = 0;

//   if (ls.length < k) {
//     return null;
//   }

//   if (k < 1 || t <= 0) {
//     return 0;
//   }

//   for (let i = 0; i < ls.length; i += 1) {
//     const newArrLs = ls.slice();
//     const totalDistance = chooseOptimalDistance(t - ls[i], k - 1, newArrLs);
//     if (totalDistance + ls[i] > optimalDistance && totalDistance + ls[i] <= t) {
//       optimalDistance = totalDistance + ls[i];
//     }
//   }

//   return optimalDistance;
// };

// chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61]); //173
// chooseOptimalDistance(163, 3, [50]); // null

// console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61])); // 174
// console.log(chooseOptimalDistance(163, 3, [50])); // null
// console.log(chooseOptimalDistance(0, 3, [51, 56, 58, 59, 61])); // 0
// console.log(chooseOptimalDistance(1000, 3, [185, 310, 335, 475, 314, 78])); // 995
// console.log(chooseOptimalDistance(1000, 0, [185, 310, 335, 475, 314, 78])); // 0
// console.log(chooseOptimalDistance(230, 3, [91, 74, 73, 85, 73, 81, 87])); // 229

////////////////////////////

const chooseOptimalDistance = (t, k, ls) => {
  // t = max distance
  // k = number of cities
  // ls = arr distance
  if (k === 0) {
    return 0;
  }

  if (ls.length < k) {
    return null;
  }

  let bestDistance = 0;

  for (let i = 0; i < ls.length; i++) {
    let newArr = [...ls];
    newArr.splice(i, 1);
    const distance = ls[i];

    const sumDistance = chooseOptimalDistance(t - distance, k - 1, newArr);

    if (sumDistance + distance > bestDistance && sumDistance + distance <= t) {
      bestDistance = sumDistance + distance;
    }
    if (newArr < k) {
      return null;
    }
  }

  return bestDistance;
};

// console.log(chooseBestDistance(174, 3, [51, 56, 58, 59, 61])); //173
// console.log(chooseBestDistance(163, 3, [50])); // null
// console.log(
//   chooseBestDistance(915, 3, [185, 329, 475, 310, 335, 485, 68, 347, 314])
// );

chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61]); //173
chooseOptimalDistance(163, 3, [50]); // null

console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61])); // 173
console.log(chooseOptimalDistance(163, 3, [50])); // null
console.log(chooseOptimalDistance(0, 3, [51, 56, 58, 59, 61])); // 0
console.log(chooseOptimalDistance(1000, 3, [185, 310, 335, 475, 314, 78])); // 995
console.log(chooseOptimalDistance(1000, 0, [185, 310, 335, 475, 314, 78])); // 0
console.log(chooseOptimalDistance(230, 3, [91, 74, 73, 85, 73, 81, 87])); // 229
console.log(chooseOptimalDistance(331, 5, [91, 74, 73, 85, 73, 81, 87])); // 331, а потрібно null
