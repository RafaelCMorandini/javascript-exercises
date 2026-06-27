const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let total = 0;

  arr.forEach((element) => {
    total += element;
  });

  return total;
};

const multiply = function (arr) {
  let total = 1;

  arr.forEach((element) => {
    total *= element;
  });

  return total;
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (a) {
  let product = 1;
  for (let i = a; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
