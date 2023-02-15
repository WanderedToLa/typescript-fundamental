/**
 *   `Array.push`의 제네릭 버전을 구현하세요.
 */

import type { Equal, Expect } from "./utils";

type Push<T extends any[], U> = [...T , U]

type cases = [
    Expect<Equal<Push<[], 1>, [1]>>,
    Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
    Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>,
]