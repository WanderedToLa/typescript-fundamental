interface ProfileObject {
  name: string;
  age: number;
  address: string;
}

const wooseok: ProfileObject = {
  name: "wooseok",
  age: 24,
  address: "Ansan",
};

// interface ProfileObject {
//   name?: string;
//   age?: number;
//   address?: string;
// }

/**
 * P<ProfileObject> {
 *   name? : ProfileObject['name']
 *   age? : ProfileObject['age']
 *   address? : ProfileObject['address']
 * }
 */

type P<T> = {
  [Key in keyof T]?: T[Key];
};

const newWooseok: P<ProfileObject> = {
  name: "wooseok",
  age: 24,
};
