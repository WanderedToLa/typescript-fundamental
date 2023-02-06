/**
 * T의 모든 프로퍼티를 읽기 전용(재할당 불가)으로 바꾸는 내장 제네릭 Readonly<T>를 이를 사용하지 않고 구현하세요
 */

import type { Equal, Expect } from "./utils";

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];
