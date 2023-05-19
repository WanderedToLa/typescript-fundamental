interface ProfileObjectPick {
  name: string;
  age: number;
  address: string;
}

type CustomP<T, U extends keyof T> = {
  [Key in U]: T[Key];
};

const customUser: CustomP<ProfileObjectPick, "name" | "age"> = {
  name: "wooseok",
  age: 24,
};
