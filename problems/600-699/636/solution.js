/*
 * @lc app=leetcode id=636 lang=javascript
 *
 * [636] Exclusive Time of Functions
 */

// @lc code=start
/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
  const result = new Array(n).fill(0);
  const stack = [];
  let prev = 0;
  for (const log of logs) {
    const parts = log.split(':');
    const id = parseInt(parts[0]);
    const type = parts[1];
    const ts = parseInt(parts[2]);
    if (type === 'start') {
      if (stack.length) {
        result[stack[stack.length - 1]] += ts - prev;
      }
      stack.push(id);
      prev = ts;
    } else {
      result[stack.pop()] += ts - prev + 1;
      prev = ts + 1;
    }
  }
  return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(exclusiveTime(2, ["0:start:0","1:start:2","1:end:5","0:end:6"]))); // [3,4]
console.log(JSON.stringify(exclusiveTime(1, ["0:start:0","0:start:2","0:end:5","0:start:6","0:end:6","0:end:7"]))); // [8]
console.log(JSON.stringify(exclusiveTime(2, ["0:start:0","0:start:2","0:end:5","1:start:6","1:end:6","0:end:7"]))); // [7,1]
