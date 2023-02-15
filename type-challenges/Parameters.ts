/**
 * 내장 제네릭 `Parameters<T>`를 이를 사용하지 않고 구현하세요.
 */

import type { Equal, Expect } from "./utils";

type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer A) => any ? A : never


const foo = (arg1: string, arg2: number): void => {}
const bar = (arg1: boolean, arg2: { a: 'A' }): void => {}
const baz = (): void => {}

type cases = [
    Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
    Expect<Equal<MyParameters<typeof bar>, [boolean, { a: 'A' }]>>,
    Expect<Equal<MyParameters<typeof baz>, []>>,
]