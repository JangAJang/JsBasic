Array.prototype.filterSum = function (callback) {
  return this.filter((value) => callback(value)).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};
const isEven = (value) => value % 2 === 0;

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array.filterSum(isEven));
