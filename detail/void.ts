function voidA(): void {
  //   return 3; // error
}
const voidB = voidA();

function voidParam(callback: () => void): void {
  //   return 3; // error
}
voidParam(() => {
  return 3;
});

interface InterFaceTypeVoid {
  talk: () => void;
}

const voidHuman: InterFaceTypeVoid = {
  talk() {
    return "abc";
  },
};

declare function forEach(arr: number[], callback: (el: number) => void): void;
let target: number[] = [];
forEach([1, 2, 3], (el) => target.push(el));
forEach([1, 2, 3], (el) => {
  target.push(el);
});
