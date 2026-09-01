/*
 * @lc app=leetcode id=659 lang=javascript
 *
 * [659] Split Array into Consecutive Subsequences
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
  const freq = new Map();
  const need = new Map();

  for (const num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  for (const x of nums) {
    if (freq.get(x) === 0) continue;

    if ((need.get(x) || 0) > 0) {
      freq.set(x, freq.get(x) - 1);
      need.set(x, need.get(x) - 1);
      need.set(x + 1, (need.get(x + 1) || 0) + 1);
    } else if ((freq.get(x) || 0) > 0 && (freq.get(x + 1) || 0) > 0 && (freq.get(x + 2) || 0) > 0) {
      freq.set(x, freq.get(x) - 1);
      freq.set(x + 1, freq.get(x + 1) - 1);
      freq.set(x + 2, freq.get(x + 2) - 1);
      need.set(x + 3, (need.get(x + 3) || 0) + 1);
    } else {
      return false;
    }
  }

  return true;
};
// @lc code=end

// TEST:
console.log(isPossible([1,2,3,3,4,5])); // true
console.log(isPossible([1,2,3,3,4,4,5,5])); // true
console.log(isPossible([1,2,3,4,4,5])); // false
