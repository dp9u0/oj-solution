/*
 * @lc app=leetcode.cn id=465 lang=javascript
 *
 * [465] 最优账单平衡
 */

// @lc code=start
/**
 * @param {number[][]} transactions
 * @return {number}
 */
var minTransfers = function(transactions) {
    // net balance per person
    const bal = new Map();
    for (const [f, t, a] of transactions) {
        bal.set(f, (bal.get(f) || 0) - a);
        bal.set(t, (bal.get(t) || 0) + a);
    }
    const debts = [...bal.values()].filter(v => v !== 0);

    // settle debts[i] by merging it into one opposite-sign debts[j]
    const dfs = i => {
        while (i < debts.length && debts[i] === 0) i++;
        if (i === debts.length) return 0;
        let best = Infinity;
        for (let j = i + 1; j < debts.length; j++) {
            if (debts[i] * debts[j] < 0) {
                debts[j] += debts[i];
                best = Math.min(best, 1 + dfs(i + 1));
                debts[j] -= debts[i];
            }
        }
        return best;
    };
    return dfs(0);
};
// @lc code=end

// TEST:
console.log(minTransfers([[0, 1, 10], [2, 0, 5]])); // 2
console.log(minTransfers([[0, 1, 10], [1, 0, 1], [1, 2, 5], [2, 0, 5]])); // 1
console.log(minTransfers([[0, 1, 10]])); // 1
console.log(minTransfers([[1, 0, 5]])); // 1 (direction doesn't matter, only nets)
console.log(minTransfers([[0, 1, 1], [1, 0, 1]])); // 0 (nets cancel)
console.log(minTransfers([[0, 1, 2], [1, 2, 3], [2, 0, 1]])); // 2 (nets -1,+2,-1)
