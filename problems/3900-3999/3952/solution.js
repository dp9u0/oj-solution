/*
 * @lc app=leetcode id=3952 lang=javascript
 *
 * [3952] Maximum Total Value of Covered Indices
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {string} s
 * @return {number}
 */
var maxTotal = function(nums, s) {
    const n = nums.length;
    const NEG = -1;
    // dp0: token i free; dp1: token i moved to i-1 (only valid when s[i] === '1')
    let dp0 = 0;
    let dp1 = NEG;
    for (let i = 0; i < n; i++) {
        let ndp0 = Math.max(dp0, dp1);              // skip position i
        if (s[i] === '1' && dp0 !== NEG) {          // token i stays to cover i
            ndp0 = Math.max(ndp0, dp0 + nums[i]);
        }
        let ndp1 = NEG;
        if (i + 1 < n && s[i + 1] === '1') {        // token i+1 moves left to cover i
            ndp1 = Math.max(dp0, dp1) + nums[i];
        }
        dp0 = ndp0;
        dp1 = ndp1;
    }
    return dp0;
};
// @lc code=end

// TEST:
console.log(maxTotal([9, 2, 6, 1], '0101')); // 15
console.log(maxTotal([5, 1, 4], '001'));     // 4
console.log(maxTotal([9, 3, 5], '011'));     // 14
console.log(maxTotal([7], '1'));             // 7
console.log(maxTotal([7], '0'));             // 0
console.log(maxTotal([1, 100, 1, 100], '1111')); // 202 (all stay, cover all)
console.log(maxTotal([100, 1, 1, 100], '0110')); // 101 (token1->0, token2 stays at 2)
console.log(maxTotal([10, 1, 1, 10], '0111'));   // 21 (token1->0, token2 & token3 stay)
