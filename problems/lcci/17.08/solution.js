/*
 * @lc app=leetcode.cn id=面试题 17.08 lang=javascript
 *
 * [面试题 17.08] 马戏团人塔
 */

// @lc code=start
/**
 * @param {number[]} height
 * @param {number[]} weight
 * @return {number}
 */
var bestSeqAtIndex = function(height, weight) {
    const n = height.length;
    const idx = Array.from({ length: n }, (_, i) => i);
    // 身高升序；同身高按体重降序，保证同身高的人无法同时入选（塔内需严格更矮）
    idx.sort((a, b) => height[a] - height[b] || weight[b] - weight[a]);
    // 耐心排序求体重的严格 LIS：tails[i] = 长度 i+1 子序列的最小结尾
    const tails = [];
    for (const i of idx) {
        const w = weight[i];
        let lo = 0, hi = tails.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (tails[mid] < w) lo = mid + 1;
            else hi = mid;
        }
        // 相等体重替换而非扩展，保证严格递增
        if (lo === tails.length) tails.push(w);
        else tails[lo] = w;
    }
    return tails.length;
};
// @lc code=end

// TEST:
console.log(bestSeqAtIndex([65, 70, 56, 75, 60, 68], [100, 150, 90, 190, 95, 110]) === 6);
console.log(bestSeqAtIndex([65], [100]) === 1);
console.log(bestSeqAtIndex([65, 65], [100, 100]) === 1); // 完全相同的人只能选一个
console.log(bestSeqAtIndex([1, 2], [2, 1]) === 1);
console.log(bestSeqAtIndex([1, 2, 3], [1, 2, 3]) === 3);
console.log(bestSeqAtIndex([1, 2, 3], [3, 2, 1]) === 1);
console.log(bestSeqAtIndex([65, 65, 70], [100, 95, 100]) === 2); // 同身高取体重小者
