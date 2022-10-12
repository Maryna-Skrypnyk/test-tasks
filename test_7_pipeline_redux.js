// pipeline with reduce

// (num + 1) * 2 - 1

function increment(input) {
  return input + 1;
}
function decrement(input) {
  return input - 1;
}
function double(input) {
  return input * 2;
}
function halve(input) {
  return input / 2;
}

let pipeline = [increment, double, decrement];

const result = pipeline.reduce((acc, item) => {
  return item(acc);
}, 1);

console.log(result); // 3
