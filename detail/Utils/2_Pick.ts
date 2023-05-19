interface ProfileObjectPick {
  name: string;
  age: number;
  address: string;
}

const wooseokPick: Pick<ProfileObjectPick, "name" | "age"> = {
  name: "wooseok",
  age: 24,
};

const wooseokOmit: Omit<ProfileObjectPick, "address"> = {
  name: "wooseok",
  age: 24,
};
