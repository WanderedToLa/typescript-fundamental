"use strict";
const filterArr = [1, "2", 3];
const stringFilterArr = ["1", "2", "3"];
const usingFilter = filterArr.filter((v) => typeof v === "string");
const usingFilterMethod = filterArr.filter((v) => v < 3);
// 더 넓은 타입에 대입가능
function returnNumber(x) {
    return Number(x);
}
returnNumber("1"); // 1
const returnNumberB = returnNumber;
