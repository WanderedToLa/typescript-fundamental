/**
 * Merge two types into a new type. Keys of the second type overrides keys of the first type.
 */

import type { Equal, Expect } from "../utils";

type Merge<F, S> = {
    [Key in keyof F | keyof S]: Key extends keyof S ? S[Key] : Key extends keyof F ? F[Key] : never
}

type Foo = {
    a: number
    b: string
}
type Bar = {
    b: number
    c: boolean
}

type cases = [
    Expect<Equal<Merge<Foo, Bar>, {
        a: number
        b: number
        c: boolean
    }>>,
]