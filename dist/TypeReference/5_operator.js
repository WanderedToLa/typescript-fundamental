"use strict";
/**
 * @description Union Type '|'연산
 */
function logMSG(value) {
    console.log(value);
}
logMSG("hi");
logMSG(10);
/**
 * @description typeGuard 특정 타입으로 타입의 범위를 좁힘
 */
function typeGuard(value) {
    typeof value == "number" ? value.toLocaleString() : "";
    typeof value == "string" ? value.toString() : "";
    throw new TypeError("Invalid Value");
}
typeGuard("hi");
typeGuard(100);
