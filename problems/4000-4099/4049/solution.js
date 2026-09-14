/*
 * @lc app=leetcode.cn id=4049 lang=javascript
 *
 * [4049] 统计等间距出现整数数目 II
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
    // 至少出现 3 次 且 全部相邻间隔相等
    let ans = 0;
    for (const idx of pos.values()) {
        if (idx.length < 3) continue;
        const d = idx[1] - idx[0];
        let ok = true;
        for (let i = 2; i < idx.length; i++) {
            if (idx[i] - idx[i - 1] !== d) {
                ok = false;
                break;
            }
        }
        if (ok) ans++;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(countSpecialIntegers([1, 8, 1, 5, 1, 5, 8, 5])); // Expected: 2
console.log(countSpecialIntegers([8, 8, 8, 8])); // Expected: 1 (indices 0,1,2,3)
console.log(countSpecialIntegers([8, 6, 6, 8, 8])); // Expected: 0
console.log(countSpecialIntegers([1, 2, 3])); // Expected: 0
console.log(countSpecialIntegers([7, 7, 7])); // Expected: 1
console.log(countSpecialIntegers([4, 9, 4, 4, 4])); // Expected: 0 (gaps 2,1,1)
console.log(countSpecialIntegers([5, 5, 5, 5, 5])); // Expected: 1
