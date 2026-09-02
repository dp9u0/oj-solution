/*
 * @lc app=leetcode.cn id=LCR 038 lang=javascript
 *
 * [LCR 038] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  const n = temperatures.length;
  const res = new Array(n).fill(0);
  const stack = []; // indices with strictly greater temp (right to left)
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && temperatures[stack[stack.length - 1]] <= temperatures[i]) {
      stack.pop();
    }
    if (stack.length) res[i] = stack[stack.length - 1] - i;
    stack.push(i);
  }
  return res;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.deepStrictEqual(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]), [1, 1, 4, 2, 1, 1, 0, 0]);
assert.deepStrictEqual(dailyTemperatures([30, 40, 50, 60]), [1, 1, 1, 0]);
assert.deepStrictEqual(dailyTemperatures([30, 60, 90]), [1, 1, 0]);
assert.deepStrictEqual(dailyTemperatures([1]), [0]);
assert.deepStrictEqual(dailyTemperatures([100, 90, 80]), [0, 0, 0]);
assert.deepStrictEqual(dailyTemperatures([89, 62, 70, 58, 47, 47, 46, 76, 100, 70]), [8, 1, 5, 4, 3, 2, 1, 1, 0, 0]);

console.log('All tests passed!');
console.log('dailyTemperatures([73,74,75,71,69,72,76,73]) =', JSON.stringify(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])));
