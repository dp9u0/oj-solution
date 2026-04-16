/*
 * @lc app=leetcode id=2784 lang=javascript
 *
 * [2784] Check if Array is Good
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    const n = Math.max(...nums);
    if (nums.length !== n + 1) return false;
    const freq = new Array(n + 1).fill(0);
    for (const x of nums) {
        if (x < 1 || x > n) return false;
        freq[x]++;
    }
    for (let i = 1; i < n; i++) {
        if (freq[i] !== 1) return false;
    }
    return freq[n] === 2;
};
// @lc code=end

// TEST:
console.log(isGood([2, 1, 3])); // false
console.log(isGood([1, 3, 3, 2])); // true
console.log(isGood([1, 1])); // true
console.log(isGood([3, 4, 4, 1, 2, 1])); // false
console.log(isGood([1, 2, 2])); // true
