/*
 * @lc app=leetcode.cn id=4048 lang=javascript
 *
 * [4048] 统计等间距出现整数数目 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countSpecialIntegers = function(nums) {
    // 按值分组出现下标
    const pos = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!pos.has(nums[i])) pos.set(nums[i], []);
        pos.get(nums[i]).push(i);
    }
    // 恰好出现 3 次 且 两个间隔相等
    let ans = 0;
    for (const idx of pos.values()) {
        if (idx.length === 3 && idx[1] - idx[0] === idx[2] - idx[1]) ans++;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(countSpecialIntegers([1, 8, 1, 5, 1, 5, 8, 5])); // Expected: 2
console.log(countSpecialIntegers([8, 8, 8, 8])); // Expected: 0
console.log(countSpecialIntegers([8, 6, 6, 8, 8])); // Expected: 0
console.log(countSpecialIntegers([1, 2, 3])); // Expected: 0 (all appear once)
console.log(countSpecialIntegers([7, 7, 7])); // Expected: 1 (indices 0,1,2 equally spaced)
console.log(countSpecialIntegers([4, 9, 4, 4])); // Expected: 0 (indices 0,2,3 not equally spaced)
