const promise1 = Promise.resolve(1)
  .then((a) => a + 1)
  .then((a) => a + 1)
  .then((a) => a.toString()); // '3'
const promise2 = Promise.resolve(2); // 2
const promise3 = new Promise((res, rej) => {
  setTimeout(res, 1000); // unknown
});

// all<T extends readonly unknown[] | []>(values: T): Promise<{ -readonly [P in keyof T]: Awaited<T[P]> }>;

// type Awaited<T> = // Duck Typing
//     T extends null | undefined ? T : // special case for `null | undefined` when not in `--strictNullChecks` mode
//         T extends object & { then(onfulfilled: infer F, ...args: infer _): any } ? // `await` only unwraps object types with a callable `then`. Non-object types are not unwrapped
//             F extends ((value: infer V, ...args: infer _) => any) ? // if the argument to `then` is callable, extracts the first argument
//                 Awaited<V> : // recursively unwrap the value
//                 never : // the argument to `then` was not callable
//         T; // non-object or non-thenable

Promise.all([promise1, promise2, promise3]).then((result) => {
  // result: [string , number , unknown]
  console.log(result); // ['3' , 2 , undefined]
});

type BBB = ["3", 2];
type BABA = {
  [key in keyof BBB]: BBB[key];
};
