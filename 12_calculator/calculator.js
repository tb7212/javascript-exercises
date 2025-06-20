const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((sum, item) => sum + item, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, num) => product * num, 1);
};

const power = function(num, exponent) {
	return Math.pow(num, exponent);
};

const factorial = function(num) {
  let product = 1;
	for(let i = 1; i <= num; i++){
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
  factorial
};
