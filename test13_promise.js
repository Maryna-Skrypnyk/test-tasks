// 1

const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "two");
});

Promise.race([firstPromise, secondPromise]).then((res) => console.log(res));

//Каким будет результат?
// A: "one"
// B: "two" //
// C: "two" "one"
// D: "one" "two"

// Когда мы передаем несколько промисов методу Promise.race,
// он разрешает/отклоняет первый промис, который разрешается/отклоняется.
// В метод setTimeout мы передаем таймер: 500 мс для первого промиса(firstPromise)
// и 100 мс для второго промиса(secondPromise).Это означает,
// что secondPromise разрешается первым со значением 'два'.
// res теперь содержит значение 'два', которое выводиться в консоль.

//////////////////////////////////
// 2

function helloWorld() {
  return new Promise((res) => {
    setTimeout(() => {
      res("Hello World!");
    }, 2000);
  });
}

const msg = async function () {
  const msg = await helloWorld();
  console.log("Message:", msg);
};

const msg1 = async () => {
  const msg = await helloWorld();
  console.log("Message:", msg);
};

msg(); // через 2 сек
msg1(); // через 2 сек

////////////////////////////////
// 3
