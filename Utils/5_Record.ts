interface AnyObject {
  [key: string]: number; // Record<string, number>
}

type CumstomRecord<T extends keyof any, U> = {
  [K in T]: U;
};

const anyObject: CumstomRecord<string, number> = {
  a: 1,
  b: 2,
  c: 3,
};
