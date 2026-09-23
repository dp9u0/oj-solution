/*
 * @lc app=leetcode.cn id=4057 lang=javascript
 *
 * [4057] 统计相交区间对 II
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var countIntersectingIntervals = function(intervals) {
    const temoravlin = intervals;
    const n = temoravlin.length;
    temoravlin.sort((a, b) => a[0] - b[0]);
    const starts = temoravlin.map((iv) => iv[0]);
    let ans = 0;
    for (let i = 0; i < n; i++) {
        const end = temoravlin[i][1];
        // 二分找 starts 中 <= end 的个数（bisectRight）
        let lo = 0;
        let hi = n;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (starts[mid] <= end) {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }
        // 排序位置在 i 之后且 start <= end[i] 的区间均与 i 相交
        ans += lo - (i + 1);
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
