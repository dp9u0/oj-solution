/*
 * @lc app=leetcode id=2136 lang=javascript
 *
 * [2136] Earliest Possible Day of Full Bloom
 */

// @lc code=start
/**
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 */
var earliestFullBloom = function(plantTime, growTime) {
  const order = plantTime.map((_, i) => i).sort((a, b) => growTime[b] - growTime[a]);
  let ans = 0;
  let cum = 0;
  for (const i of order) {
    cum += plantTime[i];
    ans = Math.max(ans, cum + growTime[i]);
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(earliestFullBloom([1, 4, 3], [2, 3, 1]) === 9);
console.log(earliestFullBloom([1, 2, 3, 2], [2, 1, 2, 1]) === 9);
console.log(earliestFullBloom([1], [1]) === 2);
console.log(earliestFullBloom([2, 1], [3, 1]) === 5);
console.log(earliestFullBloom([1], [100]) === 101);
console.log(earliestFullBloom([3, 2, 1], [1, 1, 1]) === 7);
console.log(earliestFullBloom([5, 1], [1, 9]) === 10);
