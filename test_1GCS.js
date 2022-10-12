// https://www.youtube.com/watch?v=zY9Wn4MCAoI

const array = [
  { color: "white", id: 2 },
  { color: "black", id: 3 },
  { color: "white", id: 40 },
  { color: "black", id: 500 },
  { color: "white" },
  { id: 30 },
];

// output = {
//   'white': {
//     '2': { color: 'white', id: 2 },
//   },
//   'black': {
//     '3': { color: 'black', id: 3 },
//     '500': { color: 'black', id: 500 }
//   }
// }

//////////////////////////
// 1

// const colorOutput = (arr) => {
//   return arr.reduce((acc, { color, id }) => {
//     if (!color || !id) {
//       return acc;
//     }

//     const item = acc[color]
//       ? { ...acc[color], [id]: { color, id } }
//       : { [id]: { color, id } };
//     return { ...acc, [color]: item };
//   }, {});
// };

// colorOutput(array);
// console.log(colorOutput(array)); //

///////////////////
// 2

// function colorFromArray(arr) {
//   return arr.reduce(
//     (acc, item) => ({
//       ...acc,
//       [item["color"]]: { ...acc[item["color"]], [item["id"]]: item },
//     }),
//     {}
//   );
// }

// console.log(colorFromArray(array));

///////////////////////////////////////
// 3

// const outputByColor = (arr) => {
//   return arr.reduce((acc, { color = "defaultColor", id = 0 }) => {
//     // if (!color || !id) {
//     //   return acc;
//     // }

//     return {
//       ...acc,
//       [color]: { ...acc[color], [id]: { color, id } },
//     };
//   }, {});
// };

// console.log(outputByColor(array));

///////////////////////
// 4

// function colorFromArray(arr) {
//   return arr.reduce((acc, item) => {
//     if (!item.color || !item.id) {
//       return acc;
//     } else {
//       return {
//         ...acc,
//         [item["color"]]: { ...acc[item["color"]], [item["id"]]: item },
//       };
//     }
//   }, {});
// }

// console.log(colorFromArray(array));

/////////////////
//5

const arrayTransformer = (arr) => {
  return arr.reduce((acc, item) => {
    const element = {
      ...acc[item.color],
      [item.id]: item,
    };
    return { ...acc, [item.color]: element };
  }, {});
};

console.log(arrayTransformer(array));

/////////////////
// 6

// output = {
//     'white': 3,
//     'black': 1
// }

// const outputByColor = (arr) => {
//   return arr.reduce((acc, { color = "defaultColor" }) => {
//     // acc[color] = (acc[color] || 0) + 1;
//     if (!acc[color]) {
//       acc[color] = 1;
//     } else {
//       acc[color] = acc[color] + 1;
//     }
//     return acc;
//   }, {});
// };

// console.log(outputByColor(array)); // { white: 3, black: 1, defaultColor: 1 }
