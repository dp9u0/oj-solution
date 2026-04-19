/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ];
  let set = new Set();
  for (let obs of obstacles) {
    set.add(`[${obs[0]},${obs[1]}]`);
  }
  let d = 0,
    x = 0,
    y = 0,
    result = 0;
  for (let c of commands) {
    if (c === -1) {
      d = (d + 1) % 4;
    } else if (c === -2) {
      d = d === 0 ? 3 : d - 1;
    } else {
      // Can Move To Next position?
      while (c-- > 0 && !set.has(`[${x + dirs[d][0]},${y + dirs[d][1]}]`)) {
        x += dirs[d][0];
        y += dirs[d][1];
      }
    }
    result = Math.max(result, x * x + y * y); // calc square of the **maximum** Euclidean distance 
  }
  return result;
};