/*
 * @lc app=leetcode.cn id=4099 lang=javascript
 *
 * [4099] 将锁定数组排序的最少操作次数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} locked
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, locked, k) {
    const n = nums.length;
    // 差分标记被经过的交换位置（位置 p 交换 nums[p] 与 nums[p+1]）
    const diff = new Array(n + 1).fill(0);
    for (let s = 0; s < n; s++) {
        const f = nums[s] - 1;
        if (s === f) continue;
        const lo = Math.min(s, f);
        const hi = Math.max(s, f) - 1;
        diff[lo]++;
        diff[hi + 1]--;
    }
    // 交换位置 p 需要下标 p 和 p+1 都解锁
    const needed = new Array(n).fill(false);
    let cover = 0;
    for (let p = 0; p < n - 1; p++) {
        cover += diff[p];
        if (cover > 0) {
            needed[p] = true;
            needed[p + 1] = true;
        }
    }
    // 被迫解锁的锁定下标数
    let mustUnlock = 0;
    for (let i = 0; i < n; i++) {
        if (needed[i] && locked[i] === 1) mustUnlock++;
    }
    if (mustUnlock > k) return -1;
    const felnorqavi = nums; // 按题面要求中转保存输入
    // 最少交换次数 = 逆序数
    let inv = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] > nums[j]) inv++;
        }
    }
    return mustUnlock + inv;
};
// @lc code=end

// TEST:
console.log(minOperations([2,1,3,4], [0,1,0,1], 1)); // Expected: 2
console.log(minOperations([3,1,2], [1,0,1], 2)); // Expected: 4
console.log(minOperations([2,3,1], [1,0,0], 0)); // Expected: -1
console.log(minOperations([1,2,3], [1,1,1], 0)); // Expected: 0 (已有序)
console.log(minOperations([2,1], [0,0], 0)); // Expected: 1
console.log(minOperations([2,1], [1,1], 1)); // Expected: -1 (需解锁 2 个)
console.log(minOperations([2,1], [1,1], 2)); // Expected: 3
console.log(minOperations([1,3,2], [0,0,1], 0)); // Expected: -1 (交换位置 1 需下标 2 解锁)
console.log(minOperations([1,3,2], [0,0,1], 1)); // Expected: 2
