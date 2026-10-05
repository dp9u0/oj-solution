/*
 * @lc app=leetcode.cn id=4067 lang=javascript
 *
 * [4067] 数对和受限的最长子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarray = function(nums) {
    const dravolenti = nums;
    const n = dravolenti.length;
    const MAXV = 500;
    // bestSum[s] / bestDiff[d]：产生该和/差的数对中较小下标的最大值（-1 表示无）
    const bestSum = new Array(2 * MAXV + 1).fill(-1);
    const bestDiff = new Array(MAXV + 1).fill(-1);
    let left = 0;
    let ans = 0;
    for (let r = 0; r < n; r++) {
        const x = dravolenti[r];
        // x 作为和（数对和为 x）或作为加数（数对差为 x）都会构成非法三元组
        if (bestSum[x] >= left) left = bestSum[x] + 1;
        if (bestDiff[x] >= left) left = bestDiff[x] + 1;
        if (r - left + 1 > ans) ans = r - left + 1;
        // 插入当前元素与之前所有元素构成的数对
        for (let i = 0; i < r; i++) {
            const s = x + dravolenti[i];
            if (i > bestSum[s]) bestSum[s] = i;
            const d = Math.abs(x - dravolenti[i]);
            if (i > bestDiff[d]) bestDiff[d] = i;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxSubarray([2, 3, 5, 3, 2, 1])); // 3
console.log(maxSubarray([3, 4, 5, 6])); // 4
console.log(maxSubarray([1, 1, 2])); // 2 (1+1=2)
console.log(maxSubarray([1])); // 1
console.log(maxSubarray([3, 3, 3])); // 3 (3+3=6 无冲突)
console.log(maxSubarray([1, 2, 3])); // 2 (1+2=3)
console.log(maxSubarray([2, 2, 4, 2])); // 2
