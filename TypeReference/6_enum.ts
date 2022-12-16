/**
 * @description 숫자형 이넘
 */

enum ShoesNumberList {
  Jordan,
  Nike,
}
const myShoeNumber = ShoesNumberList.Jordan;
console.log(myShoeNumber); // 0

/**
 * @description 문자형 이넘
 */

enum ShoesStringList {
  Jordan = "짐 레드",
  Nike = "블레이저77",
}
const myShoeString = ShoesStringList.Jordan;
console.log(myShoeString); // 짐 레드

//ex
enum Answer {
  YES = "Y",
  NO = "N",
}

function AskQuestion(answer: Answer) {
  answer === Answer.YES ? console.log("정답") : console.log("오답");
}
AskQuestion(Answer.YES);
