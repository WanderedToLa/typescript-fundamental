interface ProfileObject {
  name: string;
  age: number;
  address: string;
}

// type ExcludeC<Animal , 'Person'> = Animal extends 'Person' ? never : 'Cat' | 'Dog' | never
type ExcludeC<T, U> = T extends U ? never : T;
type ExtractC<T, U> = T extends U ? T : never;

type Animal = "Cat" | "Dog" | "Person";
type Mammal = ExcludeC<Animal, "Person">; // 'Cat' , 'Dog'
type Human = ExtractC<Animal, "Person">; // 'Person'

type ExcludeAdress = Exclude<keyof ProfileObject, "address">;

type CustomOmit<T, U extends keyof any> = Pick<T, Exclude<keyof T, U>>;
const OWooseok: CustomOmit<ProfileObject, "address"> = {
  name: "wooseok",
  age: 24,
};
