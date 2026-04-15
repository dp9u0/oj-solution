/*
 * @lc app=leetcode id=2909 lang=javascript
 *
 * [2909] Minimum Sum of Mountain Triplets II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {
    let n = nums.length;
    let prefixMin = new Array(n);
    prefixMin[0] = nums[0];
    for (let i = 1; i < n; i++) prefixMin[i] = Math.min(prefixMin[i - 1], nums[i]);
    let suffixMin = new Array(n);
    suffixMin[n - 1] = nums[n - 1];
    for (let i = n - 2; i >= 0; i--) suffixMin[i] = Math.min(suffixMin[i + 1], nums[i]);
    let ans = Infinity;
    for (let j = 1; j < n - 1; j++) {
        if (prefixMin[j - 1] < nums[j] && suffixMin[j + 1] < nums[j]) {
            ans = Math.min(ans, prefixMin[j - 1] + nums[j] + suffixMin[j + 1]);
        }
    }
    return ans === Infinity ? -1 : ans;
};
// @lc code=end

// TEST:
console.log(minimumSum([8,6,1,5,3])); // 9
console.log(minimumSum([5,4,8,7,10,2])); // 13
console.log(minimumSum([6,5,4,3,4,5])); // -1
