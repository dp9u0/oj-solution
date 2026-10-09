/*
 * @lc app=leetcode.cn id=2333 lang=javascript
 *
 * [2333] 最小差值平方和
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k1
 * @param {number} k2
 * @return {number}
 */
var minSumSquareDiff = function(nums1, nums2, k1, k2) {
  const n = nums1.length;
  const d = new Array(n);
  let maxD = 0;
  for (let i = 0; i < n; i++) {
    d[i] = Math.abs(nums1[i] - nums2[i]);
    if (d[i] > maxD) maxD = d[i];
  }

  const k = k1 + k2;
  // cost(T): 把所有大于 T 的差值削到 T 需要的操作次数，随 T 单调不增
  const cost = (T) => {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      if (d[i] > T) sum += d[i] - T;
    }
    return sum;
  };

  // 找最小的 T 使 cost(T) <= k
  let lo = 0, hi = maxD;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (cost(mid) <= k) hi = mid;
    else lo = mid + 1;
  }
  const T = lo;

  let ans = 0;
  let cntAbove = 0;
  for (let i = 0; i < n; i++) {
    if (d[i] > T) {
      cntAbove++;
      ans += T * T;
    } else {
      ans += d[i] * d[i];
    }
  }

  // 剩余操作把处于 T 的元素削到 T-1（处于 T 的元素个数必大于剩余次数）
  if (T > 0) {
    const rest = k - cost(T);
    ans -= rest * (2 * T - 1);
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(minSumSquareDiff([1,2,3,4], [2,10,20,19], 0, 0)); // 579
console.log(minSumSquareDiff([1,4,10,12], [5,8,6,9], 1, 1)); // 43
console.log(minSumSquareDiff([2,2,2], [10,10,10], 5, 5)); // 66
console.log(minSumSquareDiff([1,1,1], [0,0,0], 1, 0)); // 2
console.log(minSumSquareDiff([5], [0], 3, 2)); // 0
console.log(minSumSquareDiff([10], [0], 0, 2)); // 64
console.log(minSumSquareDiff([0,0], [0,0], 100, 100)); // 0
