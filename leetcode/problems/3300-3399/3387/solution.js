/*
 * @lc app=leetcode id=3387 lang=javascript
 *
 * [3387] Maximize Amount After Two Days of Conversions
 */

// @lc code=start
/**
 * @param {string} initialCurrency
 * @param {string[][]} pairs1
 * @param {number[]} rates1
 * @param {string[][]} pairs2
 * @param {number[]} rates2
 * @return {number}
 */
var maxAmount = function(initialCurrency, pairs1, rates1, pairs2, rates2) {
    const bfs = (pairs, rates, start) => {
        const graph = new Map();
        for (let i = 0; i < pairs.length; i++) {
            const [from, to] = pairs[i];
            const rate = rates[i];
            if (!graph.has(from)) graph.set(from, []);
            if (!graph.has(to)) graph.set(to, []);
            graph.get(from).push([to, rate]);
            graph.get(to).push([from, 1 / rate]);
        }
        const dist = new Map([[start, 1.0]]);
        const queue = [start];
        while (queue.length) {
            const curr = queue.shift();
            for (const [next, rate] of (graph.get(curr) || [])) {
                if (!dist.has(next)) {
                    dist.set(next, dist.get(curr) * rate);
                    queue.push(next);
                }
            }
        }
        return dist;
    };

    const day1 = bfs(pairs1, rates1, initialCurrency);
    const day2 = bfs(pairs2, rates2, initialCurrency);

    let result = 1.0;
    for (const [currency, r1] of day1) {
        if (day2.has(currency)) {
            result = Math.max(result, r1 / day2.get(currency));
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(maxAmount('EUR', [['EUR','USD'],['USD','JPY']], [2.0,3.0], [['JPY','USD'],['USD','CHF'],['CHF','EUR']], [4.0,5.0,6.0]));
// Expected: 720.0
console.log(maxAmount('NGN', [['NGN','EUR']], [9.0], [['NGN','EUR']], [6.0]));
// Expected: 1.5
console.log(maxAmount('USD', [['USD','EUR']], [1.0], [['EUR','JPY']], [10.0]));
// Expected: 1.0
console.log(maxAmount('A', [['A','B']], [2.0], [['A','B']], [2.0]));
// Expected: 1.0
console.log(maxAmount('X', [['X','Y'],['Y','Z']], [3.0,4.0], [['X','Z']], [10.0]));
// Expected: X→Y→Z on day1 = 12.0 Z, X→Z on day2 = 10.0 Z, ratio = 12/10 = 1.2
