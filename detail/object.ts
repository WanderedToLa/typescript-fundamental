const x: {} = {};
const y: Object = "hello"; // {} , Object -> 모든 타입
// const xx: object = "world";
const yy: object = { hello: "world" }; // good practice interface , type , class
const z: unknown = "hi";

// unknown {} | null | undefined

if (z) {
  z;
}
