/*
 * @lc app=leetcode.cn id=4086 lang=javascript
 *
 * [4086] 覆盖目标区间的最少区间
 */

// @lc code=start
/**
 * @param {number[][]} availableIntervals
 * @param {number[][]} targetIntervals
 * @return {number}
 */
var minSelection = function(availableIntervals, targetIntervals) {
    // 合并目标区间（端点相接可并，正 gap 不并）；available 按左端排序
    const targets = targetIntervals
        .slice()
        .sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    const merged = [];
    for (const [l, r] of targets) {
        const last = merged[merged.length - 1];
        if (last && l <= last[1]) {
            if (r > last[1]) last[1] = r;
        } else {
            merged.push([l, r]);
        }
    }
    const avail = availableIntervals.slice().sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    // 贪心：未覆盖点处选左端 ≤ 边界中右端最远的区间
    let cur = -Infinity;
    let count = 0;
    let i = 0;
    for (const [L, R] of merged) {
        if (R <= cur) continue; // 已被此前的延伸覆盖
        while (R > cur) {
            const boundary = Math.max(L, cur);
            let bestR = -Infinity;
            while (i < avail.length && avail[i][0] <= boundary) {
                if (avail[i][1] > bestR) bestR = avail[i][1];
                i++;
            }
            if (bestR <= cur) return -1; // 无候选或无法延伸
            count++;
            cur = bestR;
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(minSelection([[1, 4], [1, 7], [3, 9], [5, 10], [10, 15]], [[1, 3], [2, 5], [7, 8], [10, 13], [11, 15], [12, 13]]) === 3);
console.log(minSelection([[1, 2]], [[3, 4]]) === -1); // 无法覆盖
console.log(minSelection([[1, 10]], [[2, 3], [5, 6]]) === 1); // 单区间盖多个目标
console.log(minSelection([[1, 3], [3, 6]], [[1, 6]]) === 2); // 端点相接需两段
console.log(minSelection([[1, 5], [4, 8]], [[1, 8]]) === 2); // 两段各有独占部分
console.log(minSelection([], [[1, 2]]) === -1);
