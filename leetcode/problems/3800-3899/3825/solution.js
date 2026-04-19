/*
 * @lc app=leetcode id=3825 lang=javascript
 *
 * [3825] Longest Strictly Increasing Subsequence With Non-Zero Bitwise AND
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function(nums) {
    const lisLen = (arr) => {
        const tails = [];
        for (const x of arr) {
            let lo = 0, hi = tails.length;
            while (lo < hi) {
                const mid = (lo + hi) >> 1;
                if (tails[mid] < x) lo = mid + 1;
                else hi = mid;
            }
            tails[lo] = x;
        }
        return tails.length;
    };

    let result = 0;
    for (let b = 0; b < 31; b++) {
        const filtered = [];
        for (const x of nums) {
            if (x & (1 << b)) filtered.push(x);
        }
        if (filtered.length > 0) {
            result = Math.max(result, lisLen(filtered));
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(longestSubsequence([5, 4, 7]) === 2);
console.log(longestSubsequence([2, 3, 6]) === 3);
console.log(longestSubsequence([0, 1]) === 1);
console.log(longestSubsequence([1]) === 1);
console.log(longestSubsequence([0, 0, 0]) === 0);
console.log(longestSubsequence([1, 2, 4, 8, 16]) === 1);
