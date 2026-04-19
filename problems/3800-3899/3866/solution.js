/*
 * @lc app=leetcode id=3866 lang=javascript
 *
 * [3866] First Unique Even Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueEven = function(nums) {
    const count = new Map();
    for (const x of nums) {
        if (x % 2 === 0) count.set(x, (count.get(x) || 0) + 1);
    }
    for (const x of nums) {
        if (x % 2 === 0 && count.get(x) === 1) return x;
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(firstUniqueEven([3,4,2,5,4,6])); // 2
console.log(firstUniqueEven([4,4])); // -1
console.log(firstUniqueEven([1,3,5])); // -1
console.log(firstUniqueEven([2])); // 2
console.log(firstUniqueEven([2,4,2,4,6])); // 6
