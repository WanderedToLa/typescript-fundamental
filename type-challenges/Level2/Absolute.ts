/**
 * Implement the `Absolute` type. A type that take string, number or bigint. The output should be a positive number string
 */

/**
 * prefix '-' infer 추론후 있으면 빼고 return 없다면 문자열 변환후 return
 */


import type { Equal, Expect } from "../utils";

type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer A}` ? A : `${T}`

type cases = [
    Expect<Equal<Absolute<0>, '0'>>,
    Expect<Equal<Absolute<-0>, '0'>>,
    Expect<Equal<Absolute<10>, '10'>>,
    Expect<Equal<Absolute<-5>, '5'>>,
    Expect<Equal<Absolute<'0'>, '0'>>,
    Expect<Equal<Absolute<'-0'>, '0'>>,
    Expect<Equal<Absolute<'10'>, '10'>>,
    Expect<Equal<Absolute<'-5'>, '5'>>,
    Expect<Equal<Absolute<-1_000_000n>, '1000000'>>,
    Expect<Equal<Absolute<9_999n>, '9999'>>,
]