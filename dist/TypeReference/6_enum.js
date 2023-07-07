"use strict";
/**
 * @description 숫자형 이넘
 */
var ShoesNumberList;
(function (ShoesNumberList) {
    ShoesNumberList[ShoesNumberList["Jordan"] = 0] = "Jordan";
    ShoesNumberList[ShoesNumberList["Nike"] = 1] = "Nike";
})(ShoesNumberList || (ShoesNumberList = {}));
const myShoeNumber = ShoesNumberList.Jordan;
console.log(myShoeNumber); // 0
/**
 * @description 문자형 이넘
 */
var ShoesStringList;
(function (ShoesStringList) {
    ShoesStringList["Jordan"] = "\uC9D0 \uB808\uB4DC";
    ShoesStringList["Nike"] = "\uBE14\uB808\uC774\uC80077";
})(ShoesStringList || (ShoesStringList = {}));
const myShoeString = ShoesStringList.Jordan;
console.log(myShoeString); // 짐 레드
//ex
var Answer;
(function (Answer) {
    Answer["YES"] = "Y";
    Answer["NO"] = "N";
})(Answer || (Answer = {}));
function AskQuestion(answer) {
    answer === Answer.YES ? console.log("정답") : console.log("오답");
}
AskQuestion(Answer.YES);
