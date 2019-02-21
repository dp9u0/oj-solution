/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  let results = [];
  for (let i = 0; i < (1 << n); i++) {
    results.push(i ^ (i >> 1));
  }
  return results;
};

/**
// TEST:
console.log(grayCode(0))
console.log(grayCode(1))
console.log(grayCode(2))
console.log(grayCode(3))
console.log(grayCode(4))
console.log(grayCode(5))
console.log(grayCode(6))
*/