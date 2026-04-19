/*
 * @lc app=leetcode id=1052 lang=javascript
 *
 * [1052] Grumpy Bookstore Owner
 */

// @lc code=start
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    const n = customers.length;
    let base = 0;

    for (let i = 0; i < n; i++) {
        if (grumpy[i] === 0) base += customers[i];
    }

    const gain = customers.map((c, i) => grumpy[i] === 1 ? c : 0);

    let maxGain = 0;
    let windowSum = 0;
    for (let i = 0; i < minutes; i++) {
        windowSum += gain[i];
    }
    maxGain = windowSum;

    for (let i = minutes; i < n; i++) {
        windowSum += gain[i] - gain[i - minutes];
        maxGain = Math.max(maxGain, windowSum);
    }

    return base + maxGain;
};
// @lc code=end

// TEST:
console.log(maxSatisfied([1,0,1,2,1,1,7,5], [0,1,0,1,0,1,0,1], 3)); // 16
console.log(maxSatisfied([1], [0], 1)); // 1
