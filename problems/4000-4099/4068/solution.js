/*
 * @lc app=leetcode.cn id=4068 lang=javascript
 *
 * [4068] 考虑空闲时间的会议最大收益
 */

// @lc code=start
/**
 * @param {number[][]} meetings
 * @return {number}
 */
var maxEarnings = function(meetings) {
    const valmeritho = meetings.slice().sort((a, b) => a[1] - b[1]);
    const n = valmeritho.length;
    const ends = valmeritho.map((m) => m[1]);
    const preMax = new Array(n);
    let ans = -Infinity;
    for (let i = 0; i < n; i++) {
        const [s, e, rev] = valmeritho[i];
        // 二分找最右的 end <= s 的下标 p
        let lo = 0;
        let hi = i - 1;
        let p = -1;
        while (lo <= hi) {
            const mid = (lo + hi) >> 1;
            if (ends[mid] <= s) {
                p = mid;
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        // 单独选 i，或接在 preMax[p] 对应的方案后
        let best = rev;
        if (p >= 0) best = Math.max(best, rev + s + preMax[p]);
        preMax[i] = i === 0 ? best - e : Math.max(preMax[i - 1], best - e);
        if (best > ans) ans = best;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxEarnings([[2, 5, 4], [6, 8, 3]])); // 8 (7 + 空闲 1)
console.log(maxEarnings([[3, 5, 4], [4, 7, 8], [8, 10, 3]])); // 12
console.log(maxEarnings([[1, 2, 2], [4, 5, 2], [7, 9, 3]])); // 11
console.log(maxEarnings([[0, 10, 5]])); // 5 (单场会议无空闲收益)
console.log(maxEarnings([[1, 3, 2], [3, 5, 2]])); // 4 (端点相接不重叠，空闲 0)
console.log(maxEarnings([[1, 10, 100], [2, 3, 50], [4, 5, 50]])); // 101 (放弃长会)
console.log(maxEarnings([[1, 5, 3], [6, 7, 1]])); // 5
