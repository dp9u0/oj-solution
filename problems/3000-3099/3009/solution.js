/*
 * @lc app=leetcode.cn id=3009 lang=javascript
 *
 * [3009] 折线图上的最大交点数量
 */

// @lc code=start
/**
 * @param {number[]} y
 * @return {number}
 */
var maxIntersectionCount = function(y) {
    const n = y.length;
    const cands = new Set();
    for (const v of y) { cands.add(v); cands.add(v + 0.5); }
    const heights = [...cands].sort((a, b) => a - b);
    // segment events: +1 at min, -1 at max+0.5
    const addAt = new Map();
    const cntAt = new Map(); // interior vertices at exact height
    const bump = (map, key, delta) => map.set(key, (map.get(key) || 0) + delta);
    for (let i = 0; i + 1 < n; i++) {
        const a = Math.min(y[i], y[i + 1]), b = Math.max(y[i], y[i + 1]);
        bump(addAt, a, 1);
        bump(addAt, b + 0.5, -1);
    }
    for (let i = 1; i + 1 < n; i++) bump(cntAt, y[i], 1);
    let active = 0, ans = 0;
    for (const h of heights) {
        if (addAt.has(h)) active += addAt.get(h);
        const pts = active - (cntAt.get(h) || 0);
        if (pts > ans) ans = pts;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxIntersectionCount([1,2,1,2,1,3,2])); // 5
console.log(maxIntersectionCount([2,1,3,4,5])); // 2
console.log(maxIntersectionCount([1,2])); // 1
console.log(maxIntersectionCount([5,1,5])); // 2
console.log(maxIntersectionCount([3,1,2,3])); // 2
