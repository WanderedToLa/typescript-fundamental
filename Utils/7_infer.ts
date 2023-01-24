function zip(
  x: number,
  y: string,
  z: boolean
): { x: number; y: string; z: boolean } {
  return { x, y, z };
}

type zipParams = Parameters<typeof zip>;
type first = zipParams[0];

type CustomParameters<T extends (...args: any) => any> = T extends (
  ...args: infer A
) => any
  ? A
  : never;

type CustomParametersReturn<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer A
  ? A
  : never;
type CzipParams = CustomParameters<typeof zip>;
type CzipReturn = CustomParametersReturn<typeof zip>;
