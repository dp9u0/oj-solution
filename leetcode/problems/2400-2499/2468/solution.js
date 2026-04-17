/*
 * @lc app=leetcode id=2468 lang=javascript
 *
 * [2468] Split Message Based on Limit
 */

// @lc code=start
/**
 * @param {string} message
 * @param {number} limit
 * @return {string[]}
 */
var splitMessage = function(message, limit) {
    const n = message.length;

    for (let b = 1; b <= n; b++) {
        const db = String(b).length;
        // Each part needs >= 1 content char; worst case is part b
        if (limit <= 3 + 2 * db) continue;

        // Compute total content capacity, grouped by digits of a
        let cap = 0;
        for (let d = 1; d <= db; d++) {
            const lo = d === 1 ? 1 : 10 ** (d - 1);
            const hi = Math.min(10 ** d - 1, b);
            if (lo > b) break;
            cap += (hi - lo + 1) * (limit - 3 - d - db);
        }

        if (cap >= n) {
            const res = [];
            let idx = 0;
            for (let a = 1; a <= b; a++) {
                const suffix = `<${a}/${b}>`;
                const len = limit - suffix.length;
                res.push(message.slice(idx, idx + len) + suffix);
                idx += len;
            }
            return res;
        }
    }

    return [];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(splitMessage('this is really a very awesome message', 9)));
// ['thi<1/14>','s i<2/14>',...,'ge<14/14>']
console.log(JSON.stringify(splitMessage('short message', 15)));
// ['short mess<1/2>','age<2/2>']
console.log(JSON.stringify(splitMessage('a', 6)));
// ['a<1/1>']
console.log(JSON.stringify(splitMessage('abc', 5)));
// [] (impossible)
console.log(JSON.stringify(splitMessage('hello world', 20)));
// ['hello world<1/1>'] or split into parts
