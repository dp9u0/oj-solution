/*
 * @lc app=leetcode.cn id=254 lang=javascript
 *
 * [254] 因子的组合
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var getFactors = function(n) {
    const res = [];
    // enumerate factor f >= start of `remaining`; each valid f yields the
    // complete combo path+[f, remaining/f] and a deeper recursion on remaining/f
    const dfs = (start, remaining, path) => {
        for (let f = start; f * f <= remaining; f++) {
            if (remaining % f !== 0) continue;
            path.push(f);
            res.push([...path, remaining / f]);
            dfs(f, remaining / f, path);
            path.pop();
        }
    };
    dfs(2, n, []);
    return res;
};
// @lc code=end

// TEST:
console.log(getFactors(1)); // []
console.log(getFactors(37)); // [] (prime)
console.log(getFactors(12)); // [[2,6],[2,2,3],[3,4]]
console.log(getFactors(32)); // 6 combos
console.log(getFactors(4)); // [[2,2]]
console.log(getFactors(32).length); // 6
