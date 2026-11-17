/*
 * @lc app=leetcode.cn id=247 lang=javascript
 *
 * [247] 中心对称数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function(n) {
    const wrap = (k, isTop) => {
        if (k === 0) return [""];
        if (k === 1) return ["0", "1", "8"];
        const pairs = [["1", "1"], ["6", "9"], ["8", "8"], ["9", "6"]];
        if (!isTop) pairs.push(["0", "0"]); // leading zero only allowed inside
        const inner = wrap(k - 2, false);
        const res = [];
        for (const [a, b] of pairs) {
            for (const m of inner) res.push(a + m + b);
        }
        return res;
    };
    return wrap(n, true);
};
// @lc code=end

// TEST:
console.log(findStrobogrammatic(1)); // ["0","1","8"]
console.log(findStrobogrammatic(2)); // ["11","69","88","96"]
console.log(findStrobogrammatic(3).length); // 12
console.log(findStrobogrammatic(3).includes("101")); // true
console.log(findStrobogrammatic(3).some(x => x[0] === "0")); // false (no leading zero)
console.log(findStrobogrammatic(4).length); // 20
