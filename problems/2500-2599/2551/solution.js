/*
 * @lc app=leetcode id=2551 lang=javascript
 *
 * [2551] Put Marbles in Bags
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function(weights, k) {
    const n = weights.length;
    if (k === 1 || k === n) return 0;

    const pairs = new Array(n - 1);
    for (let i = 0; i < n - 1; i++) {
        pairs[i] = weights[i] + weights[i + 1];
    }
    pairs.sort((a, b) => a - b);

    let minSum = 0, maxSum = 0;
    for (let i = 0; i < k - 1; i++) {
        minSum += pairs[i];
        maxSum += pairs[n - 2 - i];
    }

    return maxSum - minSum;
};
// @lc code=end

// TEST:
console.log(putMarbles([1,3,5,1], 2)); // 4
console.log(putMarbles([1,3], 2)); // 0
console.log(putMarbles([1,4,2,5,3], 3)); // 5
