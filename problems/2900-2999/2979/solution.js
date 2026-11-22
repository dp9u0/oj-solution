/*
 * @lc app=leetcode.cn id=2979 lang=javascript
 *
 * [2979] 最贵的无法购买的商品
 */

// @lc code=start
/**
 * @param {number} primeOne
 * @param {number} primeTwo
 * @return {number}
 */
var mostExpensiveItem = function(primeOne, primeTwo) {
    return primeOne * primeTwo - primeOne - primeTwo;
};
// @lc code=end

// TEST:
console.log(mostExpensiveItem(2, 5)); // 3
console.log(mostExpensiveItem(5, 7)); // 23
console.log(mostExpensiveItem(3, 5)); // 7
console.log(mostExpensiveItem(2, 3)); // 1
