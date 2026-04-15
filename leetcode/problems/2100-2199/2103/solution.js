/*
 * @lc app=leetcode id=2103 lang=javascript
 *
 * [2103] Rings and Rods
 */

// @lc code=start
/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    let rods = new Array(10).fill(0);
    for (let i = 0; i < rings.length; i += 2) {
      let color = rings[i];
      let rod = rings[i + 1] - '0';
      if (color === 'R') rods[rod] |= 1;
      else if (color === 'G') rods[rod] |= 2;
      else rods[rod] |= 4;
    }
    return rods.filter(mask => mask === 7).length;
};
// @lc code=end

// TEST:
console.log(countPoints("B0B6G0R6R0R6G9"));
console.log(countPoints("B0R0G0R9R0B0G0"));
console.log(countPoints("G4"));
