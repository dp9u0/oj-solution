/*
 * @lc app=leetcode.cn id=4107 lang=javascript
 *
 * [4107] 统计有效后缀排序的数量 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} target
 * @return {number}
 */
var countSuffix = function(nums, target) {
    const n = nums.length;

    // multiset(nums) == multiset(target)?
    const cnt = new Map();
    for (const v of nums) cnt.set(v, (cnt.get(v) || 0) + 1);
    let multisetOK = true;
    for (const v of target) {
        const c = cnt.get(v) || 0;
        if (c === 0) multisetOK = false;
        else cnt.set(v, c - 1);
    }
    if (!multisetOK) return 0;

    // z: nums 与 target 的前缀逐位相等长度
    let z = 0;
    while (z < n && nums[z] === target[z]) z++;

    // target 结尾的最长非递增段长度
    let runEnd = 1;
    for (let j = n - 2; j >= 0 && target[j] >= target[j + 1]; j--) runEnd++;

    const i0 = Math.max(0, n - runEnd);
    return Math.max(0, Math.min(z, n - 1) - i0 + 1);
};
// @lc code=end

// TEST:
console.log(countSuffix([1, 2, 3], [3, 2, 1]) === 1);
console.log(countSuffix([1, 5, 6, 4, 6], [1, 5, 6, 6, 4]) === 2);
console.log(countSuffix([7, 6, 8], [8, 6, 7]) === 0);
console.log(countSuffix([1], [1]) === 1);
console.log(countSuffix([1], [2]) === 0);
console.log(countSuffix([2, 1], [2, 1]) === 2);
console.log(countSuffix([1, 2], [2, 1]) === 1);
