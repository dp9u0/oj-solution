/*
 * @lc app=leetcode id=2337 lang=javascript
 *
 * [2337] Move Pieces to Obtain a String
 */

// @lc code=start
/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function(start, target) {
  const n = start.length;
  let i = 0, j = 0;
  while (i < n || j < n) {
    while (i < n && start[i] === '_') i++;
    while (j < n && target[j] === '_') j++;
    if (i === n && j === n) return true;
    if (i === n || j === n) return false;
    if (start[i] !== target[j]) return false;
    if (start[i] === 'L' && i < j) return false;
    if (start[i] === 'R' && i > j) return false;
    i++;
    j++;
  }
  return true;
};
// @lc code=end

// TEST:
console.log(canChange('_L__R__R_', 'L______RR')); // true
console.log(canChange('R_L_', '__LR')); // false
console.log(canChange('_R', 'R_')); // false
console.log(canChange('L_', 'L_')); // true
console.log(canChange('_LL_', 'LL__')); // true (both L's move left)
console.log(canChange('R__L', '_LR_')); // false
console.log(canChange('____', '____')); // true
