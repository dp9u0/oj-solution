/*
 * @lc app=leetcode id=2929 lang=javascript
 *
 * [2929] Distribute Candies Among Children II
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function(n, limit) {
    let c2 = (x) => x >= 2 ? x * (x - 1) / 2 : 0;
    let total = c2(n + 2);
    total -= 3 * c2(n - limit + 1);
    total += 3 * c2(n - 2 * limit);
    total -= c2(n - 3 * limit - 1);
    return total;
};
// @lc code=end

// TEST:
console.log(distributeCandies(5, 2)); // 3
console.log(distributeCandies(3, 3)); // 10
console.log(distributeCandies(1, 1)); // 3
