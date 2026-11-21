/*
 * @lc app=leetcode.cn id=2052 lang=javascript
 *
 * [2052] 将句子分隔成行的最低成本
 */

// @lc code=start
/**
 * @param {string} sentence
 * @param {number} k
 * @return {number}
 */
var minimumCost = function(sentence, k) {
    const words = sentence.split(' ');
    const n = words.length;
    const pref = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) pref[i + 1] = pref[i] + words[i].length;
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = i - 1; j >= 0; j--) {
            const len = pref[i] - pref[j] + (i - j - 1);
            if (len > k) break;
            const cost = i === n ? 0 : (k - len) * (k - len);
            if (dp[j] + cost < dp[i]) dp[i] = dp[j] + cost;
        }
    }
    return dp[n];
};
// @lc code=end

// TEST:
console.log(minimumCost("i love leetcode", 12)); // 36
console.log(minimumCost("apples and bananas taste great", 7)); // 21
console.log(minimumCost("a", 5)); // 0
console.log(minimumCost("hello world", 11)); // 0 (one line "hello world" = 11)
console.log(minimumCost("ab cd ef", 2)); // 0 (each word fills a row exactly)
