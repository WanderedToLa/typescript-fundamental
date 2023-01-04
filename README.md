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
