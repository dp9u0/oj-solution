/*
 * @lc app=leetcode id=1726 lang=javascript
 *
 * [1726] Tuple with Same Product
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
    const productCount = new Map();
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const prod = nums[i] * nums[j];
            productCount.set(prod, (productCount.get(prod) || 0) + 1);
        }
    }
    let result = 0;
    for (const count of productCount.values()) {
        if (count >= 2) {
            result += count * (count - 1) / 2 * 8;
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(tupleSameProduct([2,3,4,6]));        // 8
console.log(tupleSameProduct([1,2,4,5,10]));      // 16
console.log(tupleSameProduct([1,2,3]));            // 0
