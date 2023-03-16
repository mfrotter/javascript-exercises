const add = function(...args) {
	return args.reduce(function (total, num) {
    return total + num;
  })
};

const subtract = function(...args) {
	return args.reduce(function (total, num) {
    return total - num;
  })
};

const sum = function(array) {
  if(array.length === 0){
    return 0;
  }
  const sum = array.reduce((total, item) => total + item); 
  return sum;
}
const multiply = function(array) {
  if(array.length === 0){
    return 0;
  }
  const mul = array.reduce((total, item) => total * item); 
  return mul;
}

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	if(a === 0) {
    return 1;
  }

  else {
    return (a * factorial(a - 1))
  }
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
