/*
 * @lc app=leetcode id=2751 lang=javascript
 *
 * [2751] Robot Collisions
 */

// @lc code=start
/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function(positions, healths, directions) {
    const n = positions.length;
    const robots = [];
    for (let i = 0; i < n; i++) {
        robots.push({ pos: positions[i], hp: healths[i], dir: directions[i], idx: i });
    }
    robots.sort((a, b) => a.pos - b.pos);

    const stack = [];
    for (const robot of robots) {
        if (robot.dir === 'R') {
            stack.push(robot);
        } else {
            // L direction: collide with R robots on stack
            while (stack.length > 0 && stack[stack.length - 1].dir === 'R' && robot.hp > 0) {
                const top = stack[stack.length - 1];
                if (top.hp > robot.hp) {
                    top.hp--;
                    robot.hp = 0;
                } else if (top.hp < robot.hp) {
                    stack.pop();
                    robot.hp--;
                } else {
                    stack.pop();
                    robot.hp = 0;
                }
            }
            if (robot.hp > 0) {
                stack.push(robot);
            }
        }
    }

    stack.sort((a, b) => a.idx - b.idx);
    return stack.map(r => r.hp);
};
// @lc code=end

// TEST:
console.log(survivedRobotsHealths([5,4,3,2,1], [2,17,9,15,10], "RRRRR"));
console.log(survivedRobotsHealths([3,5,2,6], [10,10,15,12], "RLRL"));
console.log(survivedRobotsHealths([1,2,5,6], [10,10,11,11], "RLRL"));
