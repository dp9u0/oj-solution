/*
 * @lc app=leetcode id=3411 lang=javascript
 *
 * [3411] Maximum Subarray With Equal Products
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxLength = function(nums) {
  const n = nums.length;
  // Key insight: prod == lcm * gcd iff all non-1 elements are pairwise coprime
  // (for length >= 3; length 2 is always valid)
  // Use bitmask for prime factors: 2→1, 3→2, 5→4, 7→8
  const getMask = (x) => {
    let m = 0;
    if (x % 2 === 0) m |= 1;
    if (x % 3 === 0) m |= 2;
    if (x % 5 === 0) m |= 4;
    if (x % 7 === 0) m |= 8;
    return m;
  };

  let result = 2; // any 2-element subarray is always valid

  for (let i = 0; i < n; i++) {
    let usedMask = 0;
    for (let j = i; j < n; j++) {
      const m = getMask(nums[j]);
      if (m & usedMask) break;
      usedMask |= m;
      result = Math.max(result, j - i + 1);
    }
  }

  return result;
};
// @lc code=end

// TEST:
console.log(maxLength([1,2,1,2,1,1,1])); // 5
console.log(maxLength([2,3,4,5,6])); // 3
console.log(maxLength([1,2,3,1,4,5,1])); // 5
