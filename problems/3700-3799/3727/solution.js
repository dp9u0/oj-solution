/*
 * @lc app=leetcode.cn id=3727 lang=javascript
 *
 * [3727] 最大交替平方和
 */

// @lc code=start
/**
 * 平方与符号无关，正位(偶数下标)共 ceil(n/2) 个，负位(奇数下标)共 floor(n/2) 个。
 * score = sum(正位平方) - sum(负位平方) = 2 * sum(正位平方) - total，
 * 故取平方值最大的 ceil(n/2) 个放正位即可。
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
  const n = nums.length;
  const negativeCount = Math.floor(n / 2);
  const squares = nums.map((x) => x * x).sort((a, b) => a - b);
  let score = 0;
  for (let i = 0; i < n; i++) {
    score += i < negativeCount ? -squares[i] : squares[i];
  }
  return score;
};
// @lc code=end

// TEST:
console.log(maxAlternatingSum([1, 2, 3]) === 12);
console.log(maxAlternatingSum([1, -1, 2, -2, 3, -3]) === 16);
console.log(maxAlternatingSum([5]) === 25);
console.log(maxAlternatingSum([-7, 2]) === 49 - 4);
console.log(maxAlternatingSum([0, 0, 0]) === 0);
console.log(maxAlternatingSum([-4, -3, -2, -1]) === 16 + 9 - 4 - 1);
console.log(maxAlternatingSum([40000, -40000, 40000]) === 2 * 1600000000 - 1600000000);
