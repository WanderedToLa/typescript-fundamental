interface FilterCustom<T> {
  filter<U extends T>(callback: (value: T) => value is U): U[];
}

const filterArr: FilterCustom<number | string> = [1, "2", 3];
const stringFilterArr: FilterCustom<string> = ["1", "2", "3"];

const usingFilter = filterArr.filter((v): v is string => typeof v === "string");
const usingFilterMethod = filterArr.filter((v): v is number => v < 3);
