/*
 * @lc app=leetcode id=3712 lang=javascript
 *
 * [3712] Sum of Elements With Frequency Divisible by K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumDivisibleByK = function(nums, k) {
    const freq = new Map();
    for (const x of nums) freq.set(x, (freq.get(x) || 0) + 1);
    let sum = 0;
    for (const [val, cnt] of freq) {
        if (cnt % k === 0) sum += val * cnt;
    }
    return sum;
};
// @lc code=end

// TEST:
console.log(sumDivisibleByK([1,2,2,3,3,3,3,4], 2));   // 16
console.log(sumDivisibleByK([1,2,3,4,5], 2));          // 0
console.log(sumDivisibleByK([4,4,4,1,2,3], 3));        // 12
console.log(sumDivisibleByK([5], 1));                   // 5
console.log(sumDivisibleByK([1,1,2,2], 2));             // 6
