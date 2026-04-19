/*
 * @lc app=leetcode id=3785 lang=javascript
 *
 * [3785] Minimum Swaps to Avoid Forbidden Values
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} forbidden
 * @return {number}
 */
var minSwaps = function(nums, forbidden) {
  const n = nums.length;

  // Feasibility: for each value v, count_v(nums) + count_v(forbidden) <= n
  const cnt = new Map();
  for (const v of nums) cnt.set(v, (cnt.get(v) || 0) + 1);
  for (const v of forbidden) {
    if (cnt.has(v)) {
      cnt.set(v, cnt.get(v) - 1);
    }
  }
  // Actually, let me redo this properly
  const numCnt = new Map();
  const forbCnt = new Map();
  for (const v of nums) numCnt.set(v, (numCnt.get(v) || 0) + 1);
  for (const v of forbidden) forbCnt.set(v, (forbCnt.get(v) || 0) + 1);

  for (const [v, c] of numCnt) {
    if (c + (forbCnt.get(v) || 0) > n) return -1;
  }

  // Count conflicts and their value frequencies
  const conflictCnt = new Map();
  let k = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === forbidden[i]) {
      conflictCnt.set(nums[i], (conflictCnt.get(nums[i]) || 0) + 1);
      k++;
    }
  }

  if (k === 0) return 0;

  let cmax = 0;
  for (const c of conflictCnt.values()) {
    if (c > cmax) cmax = c;
  }

  return Math.max((k + 1) >> 1, cmax);
};
// @lc code=end

// TEST:
console.log(minSwaps([1,2,3], [3,2,1])); // 1
console.log(minSwaps([4,6,6,5], [4,6,5,5])); // 2
console.log(minSwaps([7,7], [8,7])); // -1
console.log(minSwaps([1,2], [2,1])); // 0
console.log(minSwaps([1,1,2,2], [1,1,2,2])); // 2
console.log(minSwaps([1], [1])); // -1
