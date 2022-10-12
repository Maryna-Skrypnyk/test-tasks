// є група людей. Серед них може бути нарцис.
// Нарциса знають ВСІ люди, але нарцис не знає нікого.
// Знайти нарциса серед групи людей.

const array = [
  { name: "Batman", know: ["Robin"] },
  { name: "LadyCat", know: ["Batman", "Robin"] },
  { name: "Robin", know: [] },
];

//////////////////

const narcissus = array.filter(
  ({ name, know }) =>
    !know.length &&
    array.filter(
      ({ know }) => know.some((n) => n === name).length === array.length - 1
    )
);

console.log(narcissus); //

//////////////

const narcissus2 = array.filter((item) => {
  const peopleName = array.filter(
    (el) => el.know.some((n) => n === item.name).length === array.length - 1
  );
  console.log(peopleName);
  return !item.know.length && peopleName;
});

console.log(narcissus2); //
