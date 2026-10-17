/*
 * @lc app=leetcode.cn id=面试题 08.04 lang=javascript
 *
 * [面试题 08.04] 幂集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    // 位掩码枚举 2^n 个子集
    const res = [];
    const n = nums.length;
    for (let mask = 0; mask < 1 << n; mask++) {
        const sub = [];
        for (let i = 0; i < n; i++) {
            if (mask & (1 << i)) sub.push(nums[i]);
        }
        res.push(sub);
    }
    return res;
};
// @lc code=end

// TEST:
// 顺序不敏感：按内容排序后比较
const norm = sets => JSON.stringify(sets.map(s => s.slice().sort((a, b) => a - b)).sort());
console.log(norm(subsets([1, 2, 3])) === norm([[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]));
console.log(norm(subsets([])) === norm([[]]));
console.log(norm(subsets([1])) === norm([[], [1]]));
console.log(norm(subsets([5, 4])) === norm([[], [5], [4], [4, 5]]));
