/*
 * @lc app=leetcode id=1496 lang=javascript
 *
 * [1496] Path Crossing
 */

// @lc code=start
/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    const visited = new Set(['0,0']);
    let x = 0, y = 0;
    const dirs = { 'N': [0,1], 'S': [0,-1], 'E': [1,0], 'W': [-1,0] };
    for (const ch of path) {
        x += dirs[ch][0];
        y += dirs[ch][1];
        const key = `${x},${y}`;
        if (visited.has(key)) return true;
        visited.add(key);
    }
    return false;
};
// @lc code=end

// TEST:
console.log(isPathCrossing("NES")); // false
console.log(isPathCrossing("NESWW")); // true
