/*
 * @lc app=leetcode.cn id=3135 lang=javascript
 *
 * [3135] 通过添加或删除结尾字符来同化字符串
 */

// @lc code=start
/**
 * @param {string} initial
 * @param {string} target
 * @return {number}
 */
var minOperations = function(initial, target) {
    const n = initial.length, m = target.length;
    // longest common substring
    let best = 0;
    let prev = new Array(m + 1).fill(0);
    let cur = new Array(m + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            cur[j] = initial[i - 1] === target[j - 1] ? prev[j - 1] + 1 : 0;
            if (cur[j] > best) best = cur[j];
        }
        [prev, cur] = [cur, prev];
    }
    return n + m - 2 * best;
};
// @lc code=end

// TEST:
console.log(minOperations("abcde", "cdef")); // 3
console.log(minOperations("axxy", "yabx")); // 6
console.log(minOperations("xyz", "xyz")); // 0
console.log(minOperations("a", "b")); // 2
console.log(minOperations("ab", "ba")); // 2
