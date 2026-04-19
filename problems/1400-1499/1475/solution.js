/*
 * @lc app=leetcode id=1475 lang=javascript
 *
 * [1475] Final Prices With a Special Discount in a Shop
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const n = prices.length;
    const result = [...prices];
    const stack = [];
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] > prices[i]) {
            stack.pop();
        }
        result[i] = prices[i] - (stack.length > 0 ? stack[stack.length - 1] : 0);
        stack.push(prices[i]);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(finalPrices([8,4,6,2,3]))); // [4,2,4,2,3]
console.log(JSON.stringify(finalPrices([1,2,3,4,5]))); // [1,2,3,4,5]
console.log(JSON.stringify(finalPrices([10,1,1,6]))); // [9,0,1,6]
