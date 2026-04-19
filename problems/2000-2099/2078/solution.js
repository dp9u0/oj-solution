/*
 * @lc app=leetcode id=2078 lang=javascript
 *
 * [2078] Two Furthest Houses With Different Colors
 */

// @lc code=start
/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    let n = colors.length;
    let ans = 0;
    for (let i = n - 1; i > 0; i--) {
        if (colors[i] !== colors[0]) { ans = i; break; }
    }
    for (let i = 0; i < n - 1; i++) {
        if (colors[i] !== colors[n - 1]) { ans = Math.max(ans, n - 1 - i); break; }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxDistance([1,1,1,6,1,1,1]));
console.log(maxDistance([1,8,3,8,3]));
console.log(maxDistance([0,1]));
