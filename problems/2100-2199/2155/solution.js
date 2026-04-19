/*
 * @lc app=leetcode id=2155 lang=javascript
 *
 * [2155] All Divisions With the Highest Score of a Binary Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maxScoreIndices = function(nums) {
    const n = nums.length;
    let ones = 0;
    for (const num of nums) ones += num;

    let leftOnes = 0;
    let maxScore = ones; // score at i=0: 0 + ones
    const result = [0];

    for (let i = 1; i <= n; i++) {
        leftOnes += nums[i - 1];
        const score = i + ones - 2 * leftOnes;
        if (score > maxScore) {
            maxScore = score;
            result.length = 0;
            result.push(i);
        } else if (score === maxScore) {
            result.push(i);
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(maxScoreIndices([0, 0, 1, 0]))); // [2,4]
console.log(JSON.stringify(maxScoreIndices([0, 0, 0]))); // [3]
console.log(JSON.stringify(maxScoreIndices([1, 1]))); // [0]
console.log(JSON.stringify(maxScoreIndices([0]))); // [1]
