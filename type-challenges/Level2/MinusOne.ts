/**
 *   Given a number (always positive) as a type. Your type should return the number decreased by one.
 */

/**
 * 0. 0 일때 예외처리
 * 1. 배열로 감싸고 일단 무조건 마지막 자리 빼보기
 */

import type { Equal, Expect } from "../utils";

type MinusOne<T extends number> = T extends 0 ? -1 : NumberToArray<T>
type NumberToArray<T extends string | number> = `${T}` extends `${infer A}${infer Rest}` ? `${Rest}${A}` : ''

type cases = [
    // Expect<Equal<MinusOne<1>, 0>>,
    // Expect<Equal<MinusOne<55>, 54>>,
    Equal<MinusOne<55>, 54>
    // Expect<Equal<MinusOne<3>, 2>>,
    // Expect<Equal<MinusOne<100>, 99>>,
    // Expect<Equal<MinusOne<1101>, 1100>>,
    // Expect<Equal<MinusOne<0>, -1>>,
    // Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>,
]