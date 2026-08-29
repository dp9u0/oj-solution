/*
 * @lc app=leetcode id=1585 lang=javascript
 *
 * [1585] Check If String Is Transformable With Substring Sort Operations
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isTransformable = function(s, t) {
  if (s.length !== t.length) return false;
  const queues = Array.from({ length: 10 }, () => []);
  for (let i = 0; i < s.length; i++) queues[s.charCodeAt(i) - 48].push(i);
  for (const ch of t) {
    const c = ch.charCodeAt(0) - 48;
    if (queues[c].length === 0) return false;
    const p = queues[c][0];
    for (let d = 0; d < c; d++) {
      if (queues[d].length > 0 && queues[d][0] < p) return false;
    }
    queues[c].shift();
  }
  return true;
};
// @lc code=end

// TEST:
console.log(isTransformable('84532', '34852') === true);
console.log(isTransformable('34521', '23415') === true);
console.log(isTransformable('12345', '12435') === false);
console.log(isTransformable('1', '2') === false);
console.log(isTransformable('0', '0') === true);
