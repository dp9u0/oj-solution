/*
 * @lc app=leetcode.cn id=760 lang=javascript
 *
 * [760] 找出变位映射
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var anagramMappings = function(nums1, nums2) {
    const pos = new Map();
    for (let i = 0; i < nums2.length; i++) pos.set(nums2[i], i);
    return nums1.map(x => pos.get(x));
};
// @lc code=end

// TEST:
console.log(anagramMappings([12, 28, 46, 32, 50], [50, 12, 32, 46, 28])); // [1,4,3,2,0]
console.log(anagramMappings([1, 2], [2, 1])); // [1,0]
console.log(anagramMappings([7], [7])); // [0]
console.log(anagramMappings([3, 3, 3], [3, 3, 3])); // [0,0,0]
console.log(anagramMappings([1, 2, 3], [3, 2, 1])); // [2,1,0]
