/*
 * @lc app=leetcode id=1774 lang=javascript
 *
 * [1774] Closest Dessert Cost
 */

// @lc code=start
/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */
var closestCost = function(baseCosts, toppingCosts, target) {
    // Collect all possible topping sums
    let sums = new Set([0]);
    for (const cost of toppingCosts) {
        const next = new Set();
        for (const s of sums) {
            next.add(s);
            next.add(s + cost);
            next.add(s + cost * 2);
        }
        sums = next;
    }

    let best = Infinity;
    const update = (total) => {
        const diff = Math.abs(total - target);
        const bestDiff = Math.abs(best - target);
        if (diff < bestDiff || (diff === bestDiff && total < best)) {
            best = total;
        }
    };

    for (const base of baseCosts) {
        for (const s of sums) {
            update(base + s);
        }
    }
    return best;
};
// @lc code=end

// TEST:
console.log(closestCost([1, 7], [3, 4], 10)); // 10
console.log(closestCost([2, 3], [4, 5, 100], 18)); // 17
console.log(closestCost([3, 10], [2, 5], 9)); // 8
console.log(closestCost([10], [1], 1)); // 10 (base only, closest to 1)
console.log(closestCost([1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10)); // 10
