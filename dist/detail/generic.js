"use strict";
const genericA = [1, 2, 3];
genericA.forEach((item) => {
    console.log(item);
});
const genericB = [1, 2, 3].map((item, idx, entries) => {
    return item.toString();
});
const filterNumber = [1, 2, 3].filter((item) => item % 2);
const filterTypeGuard = (value) => typeof value === "string";
const fliterStringOrNumber = ["1", 2, "3"].filter(filterTypeGuard);
