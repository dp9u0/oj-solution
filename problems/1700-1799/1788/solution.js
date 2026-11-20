/*
 * @lc app=leetcode.cn id=1788 lang=javascript
 *
 * [1788] 最大化花园的美观度
 */

// @lc code=start
/**
 * @param {number[]} flowers
 * @return {number}
 */
var maximumBeauty = function(flowers) {
    const n = flowers.length;
    const pre = new Array(n + 1).fill(0); // prefix sum of positive values
    for (let i = 0; i < n; i++) pre[i + 1] = pre[i] + Math.max(flowers[i], 0);

    const first = new Map(), best = new Map();
    let ans = -Infinity;
    for (let i = 0; i < n; i++) {
        const v = flowers[i];
        if (first.has(v)) {
            const cand = 2 * v + pre[i] - pre[first.get(v) + 1];
            const prevBest = best.get(v) === undefined ? -Infinity : best.get(v);
            if (cand > prevBest) best.set(v, cand);
        } else {
            first.set(v, i);
        }
    }
    for (const b of best.values()) {
        if (b > ans) ans = b;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maximumBeauty([1,2,3,1,2])); // 8
console.log(maximumBeauty([100,1,1,-3,1])); // 3
console.log(maximumBeauty([-1,-2,0,-1])); // -2
console.log(maximumBeauty([1,1])); // 2
