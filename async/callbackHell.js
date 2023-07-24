"use strinct";

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (isAllowedUser(id, password)) {
        onSuccess(id);
        return;
      }
      onError(new Error("Member Not Found"));
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (isEllie(user.id, user.password)) {
        onSuccess({ name: "ellie", role: "admin" });
        return;
      }
      if (isCoder(user.id, user.password)) {
        onSuccess({ name: "coder", role: "user" });
        return;
      }
      onError(new Error("Member Not Found"));
    });
  }
}

const userStorage = new UserStorage();
const id = "ellie";
const password = "dream";
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles({ id: id, password: password }, onSuccess, onError);
  },
  () => onError(e)
);

const isAllowedUser = (id, password) =>
  isEllie(id, password) || isCoder(id, password);
const isEllie = (id, password) => id === "ellie" && password === "dream";
const isCoder = (id, password) => id === "coder" && password == "academy";
const onSuccess = (user) =>
  console.log(`hello ${user.name}, you are ${user.role}`);
const onError = (e) => {
  throw e;
};

//콜백체인의 문제점
// 콜백 함수에서 다른 콜백이 존재하고, 이런 연쇄작용이 계속된다면 문제가 뭘까?
// 1. 가독성이 떨어진다.
// 2. 디버깅이 어려워진다.
// 3. 유지보수의 어려움이 존재한다.
