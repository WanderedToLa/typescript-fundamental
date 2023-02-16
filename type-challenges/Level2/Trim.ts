/**
 * 정확한 문자열 타입이고 양쪽 끝의 공백이 제거된 새 문자열을 반환하는 Trim<T>를 구현하십시오.
 */

/**
 * 재귀로 공백검사 -> 앞 뒤 공백이 다 없어질 때 까지 재귀적으로 반복후 S return
 */

import type { Equal, Expect } from "../utils";

type Space = " " | "\n" | "\t";
type Trim<S extends string> = S extends `${Space}${infer Rest}`
  ? Trim<Rest>
  : S extends `${infer Rest}${Space}`
  ? Trim<Rest>
  : S;

type cases = [
  Expect<Equal<Trim<"str">, "str">>,
  Expect<Equal<Trim<" str">, "str">>,
  Expect<Equal<Trim<"     str">, "str">>,
  Expect<Equal<Trim<"str   ">, "str">>,
  Expect<Equal<Trim<"     str     ">, "str">>,
  Expect<Equal<Trim<"   \n\t foo bar \t">, "foo bar">>,
  Expect<Equal<Trim<"">, "">>,
  Expect<Equal<Trim<" \n\t ">, "">>
];
