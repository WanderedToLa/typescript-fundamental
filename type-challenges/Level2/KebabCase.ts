/**
 *   Replace the `camelCase` or `PascalCase` string with `kebab-case`.
 */

/**
 * string type에서 infer 추론 방식
 * infer가 1개일때 -> 전체 추론
 * infer가 2개일 때 -> 첫번째 infer 맨앞글자 , 두번째 infer 나머지 문자
 * infer가 3개부터 한글자씩 추론함
 */

import type { Equal, Expect } from "../utils";

/**
 * @description
 * 1. infer A , Rest로 맨 앞글자와 나머지 글자 분리
 * 2. 나머지 글자를 Uncapitalize 한 값과 기존 나머지 글자를 비교
 * 3. 조건이 True 이면 맨 앞글자를 Uncapitalize 후 합침
 * 4. 나머지 글자의 첫번째가 대문자일 경우에 맨 앞글자와 나머지 글자사이에 '-' 추가
 * 5. 더이상 검사할 문자열이 없다면 문자 S return
 *
 * 결론 : 앞의 글자는 무조건 소문자로 변경하면서 나머지 글자의 첫번째 글자가 대문자일 때까지 재귀적으로 반복함.
 *       대문자가 나왔을 경우 '-'추가후 Uncapitalize
 *       더이상 반복할 문자열이 없다면 return
 */

type KebabCase<S extends string> = S extends `${infer A}${infer Rest}`
    ? Rest extends Uncapitalize<Rest>
        ? `${Uncapitalize<A>}${KebabCase<Rest>}`
        : `${Uncapitalize<A>}-${KebabCase<Rest>}`
    : S

type cases = [
  Expect<Equal<KebabCase<"FooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"fooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"foo-bar">, "foo-bar">>,
  Expect<Equal<KebabCase<"foo_bar">, "foo_bar">>,
  Expect<Equal<KebabCase<"Foo-Bar">, "foo--bar">>,
  Expect<Equal<KebabCase<"ABC">, "a-b-c">>,
  Expect<Equal<KebabCase<"-">, "-">>,
  Expect<Equal<KebabCase<"">, "">>,
  Expect<Equal<KebabCase<"😎">, "😎">>
];
