/*
 * @lc app=leetcode id=1545 lang=javascript
 *
 * [1545] Find Kth Bit in Nth Binary String
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
    if (n === 1) return '0';
    const mid = 1 << (n - 1);
    if (k === mid) return '1';
    if (k < mid) return findKthBit(n - 1, k);
    return findKthBit(n - 1, 2 * mid - k) === '0' ? '1' : '0';
};
// @lc code=end

// TEST:
console.log(findKthBit(3, 1));   // '0'
console.log(findKthBit(4, 11));  // '1'
console.log(findKthBit(1, 1));   // '0'
console.log(findKthBit(2, 3));   // '1'
