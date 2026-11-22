/*
 * @lc app=leetcode.cn id=2936 lang=javascript
 *
 * [2936] 包含相等值数字块的数量
 */

// @lc code=start
/**
 * Definition for BigArray.
 * class BigArray {
 *     @param {number[]} elements
 *     constructor(elements);
 *
 *     @param {number} index
 *     @return {number}
 *     at(index);
 *
 *     @return {number}
 *     size();
 * }
 */
/**
 * @param {BigArray} nums
 * @return {number}
 */
var countBlocks = function(nums) {
    const size = nums.size();
    let count = 0;
    let lo = 0;
    while (lo < size) {
        count++;
        const v = nums.at(lo);
        let l = lo + 1, r = size; // first index in (lo, size) with value != v
        while (l < r) {
            const mid = Math.floor((l + r) / 2);
            if (nums.at(mid) === v) l = mid + 1;
            else r = mid;
        }
        lo = l;
    }
    return count;
};
// @lc code=end

// TEST:
class BigArray {
    constructor(elements) { this.elements = elements; }
    at(index) { return this.elements[index]; }
    size() { return this.elements.length; }
};
console.log(countBlocks(new BigArray([3,3,3,3,3]))); // 1
console.log(countBlocks(new BigArray([1,1,1,3,9,9,9,2,10,10]))); // 5
console.log(countBlocks(new BigArray([1,2,3,4,5,6,7]))); // 7
console.log(countBlocks(new BigArray([5]))); // 1
console.log(countBlocks(new BigArray([2,2]))); // 1
