/**
 * First<T>배열 T을 사용하고 첫 번째 요소의 유형을 반환 하는 제네릭을 구현합니다 .
 */

import type { Equal, Expect } from "./utils";

type First<T extends any[]> = T extends [infer F, ...infer T] ? F : never;

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
];
