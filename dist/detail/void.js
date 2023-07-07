"use strict";
function voidA() {
    //   return 3; // error
}
const voidB = voidA();
function voidParam(callback) {
    //   return 3; // error
}
voidParam(() => {
    return 3;
});
const voidHuman = {
    talk() {
        return "abc";
    },
};
let target = [];
forEach([1, 2, 3], (el) => target.push(el));
forEach([1, 2, 3], (el) => {
    target.push(el);
});
