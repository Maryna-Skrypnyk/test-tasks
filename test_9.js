// Замена подряд идущих букв на их количество.
// assdssddffffrrreeeweggggg // => 'as2ds2d2f4r3e3weg5'

// const inputString = "assdssddffffrrreeeweggggg";

//////////////////////////////////
// 1

const changeString = (inputString) => {
  let changedString = [];
  let isEqualNextLetter = false;
  let currentMarker = 0;
  let index = 0;

  do {
    let currentLetter = inputString[currentMarker];
    let iterator = 0;

    do {
      iterator += 1;
      let nextLetter = inputString[currentMarker + iterator];
      isEqualNextLetter = currentLetter === nextLetter;
    } while (isEqualNextLetter);
    changedString[index++] =
      iterator > 1 ? currentLetter + iterator : currentLetter;
    currentMarker += iterator;
  } while (currentMarker !== inputString.length);

  return changedString.join("");
};

console.log(changeString("assdssddffffrrreeeweggggg")); // as2ds2d2f4r3e3weg5
