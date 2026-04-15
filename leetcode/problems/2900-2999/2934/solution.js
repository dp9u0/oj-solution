/*
 * @lc app=leetcode id=2934 lang=javascript
 *
 * [2934] Minimum Operations to Maximize Last Elements in Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function(nums1, nums2) {
    const n = nums1.length;

    const solve = (t1, t2) => {
        let swaps = 0;
        for (let i = 0; i < n - 1; i++) {
            const a = nums1[i], b = nums2[i];
            if (a <= t1 && b <= t2) {
                // no swap needed
            } else if (b <= t1 && a <= t2) {
                swaps++;
            } else {
                return Infinity;
            }
        }
        return swaps;
    };

    // Case 1: don't swap last
    const ans1 = solve(nums1[n - 1], nums2[n - 1]);
    // Case 2: swap last
    const ans2 = solve(nums2[n - 1], nums1[n - 1]);

    const ans = Math.min(ans1, ans2 === Infinity ? ans1 : ans2 + 1);
    return ans === Infinity ? -1 : ans;
};
// @lc code=end

// TEST:
console.log(minOperations([1,2,7], [4,5,3]));            // 1
console.log(minOperations([2,3,4,5,9], [8,8,4,4,4]));   // 2
console.log(minOperations([1,5,4], [2,5,3]));            // -1
console.log(minOperations([1], [1]));                    // 0
