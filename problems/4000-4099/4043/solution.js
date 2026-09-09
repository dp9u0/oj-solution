/*
 * @lc app=leetcode.cn id=4043 lang=javascript
 *
 * [4043] 恰好有 K 对相等相邻字符的循环移位数量
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countRotations = function(s, k) {
    const n = s.length;
    // total: equal pairs among all circular adjacent pairs
    // eq: rotations whose excluded wrap pair is equal
    let total = 0, eq = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] === s[(i + 1) % n]) {
            total++;
            eq++; // rotation starting at (i+1)%n excludes pair (i, i+1)
        }
    }
    if (k === total) return n - eq;
    if (k === total - 1) return eq;
    return 0;
};
// @lc code=end

// TEST:
console.log(countRotations("aab", 1) === 2);
console.log(countRotations("abca", 0) === 1);
console.log(countRotations("aa", 1) === 2);     // total=2, eq=2, every rotation scores total-1=1
console.log(countRotations("aa", 0) === 0);
console.log(countRotations("aaaa", 3) === 4);    // every rotation is "aaaa", score 3
console.log(countRotations("aaaa", 2) === 0);
console.log(countRotations("abcd", 0) === 4);
