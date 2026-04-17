/*
 * @lc app=leetcode id=3790 lang=javascript
 *
 * [3790] Smallest All-Ones Multiple
 */

// @lc code=start
/**
 * @param {number} k
 * @return {number}
 */
var minAllOneMultiple = function(k) {
    if (k % 2 === 0 || k % 5 === 0) return -1;
    let remainder = 1 % k;
    for (let len = 1; len <= k; len++) {
        if (remainder === 0) return len;
        remainder = (remainder * 10 + 1) % k;
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(minAllOneMultiple(3)); // 3
console.log(minAllOneMultiple(7)); // 6
console.log(minAllOneMultiple(2)); // -1
console.log(minAllOneMultiple(5)); // -1
console.log(minAllOneMultiple(9)); // 9 (111111111 / 9)
console.log(minAllOneMultiple(1)); // 1
