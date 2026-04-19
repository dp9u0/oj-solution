/*
 * @lc app=leetcode id=1414 lang=javascript
 *
 * [1414] Find the Minimum Number of Fibonacci Numbers Whose Sum Is K
 */

// @lc code=start
/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function(k) {
  const fibs = [1, 1];
  while (fibs[fibs.length - 1] < k) {
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  }
  let count = 0, remaining = k;
  for (let i = fibs.length - 1; i >= 0 && remaining > 0; i--) {
    if (fibs[i] <= remaining) {
      remaining -= fibs[i];
      count++;
    }
  }
  return count;
};
// @lc code=end

// TEST:
console.log(findMinFibonacciNumbers(7)); // 2
console.log(findMinFibonacciNumbers(10)); // 2
console.log(findMinFibonacciNumbers(19)); // 3
