// Promise를 깔끔하게 사용하는 방법이다.

// 1. async
// const fetchUser = async () => {
//   await delay(3000); // promise의 delay와 동일하다.
//   return "janghee";
// };

// 사실 이 코드랑 똑같은 기능을 한다.
// const fetchUser = () => {
//     return new Promise((resolve, reject) => {
//         resolve("janghee");
//     })
// }

const getApple = async () => {
  delay(1000);
  return "🍎";
};

const getBanana = async () => {
  delay(1000);
  return "🍌";
};

const getAvocado = async () => {
  delay(1000);
  return "🥑";
};

const pickFruits = async () => {
  const apple = getApple();
  const banana = getBanana();
  const avocado = getAvocado();
  return `${await apple} + ${await banana} + ${await avocado}`;
};

const pickAllFruites = async () => {
  return Promise.all([getApple(), getBanana(), getAvocado()]).then((result) =>
    result.join(" + ")
  );
};

const delay = (ms) => setTimeout(() => {}, ms);

// const user = fetchUser();
// 호출되었을 떄, 호출된 함수의 코드들을 실행시키며, 코드를 읽는 과정은 여기서 멈춘다.
// 만약 여기서 fetchUser가 소요시간이 길다면?
pickFruits().then(console.log);
pickAllFruites().then(console.log);
