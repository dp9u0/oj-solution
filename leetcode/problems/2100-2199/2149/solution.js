/*
 * @lc app=leetcode id=2149 lang=javascript
 *
 * [2149] Rearrange Array Elements by Sign
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    const result = new Array(nums.length);
    let pos = 0, neg = 1;
    for (const num of nums) {
        if (num > 0) {
            result[pos] = num;
            pos += 2;
        } else {
            result[neg] = num;
            neg += 2;
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(rearrangeArray([3,1,-2,-5,2,-4]))); // [3,-2,1,-5,2,-4]
console.log(JSON.stringify(rearrangeArray([-1,1])));           // [1,-1]
console.log(JSON.stringify(rearrangeArray([1,-1])));           // [1,-1]
