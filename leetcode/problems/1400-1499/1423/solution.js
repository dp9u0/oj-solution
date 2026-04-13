/*
 * @lc app=leetcode id=1423 lang=javascript
 *
 * [1423] Maximum Points You Can Obtain from Cards
 */

// @lc code=start
/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    const n = cardPoints.length;
    const windowSize = n - k;
    let total = 0;
    for (const p of cardPoints) total += p;

    if (windowSize === 0) return total;

    let windowSum = 0;
    for (let i = 0; i < windowSize; i++) windowSum += cardPoints[i];
    let minSum = windowSum;

    for (let i = windowSize; i < n; i++) {
        windowSum += cardPoints[i] - cardPoints[i - windowSize];
        if (windowSum < minSum) minSum = windowSum;
    }

    return total - minSum;
};
// @lc code=end

// TEST:
console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3)); // 12
console.log(maxScore([2, 2, 2], 2)); // 4
console.log(maxScore([9, 7, 7, 9, 7, 7, 9], 7)); // 55
console.log(maxScore([1, 1000, 1], 1)); // 1
