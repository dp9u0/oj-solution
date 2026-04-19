/*
 * @lc app=leetcode id=2614 lang=javascript
 *
 * [2614] Prime In Diagonal
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function(nums) {
    const n = nums.length;
    const isPrime = (x) => {
        if (x < 2) return false;
        for (let i = 2; i * i <= x; i++) {
            if (x % i === 0) return false;
        }
        return true;
    };

    let result = 0;
    for (let i = 0; i < n; i++) {
        if (isPrime(nums[i][i])) result = Math.max(result, nums[i][i]);
        if (isPrime(nums[i][n - 1 - i])) result = Math.max(result, nums[i][n - 1 - i]);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(diagonalPrime([[1,2,3],[5,6,7],[9,10,11]]));       // 11
console.log(diagonalPrime([[1,2,3],[5,17,7],[9,11,10]]));      // 17
