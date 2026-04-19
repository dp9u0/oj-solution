/*
 * @lc app=leetcode id=3164 lang=javascript
 *
 * [3164] Find the Number of Good Pairs II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, k) {
    const cnt1 = {};
    for (const x of nums1) {
        cnt1[x] = (cnt1[x] || 0) + 1;
    }

    const cnt2 = {};
    for (const x of nums2) {
        const val = x * k;
        cnt2[val] = (cnt2[val] || 0) + 1;
    }

    let result = 0;
    const seen = new Set();
    for (const x of Object.keys(cnt1).map(Number)) {
        // enumerate all factors of x
        for (let d = 1; d * d <= x; d++) {
            if (x % d !== 0) continue;
            if (cnt2[d] !== undefined) {
                result += cnt1[x] * cnt2[d];
            }
            const other = x / d;
            if (other !== d && cnt2[other] !== undefined) {
                result += cnt1[x] * cnt2[other];
            }
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(numberOfPairs([1,3,4], [1,3,4], 1)); // 5
console.log(numberOfPairs([1,2,4,12], [2,4], 3)); // 2
console.log(numberOfPairs([2,4,6,8], [1,2], 2)); // 4
