/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  return eval(s);
};

// TEST:
console.log(calculate("1 + 1"))
console.log(calculate(" 2-1 + 2 "))
console.log(calculate("(1+(4+5+2)-3)+(6+8)"))
