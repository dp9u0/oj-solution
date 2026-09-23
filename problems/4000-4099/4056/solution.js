/*
 * @lc app=leetcode.cn id=4056 lang=javascript
 *
 * [4056] 统计相交区间对 I
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var countIntersectingIntervals = function(intervals) {
    const n = intervals.length;
    let ans = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // 闭区间相交：max(s1, s2) <= min(e1, e2)
            if (Math.max(intervals[i][0], intervals[j][0]) <= Math.min(intervals[i][1], intervals[j][1])) {
                ans++;
            }
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(countIntersectingIntervals([[1, 2], [2, 3], [3, 4]])); // 2
console.log(countIntersectingIntervals([[1, 5], [2, 4], [3, 6]])); // 3
console.log(countIntersectingIntervals([[1, 2], [3, 4], [5, 6]])); // 0
console.log(countIntersectingIntervals([[1, 3], [3, 5], [3, 7]])); // 3 (共享端点也算相交)
console.log(countIntersectingIntervals([[1, 10], [2, 3], [4, 5]])); // 2 (嵌套区间)
console.log(countIntersectingIntervals([[0, 0], [0, 0]])); // 1 (单点区间重合)
console.log(countIntersectingIntervals([[1, 2], [2, 4]])); // 1 (仅共享一个端点)
