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

const str = genericText<string>("hi");
str.split("");
genericText<number>(10);
const condition = genericText<boolean>(false);

function unionText(text: number | string) {
  console.log(text);
  // text.split(""); // number일 경우 split 사용불가함
  return text;
}

unionText(10);
unionText("hi");
