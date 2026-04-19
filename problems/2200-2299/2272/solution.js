/*
 * @lc app=leetcode id=2272 lang=javascript
 *
 * [2272] Substring With Largest Variance
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var largestVariance = function(s) {
    const unique = [...new Set(s)];
    let ans = 0;

    for (const major of unique) {
        for (const minor of unique) {
            if (major === minor) continue;
            // major = +1, minor = -1, need at least one minor
            let f0 = 0, f1 = -Infinity;
            for (const c of s) {
                if (c === major) {
                    f1 = f1 !== -Infinity ? f1 + 1 : -Infinity;
                    f0 = Math.max(f0 + 1, 0);
                } else if (c === minor) {
                    f1 = Math.max(f1 - 1, f0 - 1);
                    f0 = Math.max(f0 - 1, 0);
                }
                ans = Math.max(ans, f1);
            }
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(largestVariance("aababbb")); // 3
console.log(largestVariance("abcde"));   // 0
console.log(largestVariance("aaaa"));    // 0
console.log(largestVariance("abababb")); // 3
console.log(largestVariance("lripaa"));  // check
console.log(largestVariance("a"));       // 0
