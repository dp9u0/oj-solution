/*
 * @lc app=leetcode id=3859 lang=javascript
 *
 * [3859] Count Subarrays With K Distinct Integers
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} m
 * @return {number}
 */
var countSubarrays = function(nums, k, m) {
  const n = nums.length;

  // rMax[l]: largest r such that [l,r] has at most k distinct values
  const rMax = new Int32Array(n);
  const f1 = {};
  let d1 = 0, r1 = -1;
  for (let l = 0; l < n; l++) {
    while (r1 + 1 < n && (d1 < k || f1[nums[r1 + 1]] > 0)) {
      r1++;
      if (!f1[nums[r1]]) { f1[nums[r1]] = 0; d1++; }
      f1[nums[r1]]++;
    }
    rMax[l] = r1;
    f1[nums[l]]--;
    if (f1[nums[l]] === 0) { d1--; delete f1[nums[l]]; }
  }

  // rMin: sliding window for exactly k distinct, each >= m times
  const f2 = {};
  let d2 = 0, good = 0, r2 = -1, result = 0;

  for (let l = 0; l < n; l++) {
    while (r2 + 1 < n && d2 <= k && !(d2 === k && good === k)) {
      r2++;
      const v = nums[r2];
      if (!f2[v]) { f2[v] = 0; d2++; }
      f2[v]++;
      if (f2[v] === m) good++;
    }
    if (d2 === k && good === k && r2 <= rMax[l]) {
      result += rMax[l] - r2 + 1;
    }
    const v = nums[l];
    if (f2[v] === m) good--;
    f2[v]--;
    if (f2[v] === 0) { d2--; delete f2[v]; }
  }

  return result;
};
// @lc code=end

// TEST:
console.log(countSubarrays([1,2,1,2,2], 2, 2) === 2);
console.log(countSubarrays([3,1,2,4], 2, 1) === 3);
console.log(countSubarrays([1,1,1,1], 1, 2) === 6);
console.log(countSubarrays([1,2,3], 1, 1) === 3);
console.log(countSubarrays([1,1,2,2], 2, 2) === 1);
console.log(countSubarrays([1], 1, 1) === 1);
