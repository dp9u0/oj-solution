/*
 * @lc app=leetcode id=600 lang=javascript
 *
 * [600] Non-negative Integers without Consecutive Ones
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var findIntegers = function(n) {
    const bits = [];
    let temp = n;
    while (temp > 0) { bits.push(temp & 1); temp >>= 1; }
    bits.reverse();
    const len = bits.length;

    // memo[pos][prevOne] = count for position pos with prev bit being prevOne (only when not tight)
    const memo = Array.from({ length: len }, () => [-1, -1]);

    const dfs = (pos, prevOne, tight) => {
        if (pos === len) return 1;
        if (!tight && memo[pos][prevOne] !== -1) return memo[pos][prevOne];

        const limit = tight ? bits[pos] : 1;
        let count = 0;

        // Choose 0
        count += dfs(pos + 1, 0, tight && bits[pos] === 0);

        // Choose 1 (only if prev wasn't 1 and limit allows)
        if (limit === 1 && prevOne === 0) {
            count += dfs(pos + 1, 1, tight && bits[pos] === 1);
        }

        if (!tight) memo[pos][prevOne] = count;
        return count;
    };

    return dfs(0, 0, true);
};
// @lc code=end

// TEST:
console.log(findIntegers(5)); // 5
console.log(findIntegers(1)); // 2
console.log(findIntegers(2)); // 3
console.log(findIntegers(1000000000)); // large test
