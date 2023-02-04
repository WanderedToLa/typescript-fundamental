const promise1 = Promise.resolve(1)
  .then((a) => a + 1)
  .then((a) => a + 1)
  .then((a) => a.toString());
const promise2 = Promise.resolve(2);
const promise3 = new Promise((res, rej) => {
  setTimeout(res, 1000);
});

Promise.all([promise1, promise2, promise3]).then((result) => {
  // result: [string , number , unknown]
  console.log(result); // ['3' , 2 , undefined]
});
