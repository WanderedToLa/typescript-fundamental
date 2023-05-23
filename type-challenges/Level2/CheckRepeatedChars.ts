/**
 * Implement type ```CheckRepeatedChars<S>``` which will return whether type ```S``` contains duplicated chars?
 */

import type { Equal, Expect } from "../utils";

// type CheckRepeatedChars<T extends string> =
//     `${T}` extends `${infer First}${infer Middle}${infer Last}`
//         ? `${First}` extends `${Last}` | `${Middle}`
//             ? true
//             :`${Middle}` extends `${Last}`
//                 ? true
//                 : false
//         : false

type CheckRepeatedChars<T extends string> =
    `${T}` extends `${infer F}${infer R}`
        ? `${R}` extends `${string}${F}${string}`
            ? true
            : CheckRepeatedChars<R>
        : false

type cases = [
    Expect<Equal<CheckRepeatedChars<'abc'>, false>>,
    Expect<Equal<CheckRepeatedChars<'abb'>, true>>,
    Expect<Equal<CheckRepeatedChars<'cbc'>, true>>,
    Expect<Equal<CheckRepeatedChars<''>, false>>,
]