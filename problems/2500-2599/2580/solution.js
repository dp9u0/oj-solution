/*
 * @lc app=leetcode id=2580 lang=javascript
 *
 * [2580] Count Ways to Group Overlapping Ranges
 */

// @lc code=start
/**
 * @param {number[][]} ranges
 * @return {number}
 */
var countWays = function(ranges) {
    const MOD = 1e9 + 7;
    ranges.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    let groups = 0;
    let end = -1;
    for (let i = 0; i < ranges.length; i++) {
        if (ranges[i][0] > end) {
            groups++;
            end = ranges[i][1];
        } else {
            end = Math.max(end, ranges[i][1]);
        }
    }

    let result = 1n;
    const bigMod = BigInt(MOD);
    for (let i = 0; i < groups; i++) {
        result = result * 2n % bigMod;
    }
    return Number(result);
};
// @lc code=end

// TEST:
console.log(countWays([[6,10],[5,15]]));                // 2
console.log(countWays([[1,3],[10,20],[2,5],[4,8]]));    // 4
console.log(countWays([[1,1]]));                        // 2
