/*
 * @lc app=leetcode id=3572 lang=javascript
 *
 * [3572] Maximize Y‑Sum by Picking a Triplet of Distinct X‑Values
 */

// @lc code=start
/**
 * @param {number[]} x
 * @param {number[]} y
 * @return {number}
 */
var maxSumDistinctTriplet = function(x, y) {
    const best = new Map();
    for (let i = 0; i < x.length; i++) {
        const prev = best.get(x[i]);
        if (prev === undefined || y[i] > prev) best.set(x[i], y[i]);
    }
    if (best.size < 3) return -1;
    const sorted = [...best.values()].sort((a, b) => b - a);
    return sorted[0] + sorted[1] + sorted[2];
};
// @lc code=end

// TEST:
console.log(maxSumDistinctTriplet([1,2,1,3,2], [5,3,4,6,2])); // 14
console.log(maxSumDistinctTriplet([1,2,1,2], [4,5,6,7])); // -1
console.log(maxSumDistinctTriplet([1,2,3], [10,20,30])); // 60
console.log(maxSumDistinctTriplet([1,1,1], [1,2,3])); // -1
console.log(maxSumDistinctTriplet([1,2,3,4,5], [1,1,1,1,1])); // 3
