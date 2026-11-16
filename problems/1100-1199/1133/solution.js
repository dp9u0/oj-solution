/*
 * @lc app=leetcode.cn id=1133 lang=javascript
 *
 * [1133] 最大唯一数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    const freq = new Array(1001).fill(0);
    for (const x of nums) freq[x]++;
    for (let v = 1000; v >= 0; v--) {
        if (freq[v] === 1) return v;
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(largestUniqueNumber([5, 7, 3, 9, 4, 9, 8, 3, 1])); // 8
console.log(largestUniqueNumber([9, 9, 8, 8])); // -1
console.log(largestUniqueNumber([1000])); // 1000
console.log(largestUniqueNumber([0])); // 0
console.log(largestUniqueNumber([2, 2, 1, 1, 3])); // 3
