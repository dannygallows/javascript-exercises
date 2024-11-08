const add = function(a, b) {
return a + b	
};

const subtract = function(a, b) {
return a - b	
};

const sum = function(array) {
return array.reduce((sum, currentItem) => {
return sum + currentItem;
}, 0	
)};

const multiply = function(array) {
  return array.reduce((total, currentItem) => {
  return total * currentItem;
  }, 1	
  )};


const power = function(x, n) {
  let total = 1;
  for (let i = 0; i < n ; i++) {
    total *= x;
  }
  return total;
};

const factorial = function(x) {
  let total = 1;
  for (let i = 0; i < x; i++)
  {
    total *= x - i; 
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
