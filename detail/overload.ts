interface OverloadType<T> {
  filter<S extends T>(
    predicate: (value: T, index: number, array: readonly T[]) => value is S,
    thisArg?: any
  ): S[];

  filter(
    predicate: (value: T, index: number, array: readonly T[]) => unknown,
    thisArg?: any
  ): T[];
}

// declare function add(x: number, y: number, z: number): number;
declare function add(x: number, y: number, z?: number): number;
declare function add(x: string, y: string, z?: string): string;

add(1, 2);
add(1, 2, 3);
add("1", "2");
