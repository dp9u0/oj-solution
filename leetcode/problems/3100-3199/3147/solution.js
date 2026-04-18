/*
 * @lc app=leetcode id=3147 lang=javascript
 *
 * [3147] Taking Maximum Energy From the Mystic Dungeon
 */

// @lc code=start
/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
var maximumEnergy = function(energy, k) {
  const n = energy.length;
  let ans = -Infinity;
  for (let i = n - 1; i >= 0; i--) {
    if (i + k < n) energy[i] += energy[i + k];
    ans = Math.max(ans, energy[i]);
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(maximumEnergy([5,2,-10,-5,1], 3)); // 3
console.log(maximumEnergy([-2,-3,-1], 2)); // -1
console.log(maximumEnergy([1,2,3,4,5], 1)); // 15
console.log(maximumEnergy([5], 1)); // 5 (edge: k=n-1 but n=1 means k=0... hmm)
console.log(maximumEnergy([1,-2,3,-4,5], 2)); // 4
