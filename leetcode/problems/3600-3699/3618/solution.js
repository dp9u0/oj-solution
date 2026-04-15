/*
 * @lc app=leetcode id=3618 lang=javascript
 *
 * [3618] Split Array by Prime Indices
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var splitArray = function(nums) {
    let n = nums.length;
    let isPrime = new Array(n).fill(true);
    isPrime[0] = false;
    if (n > 1) isPrime[1] = false;
    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) isPrime[j] = false;
        }
    }
    let sumA = 0, sumB = 0;
    for (let i = 0; i < n; i++) {
        if (isPrime[i]) sumA += nums[i];
        else sumB += nums[i];
    }
    return Math.abs(sumA - sumB);
};
// @lc code=end

// TEST:
console.log(splitArray([2,3,4]));
console.log(splitArray([-1,5,7,0]));
console.log(splitArray([1]));
