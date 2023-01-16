type B = { type: "b"; b: string };
type C = { type: "c"; c: string };
type D = { type: "d"; d: string };

function typeCheck(a: B | C | D) {
  if ("b" in a) {
    console.log(a.type, "a");
  } else if ("c" in a) {
    console.log(a.type, "c");
  } else {
    console.log(a.type, "d");
  }
}

//custom guard
interface Cat {
  meow: number;
}

interface Dog {
  bow: number;
}

function CatOrDog(a: Cat | Dog): a is Dog {
  if ((a as Cat).meow) {
    return false;
  }
  return true;
}

function pet(a: Cat | Dog) {
  if (CatOrDog(a)) {
    console.log(a.bow);
  }
  if ("meow" in a) {
    console.log(a.meow);
  }
}
