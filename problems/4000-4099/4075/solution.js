/*
 * @lc app=leetcode.cn id=4075 lang=javascript
 *
 * [4075] 最长有韧性的子数组 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function resilientSubarray(nums, k) {
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  const n = nums.length;
  let ans = 0;
  let i = 0;
  while (i < n) {
    const m = nums[i] % k;
    let j = i;
    while (j + 1 < n && nums[j + 1] % k === m) j++;
    const len = j - i + 1;
    if (m === 0) {
      ans = Math.max(ans, len);
    } else {
      const q = k / gcd(m, k);
      ans = Math.max(ans, 1 + q * Math.floor((len - 1) / q));
    }
    i = j + 1;
  }
  return ans;
}
// @lc code=end

// TEST:
console.log(resilientSubarray([2,4,6,3], 2) === 3);
console.log(resilientSubarray([1,4,7,1], 3) === 4);
console.log(resilientSubarray([5,5,4,8], 4) === 2);
console.log(resilientSubarray([7], 5) === 1);
console.log(resilientSubarray([3,3,3], 6) === 3);
console.log(resilientSubarray([1,2,3], 4) === 1);
