/*
 * @lc app=leetcode id=2537 lang=javascript
 *
 * [2537] Count the Number of Good Subarrays
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function(nums, k) {
  const cnt = new Map();
  let pairs = 0, ans = 0, l = 0;

  for (let r = 0; r < nums.length; r++) {
    const c = cnt.get(nums[r]) || 0;
    pairs += c;
    cnt.set(nums[r], c + 1);

    while (pairs >= k) {
      ans += nums.length - r;
      const c2 = cnt.get(nums[l]);
      pairs -= c2 - 1;
      cnt.set(nums[l], c2 - 1);
      l++;
    }
  }

  return ans;
};
// @lc code=end

// TEST:
console.log(countGood([1,1,1,1,1], 10)); // 1
console.log(countGood([3,1,4,3,2,2,4], 2)); // 4
console.log(countGood([1,1,1,1], 3)); // 3
console.log(countGood([1,2,3,4], 1)); // 0
console.log(countGood([1,1], 1)); // 1
