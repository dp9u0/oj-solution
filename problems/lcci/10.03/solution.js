/*
 * @lc app=leetcode.cn id=面试题 10.03 lang=javascript
 *
 * [面试题 10.03] 搜索旋转数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var search = function(arr, target) {
    // 含重复时比较式搜索最坏 O(n) 为下界，线性扫首个命中即最小索引
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(search([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 5) === 8);
console.log(search([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 11) === -1);
console.log(search([2, 2, 2, 3, 2, 2], 3) === 3); // 旋转 + 重复
console.log(search([1, 1, 1, 1], 1) === 0); // 多个命中取最小索引
console.log(search([1], 0) === -1);
console.log(search([5], 5) === 0);
