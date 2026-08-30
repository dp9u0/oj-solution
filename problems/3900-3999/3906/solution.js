/*
 * @lc app=leetcode id=3906 lang=javascript
 *
 * [3906] Count Good Integers on a Grid Path
 */

// @lc code=start
/**
 * @param {number} l
 * @param {number} r
 * @param {string} directions
 * @return {number}
 */
var countGoodIntegersOnPath = function(l, r, directions) {
    const NONE = 10;
    // 路径访问的单元格 -> 16 位字符串中的下标（值为访问顺序）
    const stepOf = new Map();
    let row = 0, col = 0;
    stepOf.set(0, 0);
    for (const ch of directions) {
        if (ch === 'D') row++; else col++;
        stepOf.set(row * 4 + col, stepOf.size);
    }

    // f(n): [0, n] 中好的整数个数（n 为 BigInt）
    const countUpTo = (n) => {
        const digits = n.toString().padStart(16, '0');
        const memo = new Map();
        const dfs = (pos, tight, last) => {
            if (pos === 16) return 1n;
            const key = (pos * 2 + tight) * 11 + last;
            if (memo.has(key)) return memo.get(key);
            const maxD = tight ? +digits[pos] : 9;
            const step = stepOf.has(pos) ? stepOf.get(pos) : -1;
            let total = 0n;
            for (let d = 0; d <= maxD; d++) {
                if (step > 0 && d < last) continue;
                total += dfs(pos + 1, tight && d === maxD ? 1 : 0, step >= 0 ? d : last);
            }
            memo.set(key, total);
            return total;
        };
        return dfs(0, 1, NONE);
    };

    return Number(countUpTo(BigInt(r)) - countUpTo(BigInt(l) - 1n));
};
// @lc code=end

// TEST:
console.log(countGoodIntegersOnPath(8, 10, 'DDDRRR')); // 2
console.log(countGoodIntegersOnPath(123456789, 123456790, 'DDRRDR')); // 1
console.log(countGoodIntegersOnPath(1288561398769758, 1288561398769758, 'RRRDDD')); // 0
console.log(countGoodIntegersOnPath(1, 1, 'DDDRRR')); // 1
console.log(countGoodIntegersOnPath(10, 10, 'DDDRRR')); // 0
console.log(countGoodIntegersOnPath(8, 9, 'RRRDDD')); // 2
console.log(countGoodIntegersOnPath(999999999999990, 999999999999999, 'DRDRDR')); // 1
