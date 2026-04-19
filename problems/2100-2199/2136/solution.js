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
  const n = plantTime.length;
  const seeds = Array.from({ length: n }, (_, i) => i);
  seeds.sort((a, b) => growTime[b] - growTime[a]);

  let result = 0;
  let cumPlant = 0;

  for (const i of seeds) {
    cumPlant += plantTime[i];
    result = Math.max(result, cumPlant + growTime[i]);
  }

  return result;
};
// @lc code=end

// TEST:
console.log(earliestFullBloom([1, 4, 3], [2, 3, 1])); // 9
console.log(earliestFullBloom([1, 2, 3, 2], [2, 1, 2, 1])); // 9
console.log(earliestFullBloom([1], [1])); // 2
