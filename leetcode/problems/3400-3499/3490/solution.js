/*
 * @lc app=leetcode id=3490 lang=javascript
 *
 * [3490] Count Beautiful Numbers
 */

// @lc code=start
/**
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var beautifulNumbers = function(l, r) {
    return countBeautiful(r) - countBeautiful(l - 1);
};

const countBeautiful = (n) => {
    if (n <= 0) return 0;
    const digits = String(n).split('').map(Number);
    const memo = new Map();

    const dfs = (pos, sum, prod, tight, hasZero) => {
        if (pos === digits.length) {
            if (hasZero) return 0;
            return prod % sum === 0 ? 1 : 0;
        }

        const key = `${pos},${sum},${prod},${tight},${hasZero}`;
        if (memo.has(key)) return memo.get(key);

        const limit = tight ? digits[pos] : 9;
        let result = 0;

        for (let d = 0; d <= limit; d++) {
            const nextTight = tight && d === limit;
            if (hasZero && d === 0) {
                result += dfs(pos + 1, 0, 1, nextTight, true);
            } else {
                result += dfs(pos + 1, sum + d, d === 0 ? 0 : (prod === 0 ? 0 : prod * d), nextTight, false);
            }
        }

        memo.set(key, result);
        return result;
    };

    return dfs(0, 0, 1, true, true);
};
// @lc code=end

// TEST:
console.log(beautifulNumbers(10, 20)); // 2
console.log(beautifulNumbers(1, 15)); // 10
console.log(beautifulNumbers(1, 1)); // 1
