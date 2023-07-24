"use strict";

// 자바스크립트는 호이스팅된 후에, 코드가 나타나는 순서대로 실행된다.

console.log(1);
setTimeout(function () {
  console.log(2);
}, 0);
console.log(3);
