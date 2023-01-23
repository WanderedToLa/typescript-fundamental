interface OptionalObjectType {
  name?: string;
  age?: number;
  address?: string;
}

// const RequiredUserInfo: Required<OptionalObjectType> = {
//   name: "wooseok",
//   //   age: 24, error
//   address: "Ansan",
// };

type R<T> = {
  [K in keyof T]-?: T[K]; // modifier remove optional
};

// const RequiredUserInfo: R<OptionalObjectType> = {
//   name: "wooseok",
//   age: 24,
// };
