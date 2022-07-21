// 문자열
const str: string = 'hello';

// 숫자
const num: number = 10;

// 배열
const arr: Array<string> = [];
arr.push('hi');

// 배열 - 리터럴 적용
const items: string[] = [];
// items.push(10);

// 튜플 -> 모든 인덱스에 타입 정의
const address: [string, number] = ['Ansan', 25];

// 객체
const obj: object = {};
// obj.a = 10;

// 타입 객체
const person: { age: number; name: string } = { age: 100, name: 'Wooseok' };
person.age = 101;

// 진위값
let isLogin: boolean = false;