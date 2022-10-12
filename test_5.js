// filter, map, reduce

// Нам нужен новый массив полных имен всех пользователей (их имя, плюс пробел, плюс их фамилия),
// но только если им за двадцать, и только если их полное имя составляет 10 символов или больше.
// ["Rita Smith", "Betty Bird", "Joe Grover"]

const users = [
  {
    firstName: "Bob",
    lastName: "Doe",
    age: 37,
  },
  {
    firstName: "Rita",
    lastName: "Smith",
    age: 21,
  },
  {
    firstName: "Rick",
    lastName: "Fish",
    age: 28,
  },
  {
    firstName: "Betty",
    lastName: "Bird",
    age: 44,
  },
  {
    firstName: "Joe",
    lastName: "Grover",
    age: 22,
  },
  {
    firstName: "Jill",
    lastName: "Pill",
    age: 19,
  },
  {
    firstName: "Sam",
    lastName: "Smith",
    age: 22,
  },
];

// 1 спосіб

// const getUsersByAgeAndFullName = users
//   .filter((user) => user.age >= 20)
//   .map((user) => `${user.firstName} ${user.lastName}`)
//   .filter((user) => user.length >= 10);

// console.log(getUsersByAgeAndFullName);

// 2 спосіб

// const getUsersByAgeAndFullName = (arr) => {
//   return arr
//     .filter(
//       ({ age, firstName, lastName }) =>
//         age >= 20 && firstName.length + lastName.length + 1 >= 10
//     )
//     .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
// };

// console.log(getUsersByAgeAndFullName(users));

// 3 спосіб - reduce

const getUsers = users.reduce((totalUsers, user) => {
  if (
    user.age >= 20 &&
    user.firstName.length + user.lastName.length + 1 >= 10
  ) {
    totalUsers.push(`${user.firstName} ${user.lastName}`);
  }
  return totalUsers;
}, []);

console.log(getUsers);
