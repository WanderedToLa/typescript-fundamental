interface FilterCustom<T> {
  filter<U extends T>(callback: (value: T) => value is U): U[];
}

const filterArr: FilterCustom<number | string> = [1, "2", 3];
const stringFilterArr: FilterCustom<string> = ["1", "2", "3"];

const usingFilter = filterArr.filter((v): v is string => typeof v === "string");
const usingFilterMethod = filterArr.filter((v): v is number => v < 3);

// 더 넓은 타입에 대입가능

function returnNumber(x: string): number {
  return Number(x);
}

returnNumber("1"); // 1

type returnNumberType = (x: string) => string | number;
const returnNumberB: returnNumberType = returnNumber;
