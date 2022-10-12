// let array = [34, 3, 2, 1];

// for (var i = 0; i < array.length; i++) {
//   setTimeout(function () {
//     console.log(i + " key  " + array[i]);
//   }, 3000);
// }

// Рішення

var array = [34, 3, 2, 1];

for (var i = 0; i < array.length; i++) {
  (function (index) {
    setTimeout(function () {
      console.log(index + " key  " + array[index]);
    }, 3000);
  })(i);
}
