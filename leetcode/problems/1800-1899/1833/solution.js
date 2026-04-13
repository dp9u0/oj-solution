/*
 * @lc app=leetcode id=1833 lang=javascript
 *
 * [1833] Maximum Ice Cream Bars
 */

// @lc code=start
/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    const maxCost = Math.max(...costs);
    const count = new Array(maxCost + 1).fill(0);
    for (const c of costs) count[c]++;

    let result = 0;
    for (let price = 1; price <= maxCost; price++) {
        if (count[price] === 0) continue;
        const canBuy = Math.min(count[price], Math.floor(coins / price));
        result += canBuy;
        coins -= canBuy * price;
        if (coins < price) break;
    }

    return result;
};
// @lc code=end

// TEST:
console.log(maxIceCream([1, 3, 2, 4, 1], 7)); // 4
console.log(maxIceCream([10, 6, 8, 7, 7, 8], 5)); // 0
console.log(maxIceCream([1, 6, 3, 1, 2, 5], 20)); // 6
console.log(maxIceCream([1, 1, 1, 1], 3)); // 3
