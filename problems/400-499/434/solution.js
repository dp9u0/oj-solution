/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  let segStart = false;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      if (segStart) {
        count++;
      }
      segStart = false;
    } else {
      segStart = true;
    }
  }
  return segStart ? count + 1 : count;
};