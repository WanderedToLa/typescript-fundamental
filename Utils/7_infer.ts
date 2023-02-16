function zip(
  x: number,
  y: string,
  z: boolean
): { x: number; y: string; z: boolean } {
  return { x, y, z };
}

type zipParams = Parameters<typeof zip>; // [x:number , y:string , z: boolean]
type first = zipParams[0]; // number

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


type abc = abcinfer<'FooBarBaz'>
type abcinfer<T extends string> = T extends `${infer A}${infer B}${infer C}` ? `${C}` : never