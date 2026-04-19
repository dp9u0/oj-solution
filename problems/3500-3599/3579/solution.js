/*
 * @lc app=leetcode id=3579 lang=javascript
 *
 * [3579] Minimum Steps to Convert String with Operations
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minOperations = function(word1, word2) {
    const n = word1.length;
    const a = word1, b = word2;

    function helper(l, r, rev) {
        const cnt = new Map();
        let mismatch = 0;
        for (let p = l; p <= r; p++) {
            const s = rev ? a[l + r - p] : a[p];
            const t = b[p];
            if (s !== t) {
                mismatch++;
                const key = s + t;
                cnt.set(key, (cnt.get(key) || 0) + 1);
            }
        }
        let swaps = 0;
        for (const [key, c] of cnt) {
            if (key[0] < key[1]) {
                const comp = key[1] + key[0];
                if (cnt.has(comp)) swaps += Math.min(c, cnt.get(comp));
            }
        }
        return mismatch - swaps;
    }

    function cost(l, r) {
        return Math.min(helper(l, r, false), 1 + helper(l, r, true));
    }

    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            dp[i] = Math.min(dp[i], dp[j] + cost(j, i - 1));
        }
    }
    return dp[n];
};
// @lc code=end

// TEST:
console.log(minOperations('abcdf', 'dacbe')); // 4
console.log(minOperations('abceded', 'baecfef')); // 4
console.log(minOperations('abcdef', 'fedabc')); // 2
console.log(minOperations('a', 'a')); // 0
console.log(minOperations('a', 'b')); // 1
console.log(minOperations('ab', 'ba')); // 1
