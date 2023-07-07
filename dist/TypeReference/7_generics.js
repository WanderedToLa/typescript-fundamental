"use strict";
function genericType(param) {
    console.log(param);
    return param;
}
genericType("hi");
genericType(999);
genericType(false);
/**
 * @description 기존 타입의 단점은 다른 타입을 활용하는데 있어서 제한점이 생김 따라서 Generic사용 기존타입은 유지 보수측면에서 불리함
 */
function genericText(text) {
    console.log(text);
    return text;
}
const strGeneric = genericText("hi");
strGeneric.split("");
genericText(10);
const condition = genericText(false);
function unionText(text) {
    console.log(text);
    // text.split(""); // number일 경우 split 사용불가함
    return text;
}
unionText(10);
unionText("hi");
const dropDownObj = {
    value: 24,
    selected: false,
};
/**
 * @description Generic Type 제한하기
 */
function GenericTypeGuard(text) {
    console.log(text.length);
    return text;
}
GenericTypeGuard(["hi", "abc"]);
function textLength(text) {
    text.length;
    return text;
}
// textLength(10);
// textLength({ hi: 10 })
