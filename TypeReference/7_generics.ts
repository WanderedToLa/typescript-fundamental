function genericType<T>(param: T): T {
  console.log(param);
  return param;
}

genericType<string>("hi");
genericType<number>(999);
genericType<boolean>(false);

/**
 * @description 기존 타입의 단점은 다른 타입을 활용하는데 있어서 제한점이 생김 따라서 Generic사용 기존타입은 유지 보수측면에서 불리함
 */

function genericText<T>(text: T): T {
  console.log(text);
  return text;
}

const strGeneric = genericText<string>("hi");
strGeneric.split("");
genericText<number>(10);
const condition = genericText<boolean>(false);

function unionText(text: number | string) {
  console.log(text);
  // text.split(""); // number일 경우 split 사용불가함
  return text;
}

unionText(10);
unionText("hi");

/**
 * @description Interface Generic 적용하기
 */
interface DropdownGeneric<T> {
  value: T;
  selected: boolean;
}
const dropDownObj: DropdownGeneric<number> = {
  value: 24,
  selected: false,
};

/**
 * @description Generic Type 제한하기
 */

function GenericTypeGuard<T>(text: T[]) {
  console.log(text.length);
  return text;
}
GenericTypeGuard<string>(["hi", "abc"]);

interface ExtandType {
  length: number;
}

function textLength<T extends ExtandType>(text: T): T {
  text.length;
  return text;
}
// textLength(10);
// textLength({ hi: 10 })
