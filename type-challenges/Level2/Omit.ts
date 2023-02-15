/**
 * `T`에서 `K` 프로퍼티만 제거해 새로운 오브젝트 타입을 만드는 내장 제네릭 `Omit<T, K>`를 이를 사용하지 않고 구현하세요.
 */

import type { Equal, Expect } from "../utils";

type MyOmit<T, K extends keyof any> = Pick<T , Exclude<keyof T, K>>

type cases = [
    Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
    Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]

interface Todo {
    title: string
    description: string
    completed: boolean
}

interface Expected1 {
    title: string
    completed: boolean
}

interface Expected2 {
    title: string
}