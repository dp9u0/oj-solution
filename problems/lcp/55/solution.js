/*
 * @lc app=leetcode.cn id=LCP 55 lang=javascript
 *
 * [LCP 55] 采集果实
 */

// @lc code=start
/**
 * @param {number[]} time
 * @param {number[][]} fruits
 * @param {number} limit
 * @return {number}
 */
var getMinimumTime = function(time, fruits, limit) {
  let total = 0
  for (const [type, num] of fruits) {
    total += Math.ceil(num / limit) * time[type]
  }
  return total
};
// @lc code=end

// TEST:
console.log(getMinimumTime([2, 3, 2], [[0, 2], [1, 4], [2, 1]], 3)) // 10
console.log(getMinimumTime([1], [[0, 3], [0, 5]], 2)) // 5
console.log(getMinimumTime([1, 2], [[0, 1], [1, 1], [0, 1]], 100)) // 1+2+1=4
console.log(getMinimumTime([5], [[0, 10], [0, 9]], 3)) // ceil(10/3)=4*5=20, ceil(9/3)=3*5=15 -> 35
console.log(getMinimumTime([7], [[0, 1]], 1)) // 7

