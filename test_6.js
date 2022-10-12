const fruits = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

// 1 reduce -> Object
const thisShitIsBananasR = fruits.reduce((acc, fruit) => {
  if (fruit.name === "bananas") return fruit;
  return acc;
});

console.log(thisShitIsBananasR); // { name: 'bananas', quantity: 0 }

// 2 filter -> Array
const thisShitIsBananasA = fruits.filter((fruit) => {
  if (fruit.name === "bananas") return fruit;
});

console.log(thisShitIsBananasA); // [ { name: 'bananas', quantity: 0 } ]
