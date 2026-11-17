/*
 * @lc app=leetcode.cn id=248 lang=javascript
 *
 * [248] 中心对称数 III
 */

// @lc code=start
/**
 * @param {string} low
 * @param {string} high
 * @return {number}
 */
var strobogrammaticInRange = function(low, high) {
    const gen = (k, isTop) => {
        if (k === 0) return [""];
        if (k === 1) return ["0", "1", "8"];
        const pairs = [["1", "1"], ["6", "9"], ["8", "8"], ["9", "6"]];
        if (!isTop) pairs.push(["0", "0"]);
        const inner = gen(k - 2, false);
        const res = [];
        for (const [a, b] of pairs) {
            for (const m of inner) res.push(a + m + b);
        }
        return res;
    };

    // numeric compare of digit strings (no leading zeros)
    const cmp = (a, b) => {
        if (a.length !== b.length) return a.length - b.length;
        return a < b ? -1 : a > b ? 1 : 0;
    };

    let count = 0;
    for (let len = low.length; len <= high.length; len++) {
        for (const s of gen(len, true)) {
            if (cmp(low, s) <= 0 && cmp(s, high) <= 0) count++;
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(strobogrammaticInRange("50", "100")); // 3 (69, 88, 96)
console.log(strobogrammaticInRange("0", "0")); // 1
console.log(strobogrammaticInRange("1", "100")); // 6 (1, 8, 11, 69, 88, 96)
console.log(strobogrammaticInRange("1", "1")); // 1
console.log(strobogrammaticInRange("13", "250")); // 6 (69, 88, 96, 101, 111, 181)
