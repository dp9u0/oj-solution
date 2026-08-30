/*
 * @lc app=leetcode id=3946 lang=javascript
 *
 * [3946] Maximum Number of Items From Sale I
 */

// @lc code=start
/**
 * @param {number[][]} items
 * @param {number} budget
 * @return {number}
 */
var maximumSaleItems = function(items, budget) {
    const maxFactor = Math.max(...items.map((it) => it[0]));

    // cnt[v]: number of items whose factor equals v
    const cnt = new Array(maxFactor + 1).fill(0);
    for (const [factor] of items) cnt[factor] += 1;

    // multipleCount[f]: number of items whose factor is a multiple of f
    const multipleCount = new Array(maxFactor + 1).fill(0);
    for (let f = 1; f <= maxFactor; f++) {
        let total = 0;
        for (let v = f; v <= maxFactor; v += f) total += cnt[v];
        multipleCount[f] = total;
    }

    // group bonus values m(f) by price
    const groups = new Map();
    for (const [factor, price] of items) {
        if (!groups.has(price)) groups.set(price, []);
        groups.get(price).push(multipleCount[factor]);
    }
    const prices = [...groups.keys()].sort((a, b) => b - a);

    // dp[c]: max total bonus over subsets of processed (higher priced) items with cost exactly c
    const dp = new Array(budget + 1).fill(-1);
    dp[0] = 0;
    let best = 0;

    for (const price of prices) {
        const bonuses = groups.get(price).slice().sort((a, b) => b - a);
        const maxTake = Math.min(bonuses.length, Math.floor(budget / price));

        // prefix[r]: best bonus sum when activating r items of this price group
        const prefix = new Array(maxTake + 1).fill(0);
        for (let r = 1; r <= maxTake; r++) prefix[r] = prefix[r - 1] + bonuses[r - 1];

        // force at least one item of this price group -> min price is exactly `price`
        for (let r = 1; r <= maxTake; r++) {
            const base = prefix[r];
            for (let cost = r * price; cost <= budget; cost++) {
                const prev = dp[cost - r * price];
                if (prev < 0) continue;
                const total = base + prev + Math.floor((budget - cost) / price);
                if (total > best) best = total;
            }
        }

        // merge this price group into the knapsack (0/1)
        for (const bonus of bonuses) {
            for (let cost = budget; cost >= price; cost--) {
                if (dp[cost - price] >= 0 && dp[cost - price] + bonus > dp[cost]) {
                    dp[cost] = dp[cost - price] + bonus;
                }
            }
        }
    }

    return best;
};
// @lc code=end

// TEST:
if (typeof module !== 'undefined' && require.main === module) {
    const assert = (actual, expected, msg) => {
        const ok = actual === expected;
        console.log(`${ok ? 'PASS' : 'FAIL'}: ${msg} expected=${expected} actual=${actual}`);
        if (!ok) process.exitCode = 1;
    };

    assert(maximumSaleItems([[6, 2], [2, 6], [3, 4]], 9), 4, 'example 1');
    assert(maximumSaleItems([[2, 4], [3, 2], [4, 1], [6, 4], [12, 4]], 8), 10, 'example 2');
    assert(maximumSaleItems([[1, 5]], 3), 0, 'cannot afford anything');
    assert(maximumSaleItems([[1, 1]], 1500), 1500, 'single cheap item, all budget to copies');
    assert(maximumSaleItems([[1, 1], [1, 1]], 2), 4, 'same factor items grant each other free copies');
    assert(maximumSaleItems([[12, 1500]], 1500), 1, 'expensive single item, no copies left');
    assert(maximumSaleItems([[1500, 1500], [1, 1]], 1500), 1501, 'cheap item dominates extras + 1 free copy');
}
