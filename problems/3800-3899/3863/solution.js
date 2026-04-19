/*
 * @lc app=leetcode id=3863 lang=javascript
 *
 * [3863] Minimum Operations to Sort a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    const n = s.length;
    const t = [...s].sort().join('');
    if (s === t) return 0;
    if (n === 2) return -1;

    let L = 0, R = n - 1;
    while (s[L] === t[L]) L++;
    while (s[R] === t[R]) R--;

    if (L > 0 || R < n - 1) return 1;

    // Entire string unsorted, answer is 2 unless s[0] is unique max AND s[n-1] is unique min
    let s0Max = true;
    for (let i = 1; i < n; i++) {
        if (s[i] >= s[0]) { s0Max = false; break; }
    }
    if (!s0Max) return 2;

    let snMin = true;
    for (let i = 0; i < n - 1; i++) {
        if (s[i] <= s[n - 1]) { snMin = false; break; }
    }

    return snMin ? 3 : 2;
};
// @lc code=end

// TEST:
console.log(minOperations("dog")); // 1
console.log(minOperations("card")); // 2
console.log(minOperations("gf")); // -1
console.log(minOperations("abc")); // 0
console.log(minOperations("cba")); // 3
console.log(minOperations("dcba")); // 3
console.log(minOperations("bca")); // 2
console.log(minOperations("bac")); // 1
