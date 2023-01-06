# TypeScript: JavaScript with syntax for types.

## Getting Started - Typescript

- ts 확장자를 브라우저가 인식할 수 있도록 js로 변경해야 하기 때문에 컴파일(Compile)과정을 거쳐야 함 컴파일 과정을 자동화 할 수 있는 webpack을 사용하기도 함.

1. index.ts 파일 생성
2. `npm i typescript`
3. 터미널에 tsc index.ts 실행
4. index.js 로 변경 확인

## 타입스크립트 왜 쓸까?

- [타입스크립트 공식문서 핸드북](https://www.typescriptlang.org/docs/handbook/2/basic-types.html) 공식 문서 내용을 정리했습니다.

- ### The Basics

  - 예를들어, `message` 라는 변수가 있다고 가정을 하고 이 변수에 사용할 수 있는 메서드를 생각해봅시다

    ```javascript
    message.toLowerCase();

    // 혹은 message 호출하기
    message();
    ```

    하지만 이 `message`의 값을 모른다면 위의 코드들이 정확하게 동작하는지 알수 없습니다  
    `message`의 값이 어떤 값이냐에 따라 달라지게 됩니다.  
    `message` 에 다음과 같이 정의를 했다면

    ```javascript
    const message = "Hello World";
    ```

    `toLowerCase()`의 동작은 하겠지만 `message`의 호출은 불가능합니다.

    string 이나 number 같은 원시 값의 경우 `typeof` 를 이용해 방지를 할수 있다고 하지만,  
    함수같은 유형에서는 구별할 방법이 없습니다.

    ```javascript
    function fn(x) {
      return x.flip();
    }
    ```

    위의 함수는 전달된 인자 `x`가 flip()을 가지고 있어야 동작을 하는것을 알 수 있습니다.  
    하지만 함수 `fn()`이 어떤 값을 가지고 동작을 수행하고 있는건지 알 수 있는 방법은  
    호출하고 결과를 보는것 입니다.  
    이러한 방법은 코드를 실행하기전 예측을 어렵게 만듭니다.

    이러한 점을 방지하기 위하여 정적 타입 시스템을 사용 할 수 있습니다

- ### Static Type Check

  - 누구나 그렇듯이 에러를 보는일은 즐겁지 않습니다. 코드를 수정하고 오류를 즉시 발견하면 좋겠지만  
    모든 일이 그렇지만은 않듯이, 충분한 테스트를 거치지 않아 잠재적인 오류를 발견하지 못할 수도 있습니다.  
    코드를 실행하기전 오류를 잡아줄 수 있는것이 바로 정적 타입 체크입니다.

    ```javascript
    const message = "Hello World!";

    message();
    //This expression is not callable. Type 'String' has no call signatures.
    ```

    위의 예시를 Typescript 로 실행한다면 위와 같은 에러를 미리 볼 수 있고 방지하게 됩니다.

- ### Non-Exeption Failures

  - Javascript 의 경우 객체의 존재하지 않는 값에 대해 접근할 경우 오류가 아닌 `undefined`를 반환 합니다.

  ```javascript
  //javascript
  const user = {
    name: "Wooseok",
    age: 24,
  };
  user.location; // undefined

  //typescript
  const user = {
    name: "Wooseok",
    age: 24,
  };
  user.location; //Property 'location' does not exist on type '{ name: string; age: number; }'.
  ```

  이 외에도 겉으로 잘 드러나지 않는 버그들을 발견합니다.  
  예를 들면 오타나,

  ```javascript
  const announcement = "Hello World!";

  // 오타가 있는지 알아보기 쉬운가요?
  announcement.toLocaleLowercase();
  announcement.toLocalLowerCase();

  // 아마도 이렇게 적었을 겁니다
  announcement.toLocaleLowerCase();
  ```

  호출되지 않은 함수

  ```javascript
  function flipCoin() {
    // 본래 의도는 Math.random()
    return Math.random < 0.5;
    // Operator '<' cannot be applied to types '() => number' and 'number'.
  }
  ```

  기본적인 논리 오류 등이 있습니다.

  ```javascript
  const value = Math.random() < 0.5 ? "a" : "b";

  if (value !== "a") {
    // ...
  } else if (value === "b") {
    //This condition will always return 'false' since the types '"a"' and '"b"' have no overlap.
    // 이 블록은 실행되지 않겠군요
  }
  ```
