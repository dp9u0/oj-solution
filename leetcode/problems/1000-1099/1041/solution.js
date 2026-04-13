/*
 * @lc app=leetcode id=1041 lang=javascript
 *
 * [1041] Robot Bounded In Circle
 */

// @lc code=start
/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let x = 0, y = 0, d = 0;
    for (const ch of instructions) {
        if (ch === 'G') {
            x += dirs[d][0];
            y += dirs[d][1];
        } else if (ch === 'L') {
            d = (d + 3) % 4;
        } else {
            d = (d + 1) % 4;
        }
    }
    return (x === 0 && y === 0) || d !== 0;
};
// @lc code=end

// TEST:
console.log(isRobotBounded("GGLLGG")); // true
console.log(isRobotBounded("GG"));     // false
console.log(isRobotBounded("GL"));     // true
