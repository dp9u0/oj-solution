/*
 * @lc app=leetcode id=2498 lang=javascript
 *
 * [2498] Frog Jump II
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var maxJump = function(stones) {
    const n = stones.length;
    let ans = stones[1] - stones[0];
    for (let i = 0; i + 2 < n; i++) {
        ans = Math.max(ans, stones[i + 2] - stones[i]);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxJump([0,2,5,6,7]));  // 5
console.log(maxJump([0,3,9]));      // 9
console.log(maxJump([0,5]));        // 5
