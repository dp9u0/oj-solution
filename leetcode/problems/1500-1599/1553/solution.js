/*
 * @lc app=leetcode id=1553 lang=javascript
 *
 * [1553] Minimum Number of Days to Eat N Oranges
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var minDays = function(n) {
    const memo = new Map();
    const dfs = (n) => {
        if (n <= 1) return n;
        if (memo.has(n)) return memo.get(n);
        const res = Math.min(
            n % 2 + 1 + dfs(Math.floor(n / 2)),
            n % 3 + 1 + dfs(Math.floor(n / 3))
        );
        memo.set(n, res);
        return res;
    };
    return dfs(n);
};
// @lc code=end

// TEST:
console.log(minDays(10)); // 4
console.log(minDays(6)); // 3
console.log(minDays(1)); // 1
console.log(minDays(2)); // 2
console.log(minDays(56)); // 6
console.log(minDays(84806671)); // 32
