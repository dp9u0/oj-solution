/*
 * @lc app=leetcode id=3927 lang=javascript
 *
 * [3927] Minimize Array Sum Using Divisible Replacements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minArraySum = function(nums) {
    const maxV = Math.max(...nums);
    const m = Math.min(...nums);

    // present[v]: 值 v 是否出现
    const present = new Array(maxV + 1).fill(false);
    for (const v of nums) present[v] = true;

    // canReachM[v]: 现存值 v 能否沿整除链降到 m
    // 从 m 出发，凡是 A 中成员的(现存)倍数也能降到 m
    const canReachM = new Array(maxV + 1).fill(false);
    canReachM[m] = true;
    for (let w = m; w <= maxV; w++) {
        if (!canReachM[w]) continue;
        for (let mult = 2 * w; mult <= maxV; mult += w) {
            if (present[mult]) canReachM[mult] = true;
        }
    }

    // minDiv[v]: v 的最小现存因子（v 本身出现，故必存在）
    const minDiv = new Array(maxV + 1).fill(0);
    for (let u = m; u <= maxV; u++) {
        if (!present[u]) continue;
        for (let mult = u; mult <= maxV; mult += u) {
            if (minDiv[mult] === 0) minDiv[mult] = u;
        }
    }

    let sum = 0;
    for (const v of nums) sum += canReachM[v] ? m : minDiv[v];
    return sum;
};
// @lc code=end

// TEST:
console.log(minArraySum([3, 6, 2]) === 7); // 6->2, => [3,2,2]
console.log(minArraySum([4, 2, 8, 3]) === 9); // 4->2, 8->2, => [2,2,2,3]
console.log(minArraySum([7, 5, 9]) === 21); // 无操作
console.log(minArraySum([1, 100]) === 2); // 全部降到 1
console.log(minArraySum([5]) === 5); // 单元素
console.log(minArraySum([12, 6, 4]) === 14); // 12->4 (4 的倍数), 6 的最小现存因子是 6 => 4+6+4
console.log(minArraySum([9, 6, 2, 3]) === 10); // 9 的最小现存因子 3, 6->2 => 3+2+2+3
console.log(minArraySum([10, 4, 2]) === 6); // 10、4 均为 2 的倍数 => [2,2,2]
