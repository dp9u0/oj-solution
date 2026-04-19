/*
 * @lc app=leetcode id=3409 lang=javascript
 *
 * [3409] Longest Subsequence With Decreasing Adjacent Difference
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function(nums) {
    const V = 300, D = 301;
    // dp[v][d] = max length of subseq ending at value v with last diff d
    // d=300 means length-1 subsequence (no diff constraint yet)
    const dp = Array.from({ length: V + 1 }, () => new Int32Array(D + 1));
    const sfx = Array.from({ length: V + 1 }, () => new Int32Array(D + 1));

    let result = 0;

    for (const x of nums) {
        const cur = dp[x].slice();

        for (let v = 1; v <= V; v++) {
            const diff = Math.abs(x - v);
            const best = sfx[v][diff];
            if (best > 0) {
                cur[diff] = Math.max(cur[diff], best + 1);
            }
        }
        cur[D] = Math.max(cur[D], 1);

        dp[x] = cur;

        // Recompute suffix max for value x
        let sm = 0;
        for (let d = D; d >= 0; d--) {
            sm = Math.max(sm, cur[d]);
            sfx[x][d] = sm;
        }

        result = Math.max(result, sm);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(longestSubsequence([16,6,3])); // 3
console.log(longestSubsequence([6,5,3,4,2,1])); // 4
console.log(longestSubsequence([10,20,10,19,10,20])); // 5
console.log(longestSubsequence([1,2,3,4])); // 4
console.log(longestSubsequence([1,1,1])); // 3
