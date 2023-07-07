"use strict";
function typeCheck(a) {
    if ("b" in a) {
        console.log(a.type, "a");
    }
    else if ("c" in a) {
        console.log(a.type, "c");
    }
    else {
        console.log(a.type, "d");
    }
}
function CatOrDog(a) {
    if (a.meow) {
        return false;
    }
    return true;
}
function pet(a) {
    if (CatOrDog(a)) {
        console.log(a.bow);
    }
    if ("meow" in a) {
        console.log(a.meow);
    }
}
