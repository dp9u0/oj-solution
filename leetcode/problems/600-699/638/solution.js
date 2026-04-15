/*
 * @lc app=leetcode id=638 lang=javascript
 *
 * [638] Shopping Offers
 */

// @lc code=start
/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function(price, special, needs) {
    const memo = new Map();
    const n = price.length;

    const validSpecial = special.filter(s => {
        let individual = 0;
        for (let i = 0; i < n; i++) individual += s[i] * price[i];
        return s[n] < individual;
    });

    function dfs(cur) {
        const key = cur.join(',');
        if (memo.has(key)) return memo.get(key);

        let cost = 0;
        for (let i = 0; i < n; i++) cost += cur[i] * price[i];

        for (const offer of validSpecial) {
            const next = [...cur];
            let valid = true;
            for (let i = 0; i < n; i++) {
                next[i] -= offer[i];
                if (next[i] < 0) { valid = false; break; }
            }
            if (valid) {
                cost = Math.min(cost, offer[n] + dfs(next));
            }
        }

        memo.set(key, cost);
        return cost;
    }

    return dfs(needs);
};
// @lc code=end

// TEST:
console.log(shoppingOffers([2,5], [[3,0,5],[1,2,10]], [3,2]));              // 14
console.log(shoppingOffers([2,3,4], [[1,1,0,4],[2,2,1,9]], [1,2,1]));      // 11
