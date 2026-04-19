/*
 * @lc app=leetcode id=808 lang=javascript
 *
 * [808] Soup Servings
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {
    if (n >= 4800) return 1;
    let m = Math.ceil(n / 25);
    let memo = new Map();
    let dp = (a, b) => {
        if (a <= 0 && b <= 0) return 0.5;
        if (a <= 0) return 1;
        if (b <= 0) return 0;
        let key = a * 10000 + b;
        if (memo.has(key)) return memo.get(key);
        let res = 0.25 * (dp(a - 4, b) + dp(a - 3, b - 1) + dp(a - 2, b - 2) + dp(a - 1, b - 3));
        memo.set(key, res);
        return res;
    };
    return dp(m, m);
};
// @lc code=end

// TEST:
console.log(soupServings(50)); // 0.625
console.log(soupServings(100)); // 0.71875
console.log(soupServings(0)); // 0.5
