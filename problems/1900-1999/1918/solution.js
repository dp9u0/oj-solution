/*
 * @lc app=leetcode.cn id=1918 lang=javascript
 *
 * [1918] 第 K 小的子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var kthSmallestSubarraySum = function(nums, k) {
    const countAtMost = (s) => {
        let cnt = 0, sum = 0, l = 0;
        for (let r = 0; r < nums.length; r++) {
            sum += nums[r];
            while (sum > s) {
                sum -= nums[l];
                l++;
            }
            cnt += r - l + 1;
        }
        return cnt;
    };
    let lo = Math.min(...nums), hi = nums.reduce((a, b) => a + b, 0);
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (countAtMost(mid) >= k) hi = mid;
        else lo = mid + 1;
    }
    return lo;
};
// @lc code=end

// TEST:
console.log(kthSmallestSubarraySum([2,1,3], 4)); // 3
console.log(kthSmallestSubarraySum([3,3,5,5], 7)); // 10
console.log(kthSmallestSubarraySum([1], 1)); // 1
console.log(kthSmallestSubarraySum([5,5], 3)); // 10
console.log(kthSmallestSubarraySum([4,2,1], 6)); // 7 (sorted sums: 1,2,3,4,6,7)
