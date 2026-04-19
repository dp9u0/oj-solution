/*
 * @lc app=leetcode id=2731 lang=javascript
 *
 * [2731] Movement of Robots
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {string} s
 * @param {number} d
 * @return {number}
 */
var sumDistance = function(nums, s, d) {
  const MOD = 1e9 + 7;
  const n = nums.length;
  let pos = nums.map((p, i) => s[i] === 'R' ? p + d : p - d);
  pos.sort((a, b) => a - b);

  let sum = 0n;
  let prefix = 0n;
  for (let i = 0; i < n; i++) {
    sum = (sum + BigInt(i) * BigInt(pos[i]) - prefix) % BigInt(MOD);
    prefix += BigInt(pos[i]);
  }
  return Number(sum < 0n ? sum + BigInt(MOD) : sum);
};
// @lc code=end

// TEST:
console.log(sumDistance([-2,0,2], "RLL", 3)); // 8
console.log(sumDistance([1,0], "RL", 2)); // 5
console.log(sumDistance([0,0], "RL", 1)); // 2
