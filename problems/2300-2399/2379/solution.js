/*
 * @lc app=leetcode id=2379 lang=javascript
 *
 * [2379] Minimum Recolors to Get K Consecutive Black Blocks
 */

// @lc code=start
/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let w = 0, res = k;
    for (let i = 0; i < blocks.length; i++) {
        if (blocks[i] === 'W') w++;
        if (i >= k && blocks[i - k] === 'W') w--;
        if (i >= k - 1) res = Math.min(res, w);
    }
    return res;
};
// @lc code=end

// TEST:
console.log(minimumRecolors("WBBWWBBWBW", 7)); // 3
console.log(minimumRecolors("WBWBBBW", 2)); // 0
