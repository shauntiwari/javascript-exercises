const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  return arr.reduce((sum, x) => sum + x, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, x) => product * x, 1);
};

const power = function(base, exponent) {
  return base ** exponent;
};

const factorial = function(num) {
  let total = 1;
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
