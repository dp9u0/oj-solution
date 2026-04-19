/*
 * @lc app=leetcode id=1818 lang=javascript
 *
 * [1818] Minimum Absolute Sum Difference
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minAbsoluteSumDiff = function(nums1, nums2) {
  const MOD = 1e9 + 7;
  const n = nums1.length;
  const sorted = [...nums1].sort((a, b) => a - b);

  let sum = 0;
  let bestGain = 0;

  const bisectLeft = (arr, target) => {
    let lo = 0, hi = arr.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (arr[mid] < target) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  };

  for (let i = 0; i < n; i++) {
    const diff = Math.abs(nums1[i] - nums2[i]);
    sum = (sum + diff) % MOD;

    const pos = bisectLeft(sorted, nums2[i]);
    if (pos < n) bestGain = Math.max(bestGain, diff - Math.abs(sorted[pos] - nums2[i]));
    if (pos > 0) bestGain = Math.max(bestGain, diff - Math.abs(sorted[pos - 1] - nums2[i]));
  }

  return (sum - bestGain + MOD) % MOD;
};
// @lc code=end

// TEST:
console.log(minAbsoluteSumDiff([1,7,5], [2,3,5])); // 3
console.log(minAbsoluteSumDiff([2,4,6,8,10], [2,4,6,8,10])); // 0
console.log(minAbsoluteSumDiff([1,10,4,4,2,7], [9,3,5,1,7,4])); // 20
console.log(minAbsoluteSumDiff([1,1], [1,100])); // 99
console.log(minAbsoluteSumDiff([100], [100])); // 0
