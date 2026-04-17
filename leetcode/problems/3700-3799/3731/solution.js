/*
 * @lc app=leetcode id=3731 lang=javascript
 *
 * [3731] Find Missing Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    const set = new Set(nums);
    const lo = Math.min(...nums), hi = Math.max(...nums);
    const res = [];
    for (let i = lo; i <= hi; i++) {
        if (!set.has(i)) res.push(i);
    }
    return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findMissingElements([1,4,2,5])));   // [3]
console.log(JSON.stringify(findMissingElements([7,8,6,9])));   // []
console.log(JSON.stringify(findMissingElements([5,1])));         // [2,3,4]
console.log(JSON.stringify(findMissingElements([1,2])));         // []
console.log(JSON.stringify(findMissingElements([1,5])));         // [2,3,4]
