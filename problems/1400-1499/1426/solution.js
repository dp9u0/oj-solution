/*
 * @lc app=leetcode.cn id=1426 lang=javascript
 *
 * [1426] 数元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    const set = new Set(arr);
    let count = 0;
    for (const x of arr) {
        if (set.has(x + 1)) count++;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(countElements([1, 2, 3])); // 2
console.log(countElements([1, 1, 3, 3, 5, 5, 7, 7])); // 0
console.log(countElements([1, 3, 2, 3, 5, 0])); // 3
console.log(countElements([1, 1, 2])); // 2 (duplicates count separately)
console.log(countElements([7])); // 0
