/*
 * @lc app=leetcode.cn id=2229 lang=javascript
 *
 * [2229] 检查数组是否连贯
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isConsecutive = function(nums) {
    const n = nums.length;
    let min = Infinity, max = -Infinity;
    const set = new Set();
    for (const x of nums) {
        if (x < min) min = x;
        if (x > max) max = x;
        set.add(x);
    }
    return set.size === n && max - min === n - 1;
};
// @lc code=end

// TEST:
console.log(isConsecutive([1, 3, 4, 2])); // true
console.log(isConsecutive([1, 3])); // false
console.log(isConsecutive([3, 5, 4])); // true
console.log(isConsecutive([1])); // true
console.log(isConsecutive([1, 1, 2])); // false (duplicate)
console.log(isConsecutive([0, 2])); // false (gap)
