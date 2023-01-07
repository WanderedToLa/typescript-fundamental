interface User {
  age: number;
  name: string;
}

// 변수 인터페이스
var wooSeok: User = {
  age: 10,
  name: "wooseok",
};

// 함수 인터페이스
function getUser(user: User) {
  console.log(user);
}
const seokmin = {
  age: 11,
  name: "seokmin",
};
getUser(seokmin);

// 함수 구조 인터페이스
interface SumFunction {
  (a: number, b: number): number;
}
var sum2: SumFunction;
sum2 = function (a: number, b: number): number {
  return a + b;
};

// 인덱싱
interface StringArray {
  [index: number]: String;
}
var arr2: StringArray = ["a", "b", "c"];
// arr[0] = 10

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}
var obj2 = {
  sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};
Object.keys(obj).forEach((v) => {});

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}
var kim: Developer = {
  name: "doseok",
  age: 12,
  language: "react",
};
