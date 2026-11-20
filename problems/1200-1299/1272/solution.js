/*
 * @lc app=leetcode.cn id=1272 lang=javascript
 *
 * [1272] 删除区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} toBeRemoved
 * @return {number[][]}
 */
var removeInterval = function(intervals, toBeRemoved) {
    const [r0, r1] = toBeRemoved;
    const res = [];
    for (const [a, b] of intervals) {
        if (a < r0) res.push([a, Math.min(b, r0)]); // left remnant (never empty)
        if (b > r1) res.push([Math.max(a, r1), b]); // right remnant (never empty)
    }
    return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(removeInterval([[0,2],[3,4],[5,7]], [1,6]))); // [[0,1],[6,7]]
console.log(JSON.stringify(removeInterval([[0,5]], [2,3]))); // [[0,2],[3,5]]
console.log(JSON.stringify(removeInterval([[-5,-4],[-3,-2],[1,2],[3,5],[8,9]], [-1,4]))); // [[-5,-4],[-3,-2],[4,5],[8,9]]
console.log(JSON.stringify(removeInterval([[1,3]], [1,3]))); // [] (fully removed)
