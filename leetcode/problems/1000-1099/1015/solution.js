/*
 * @lc app=leetcode id=1015 lang=javascript
 *
 * [1015] Smallest Integer Divisible by K
 */

// @lc code=start
/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
    if (k % 2 === 0 || k % 5 === 0) return -1;

    let rem = 0;
    for (let len = 1; len <= k; len++) {
        rem = (rem * 10 + 1) % k;
        if (rem === 0) return len;
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(smallestRepunitDivByK(1));
// Expected: 1

console.log(smallestRepunitDivByK(2));
// Expected: -1

console.log(smallestRepunitDivByK(3));
// Expected: 3

console.log(smallestRepunitDivByK(7));
// Expected: 6 (111111 / 7 = 15873)
