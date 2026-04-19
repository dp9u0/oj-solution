/*
 * @lc app=leetcode id=1822 lang=javascript
 *
 * [1822] Sign of the Product of an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let neg = 0;
    for (const x of nums) {
        if (x === 0) return 0;
        if (x < 0) neg++;
    }
    return neg % 2 === 0 ? 1 : -1;
};
// @lc code=end

// TEST:
console.log(arraySign([-1,-2,-3,-4,3,2,1])); // 1
console.log(arraySign([1,5,0,2,-3])); // 0
console.log(arraySign([-1,1,-1,1,-1])); // -1
console.log(arraySign([1,2,3])); // 1
