/*
 * @lc app=leetcode id=1823 lang=javascript
 *
 * [1823] Find the Winner of the Circular Game
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    let f = 0;
    for (let i = 2; i <= n; i++) {
        f = (f + k) % i;
    }
    return f + 1;
};
// @lc code=end

// TEST:
console.log(findTheWinner(5, 2)); // 3
console.log(findTheWinner(6, 5)); // 1
console.log(findTheWinner(1, 1)); // 1
console.log(findTheWinner(2, 1)); // 2
console.log(findTheWinner(5, 3)); // 4
console.log(findTheWinner(6, 1)); // 6
