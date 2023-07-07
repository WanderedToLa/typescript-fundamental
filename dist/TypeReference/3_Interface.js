"use strict";
// 변수 인터페이스
var wooSeok = {
    age: 10,
    name: "wooseok",
};
// 함수 인터페이스
function getUser(user) {
    console.log(user);
}
const seokmin = {
    age: 11,
    name: "seokmin",
};
getUser(seokmin);
var sum2;
sum2 = function (a, b) {
    return a + b;
};
var arr2 = ["a", "b", "c"];
var obj2 = {
    sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
};
Object.keys(obj2).forEach((v) => { });
var kim = {
    name: "doseok",
    age: 12,
    language: "react",
};
