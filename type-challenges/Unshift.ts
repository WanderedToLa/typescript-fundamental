/**
 *   `Array.unshift`의 타입 버전을 구현하세요.
 *
 *   ```typescript
 *   type Result = Unshift<[1, 2], 0> // [0, 1, 2,]
 *   ```
 */

import type { Equal, Expect } from "./utils";

type Unshift<T extends any[], U> = [U , ...T]

type cases = [
    Expect<Equal<Unshift<[], 1>, [1]>>,
    Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
    Expect<Equal<Unshift<['1', 2, '3'], boolean>, [boolean, '1', 2, '3']>>,
]