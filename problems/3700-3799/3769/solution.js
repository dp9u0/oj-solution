/*
 * @lc app=leetcode id=3769 lang=javascript
 *
 * [3769] Sort Integers by Binary Reflection
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortByReflection = function(nums) {
    const reflect = (x) => {
        let bin = x.toString(2);
        return parseInt(bin.split('').reverse().join(''), 2);
    };
    return nums.slice().sort((a, b) => {
        const ra = reflect(a), rb = reflect(b);
        if (ra !== rb) return ra - rb;
        return a - b;
    });
};
// @lc code=end

// TEST:
console.log(sortByReflection([4,5,4])); // [4,4,5]
console.log(sortByReflection([3,6,5,8])); // [8,3,6,5]
console.log(sortByReflection([1])); // [1]
