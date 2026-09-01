/*
 * @lc app=leetcode.cn id=LCP 03 lang=javascript
 *
 * [LCP 03] 机器人大冒险
 */

// @lc code=start
/**
 * @param {string} command
 * @param {number[][]} obstacles
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var robot = function(command, obstacles, x, y) {
  // dx/dy: displacement per full cycle
  let dx = 0;
  let dy = 0;
  for (const c of command) {
    if (c === 'U') dy++;
    else dx++;
  }

  // prefixSet: positions reachable within a single command (0-indexed step count)
  // We store offset -> steps within cycle (0 at origin).
  const posStep = new Map();
  let px = 0;
  let py = 0;
  let step = 0;
  posStep.set('0,0', 0);
  for (const c of command) {
    if (c === 'U') py++;
    else px++;
    step++;
    posStep.set(px + ',' + py, step);
  }

  // Return the total number of steps from origin to reach (sx, sy), or -1 if unreachable.
  const stepsTo = (sx, sy) => {
    if (sx < 0 || sy < 0) return -1;
    // full cycles completed before reaching this point
    const k = Math.floor(Math.min(sx / dx, sy / dy));
    const rx = sx - k * dx;
    const ry = sy - k * dy;
    const inner = posStep.get(rx + ',' + ry);
    if (inner === undefined) return -1;
    return k * command.length + inner;
  };

  const targetSteps = stepsTo(x, y);
  if (targetSteps === -1) return false;

  for (const [ox, oy] of obstacles) {
    const oSteps = stepsTo(ox, oy);
    // obstacle blocks only if reached strictly before the target
    if (oSteps !== -1 && oSteps < targetSteps) return false;
  }

  return true;
};
// @lc code=end

// TEST:
// Example 1
console.log(robot('URR', [], 3, 2) === true);
// Example 2
console.log(robot('URR', [[2, 2]], 3, 2) === false);
// Example 3
console.log(robot('URR', [[4, 2]], 3, 2) === true);
// Obstacle before target but off path -> not blocking
console.log(robot('URR', [[1, 3]], 3, 2) === true);
// Target unreachable by path geometry
console.log(robot('RU', [], 3, 0) === false);
// Multi-cycle: obstacle hits before target
console.log(robot('UR', [[1, 1]], 2, 2) === false);
// Multi-cycle: obstacle strictly before target on path
console.log(robot('UR', [[1, 1]], 3, 3) === false);
