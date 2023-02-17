/**
 * Please complete type `Integer<T>`, type `T` inherits from `number`, if `T` is an integer return it, otherwise return `never`.
 */

import type { Equal, Expect } from "../utils";

type Integers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0
type Integer<T> = T extends Integers ? T : never

let x = 1
let y = 1 as const

type cases1 = [
    Expect<Equal<Integer<1>, 1>>,
    Expect<Equal<Integer<1.1>, never>>,
    Expect<Equal<Integer<1.0>, 1>>,
    Expect<Equal<Integer<typeof x>, never>>,
    Expect<Equal<Integer<typeof y>, 1>>,
]