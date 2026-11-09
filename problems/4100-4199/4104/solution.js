/*
 * @lc app=leetcode.cn id=4104 lang=javascript
 *
 * [4104] 统计有效子字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countValidSubstrings = function(s) {
    const n = s.length;
    // lastB[j]: j 之前最后一个 'b' 的下标,没有则 -1;lastA 同理
    const lastB = new Array(n).fill(-1);
    const lastA = new Array(n).fill(-1);
    let b = -1;
    let a = -1;
    for (let j = 0; j < n; j++) {
        lastB[j] = b;
        lastA[j] = a;
        if (s[j] === 'b') b = j;
        if (s[j] === 'a') a = j;
    }

    let ans = 0;
    let f = -1; // 使 [l, r] 含 "abc" 子序列的最大 l
    for (let r = 0; r < n; r++) {
        if (s[r] === 'c' && lastB[r] >= 0) {
            f = Math.max(f, lastA[lastB[r]]);
        }
        ans += r - f;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(countValidSubstrings('abac') === 9);
console.log(countValidSubstrings('abc') === 5);
console.log(countValidSubstrings('ac') === 3);
console.log(countValidSubstrings('a') === 1);
console.log(countValidSubstrings('aabbcc') === 17);
console.log(countValidSubstrings('cba') === 6);
console.log(countValidSubstrings('abcabc') === 14);
