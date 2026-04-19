/*
 * @lc app=leetcode id=2344 lang=javascript
 *
 * [2344] Minimum Deletions to Make Array Divisible
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} numsDivide
 * @return {number}
 */
var minOperations = function(nums, numsDivide) {
    let g = numsDivide[0];
    for (let i = 1; i < numsDivide.length; i++) g = gcd(g, numsDivide[i]);
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (g % nums[i] === 0) return i;
    }
    return -1;
};

const gcd = (a, b) => { while (b) { [a, b] = [b, a % b]; } return a; };
// @lc code=end

// TEST:
console.log(minOperations([2, 3, 2, 4, 3], [9, 6, 9, 3, 15])); // 2
console.log(minOperations([4, 3, 6], [8, 2, 6, 10])); // -1
console.log(minOperations([1], [1])); // 0
console.log(minOperations([2, 2], [2])); // 0
