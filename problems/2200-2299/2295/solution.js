/*
 * @lc app=leetcode id=2295 lang=javascript
 *
 * [2295] Replace Elements in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function(nums, operations) {
    const indexMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        indexMap.set(nums[i], i);
    }

    for (const [from, to] of operations) {
        const idx = indexMap.get(from);
        nums[idx] = to;
        indexMap.delete(from);
        indexMap.set(to, idx);
    }

    return nums;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(arrayChange([1,2,4,6], [[1,3],[4,7],[6,1]]))); // [3,2,7,1]
console.log(JSON.stringify(arrayChange([1,2], [[1,3],[2,1],[3,2]])));       // [2,1]
