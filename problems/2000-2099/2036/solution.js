/*
 * @lc app=leetcode.cn id=2036 lang=javascript
 *
 * [2036] 最大交替子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumAlternatingSubarraySum = function(nums) {
    let even = -Infinity, odd = -Infinity, ans = -Infinity;
    for (const v of nums) {
        const nEven = Math.max(odd + v, v);
        const nOdd = even === -Infinity ? -Infinity : even - v;
        even = nEven;
        odd = nOdd;
        if (even > ans) ans = even;
        if (odd > ans) ans = odd;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maximumAlternatingSubarraySum([3,-1,1,2])); // 5
console.log(maximumAlternatingSubarraySum([2,2,2,2,2])); // 2
console.log(maximumAlternatingSubarraySum([1])); // 1
console.log(maximumAlternatingSubarraySum([-5])); // -5
console.log(maximumAlternatingSubarraySum([-1,-2,-3])); // 1 ([-1,-2] -> -1+2)
