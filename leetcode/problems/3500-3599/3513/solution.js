/*
 * @lc app=leetcode id=3513 lang=javascript
 *
 * [3513] Number of Unique XOR Triplets I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var uniqueXorTriplets = function(nums) {
    const n = nums.length;
    if (n <= 2) return n;

    // Find next power of 2 >= n + 1
    let p = 1;
    while (p <= n) p <<= 1;

    return p;
};
// @lc code=end

// TEST:
console.log(uniqueXorTriplets([1, 2])); // 2
console.log(uniqueXorTriplets([3, 1, 2])); // 4
console.log(uniqueXorTriplets([1])); // 1
console.log(uniqueXorTriplets([1, 2, 3, 4])); // 8
console.log(uniqueXorTriplets([1, 2, 3, 4, 5])); // 8
