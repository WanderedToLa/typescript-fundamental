interface Array<T> {
  forEach(
    callbackfn: (value: T, index: number, array: T[]) => void,
    thisArg?: any
  ): void;

  map<U>(
    callbackfn: (value: T, index: number, array: T[]) => U,
    thisArg?: any
  ): U[];

  filter<S extends T>(
    predicate: (value: T, index: number, array: T[]) => value is S,
    thisArg?: any
  ): S[];

  filter(
    predicate: (value: T, index: number, array: T[]) => unknown,
    thisArg?: any
  ): T[];
}
const genericA: Array<number> = [1, 2, 3];
genericA.forEach((item) => {
  console.log(item);
});

const genericB = [1, 2, 3].map((item, idx, entries) => {
  return item.toString();
});

const filterNumber = [1, 2, 3].filter((item) => item % 2);

const filterTypeGuard = (value: number | string): value is string =>
  typeof value === "string";

const fliterStringOrNumber = ["1", 2, "3"].filter(filterTypeGuard);
