/*
 * @lc app=leetcode id=789 lang=javascript
 *
 * [789] Escape The Ghosts
 */

// @lc code=start
/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function(ghosts, target) {
    const [tx, ty] = target;
    const myDist = Math.abs(tx) + Math.abs(ty);
    for (const [gx, gy] of ghosts) {
        if (Math.abs(gx - tx) + Math.abs(gy - ty) <= myDist) return false;
    }
    return true;
};
// @lc code=end

// TEST:
console.log(escapeGhosts([[1,0],[0,3]], [0,1])); // true
console.log(escapeGhosts([[1,0]], [2,0])); // false
console.log(escapeGhosts([[2,0]], [1,0])); // false
