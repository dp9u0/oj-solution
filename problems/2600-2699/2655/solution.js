/*
 * @lc app=leetcode.cn id=2655 lang=javascript
 *
 * [2655] 寻找最大长度的未覆盖区间
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} ranges
 * @return {number[][]}
 */
var findMaximalUncoveredRanges = function(n, ranges) {
    const sorted = ranges.slice().sort((a, b) => a[0] - b[0]);
    const out = [];
    let cur = 0;
    for (const [l, r] of sorted) {
        if (l > cur) out.push([cur, l - 1]);
        if (r + 1 > cur) cur = r + 1;
    }
    if (cur <= n - 1) out.push([cur, n - 1]);
    return out;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findMaximalUncoveredRanges(10, [[3,5],[7,8]]))); // [[0,2],[6,6],[9,9]]
console.log(JSON.stringify(findMaximalUncoveredRanges(3, [[0,2]]))); // []
console.log(JSON.stringify(findMaximalUncoveredRanges(7, [[2,4],[0,3]]))); // [[5,6]]
console.log(JSON.stringify(findMaximalUncoveredRanges(1, []))); // [[0,0]]
console.log(JSON.stringify(findMaximalUncoveredRanges(5, [[2,2],[2,3]]))); // [[0,1],[4,4]]
