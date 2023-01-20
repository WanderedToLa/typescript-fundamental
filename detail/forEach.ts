interface ForEachArr<T> {
  forEach(callback: (value: T) => void): void;
}

const forEachArr: ForEachArr<number> = [1, 2, 3];

forEachArr.forEach((items) => {
  console.log(items);
  //   items.toFixed(1);
});

forEachArr.forEach((items) => {
  console.log(items);
  return 3;
});

const stringForEach: ForEachArr<string> = ["1", "2", "3"];

stringForEach.forEach((items) => {
  console.log(items);
  items.charAt(3);
});
