"use strinct";

const { resolve } = require("path");

// Promise라는 객체로 성공시에 janghee를 반환한다.
const promise = new Promise((resolve, reject) => {
  // 여기에서 해야 할 일이 많을 경우, 비동기적으로 처리할 수 있다.
  console.log("doing something");
  setTimeout(() => {
    // resolve("janghee");
    reject(new Error("No Network"));
  }, 0);
});

// Consumer는 then, catch, finally로 처리한다.
promise
  .then((value) => {
    // value === promise에서 Resolve한 데이터
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally"); // 성공이던 실패던 해당 기능이 수행된다.
  });

const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

// Promise를 then으로 체이닝할 수 있다.
fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 2)
  .then((num) => num * 2)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));
