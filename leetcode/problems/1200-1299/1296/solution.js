/*
 * @lc app=leetcode id=1296 lang=javascript
 *
 * [1296] Divide Array in Sets of K Consecutive Numbers
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
  if (nums.length % k !== 0) return false;

  const count = new Map();
  for (const num of nums) {
    count.set(num, (count.get(num) || 0) + 1);
  }

  const sorted = [...count.keys()].sort((a, b) => a - b);

  for (const x of sorted) {
    const c = count.get(x);
    if (c > 0) {
      for (let i = 1; i < k; i++) {
        const next = count.get(x + i);
        if (!next || next < c) return false;
        count.set(x + i, next - c);
      }
    }
  }

  return true;
};
// @lc code=end

// TEST:
console.log(isPossibleDivide([1,2,3,3,4,4,5,6], 4)); // true
console.log(isPossibleDivide([3,2,1,2,3,4,3,4,5,9,10,11], 3)); // true
console.log(isPossibleDivide([1,2,3,4], 3)); // false
