/*
 * @lc app=leetcode id=3171 lang=javascript
 *
 * [3171] Find Subarray With Bitwise OR Closest to K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    let ans = Infinity;
    let cur = new Set();
    for (const x of nums) {
        const nxt = new Set([x]);
        for (const v of cur) nxt.add(v | x);
        for (const v of nxt) ans = Math.min(ans, Math.abs(v - k));
        cur = nxt;
        if (ans === 0) return 0;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(minimumDifference([1,2,4,5], 3) === 0);
console.log(minimumDifference([1,3,1,3], 2) === 1);
console.log(minimumDifference([1], 10) === 9);
console.log(minimumDifference([5], 5) === 0);
console.log(minimumDifference([1,2], 2) === 0);
