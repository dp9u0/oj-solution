/*
 * @lc app=leetcode id=3668 lang=javascript
 *
 * [3668] Restore Finishing Order
 */

// @lc code=start
/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
    const set = new Set(friends);
    return order.filter(x => set.has(x));
};
// @lc code=end

// TEST:
console.log(recoverOrder([3,1,2,5,4], [1,3,4])); // [3,1,4]
console.log(recoverOrder([1,4,5,3,2], [2,5])); // [5,2]
