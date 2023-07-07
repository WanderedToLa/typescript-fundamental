"use strict";
const forEachArr = [1, 2, 3];
const mapForEachNumberArr = forEachArr.map((v) => v + 1);
const mapString = forEachArr.map((v) => v.toString());
forEachArr.forEach((items) => {
    console.log(items);
    //   items.toFixed(1);
});
forEachArr.forEach((items) => {
    console.log(items);
    return 3;
});
const stringForEach = ["1", "2", "3"];
stringForEach.forEach((items) => {
    console.log(items);
    items.charAt(3);
});
