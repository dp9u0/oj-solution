/*
 * @lc app=leetcode id=2644 lang=javascript
 *
 * [2644] Find the Maximum Divisibility Score
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function(nums, divisors) {
    let bestScore = -1, bestDiv = Infinity;
    for (const d of divisors) {
        let score = 0;
        for (const num of nums) {
            if (num % d === 0) score++;
        }
        if (score > bestScore || (score === bestScore && d < bestDiv)) {
            bestScore = score;
            bestDiv = d;
        }
    }
    return bestDiv;
};
// @lc code=end

// TEST:
console.log(maxDivScore([2,9,15,50], [5,3,7,2])); // 2
console.log(maxDivScore([4,7,9,3,9], [5,2,3])); // 3
console.log(maxDivScore([20,14,21,10], [10,16,20])); // 10
