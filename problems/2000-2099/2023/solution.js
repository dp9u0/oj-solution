/*
 * @lc app=leetcode id=2023 lang=javascript
 *
 * [2023] Number of Pairs of Strings With Concatenation Equal to Target
 */

// @lc code=start
/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
var numOfPairs = function(nums, target) {
  const map = new Map();
  for (const s of nums) {
    map.set(s, (map.get(s) || 0) + 1);
  }

  let result = 0;
  for (const [s, cnt] of map) {
    if (!target.startsWith(s)) continue;
    const suffix = target.slice(s.length);
    if (!map.has(suffix)) continue;
    if (s === suffix) {
      result += cnt * (cnt - 1);
    } else {
      result += cnt * map.get(suffix);
    }
  }

  return result;
};
// @lc code=end

// TEST:
console.log(numOfPairs(['777','7','77','77'], '7777')); // 4
console.log(numOfPairs(['123','4','12','34'], '1234')); // 2
console.log(numOfPairs(['1','1','1'], '11')); // 6
