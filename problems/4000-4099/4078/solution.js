/*
 * @lc app=leetcode.cn id=4078 lang=javascript
 *
 * [4078] 连续三项斐波那契数之和
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
function threeFibonacciSum(n) {
  if (n % 2 !== 0) return false;
  let a = 0;
  let b = 1;
  while (b * 2 < n) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b * 2 === n;
}
// @lc code=end

// TEST:
console.log(threeFibonacciSum(16) === true);
console.log(threeFibonacciSum(8) === false);
console.log(threeFibonacciSum(2) === true);
console.log(threeFibonacciSum(1) === false);
console.log(threeFibonacciSum(4) === true);
console.log(threeFibonacciSum(12) === false);
console.log(threeFibonacciSum(10) === true);
