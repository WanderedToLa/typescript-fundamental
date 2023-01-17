interface IReadonly {
  readonly x: string;
}

const readOnlyType: IReadonly = { x: "hello" };
// readOnlyType.x = "123123"; error

type Signature = { [key: number]: string };
const SigObj: Signature = {
  1: "hi",
};

type TMapped = "ONE" | "TWO" | "THREE";
type NumberIndex = { [key in TMapped]: number };

const MapObj: NumberIndex = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
};
