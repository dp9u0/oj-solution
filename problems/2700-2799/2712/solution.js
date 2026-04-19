/*
 * @lc app=leetcode id=2712 lang=javascript
 *
 * [2712] Minimum Cost to Make All Characters Equal
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minimumCost = function(s) {
    const n = s.length;
    let cost = 0;
    for (let i = 0; i < n - 1; i++) {
        if (s[i] !== s[i + 1]) {
            cost += Math.min(i + 1, n - i - 1);
        }
    }
    return cost;
};
// @lc code=end

// TEST:
console.log(minimumCost('0011')); // 2
console.log(minimumCost('010101')); // 9
console.log(minimumCost('00000')); // 0
