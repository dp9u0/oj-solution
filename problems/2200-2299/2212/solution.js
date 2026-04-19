/*
 * @lc app=leetcode id=2212 lang=javascript
 *
 * [2212] Maximum Points in an Archery Competition
 */

// @lc code=start
/**
 * @param {number} numArrows
 * @param {number[]} aliceArrows
 * @return {number[]}
 */
var maximumBobPoints = function(numArrows, aliceArrows) {
  let bestMask = 0, bestPoints = -1;

  for (let mask = 0; mask < (1 << 12); mask++) {
    let arrows = 0, points = 0;
    for (let k = 0; k < 12; k++) {
      if (mask & (1 << k)) {
        arrows += aliceArrows[k] + 1;
        points += k;
      }
    }
    if (arrows <= numArrows && points > bestPoints) {
      bestPoints = points;
      bestMask = mask;
    }
  }

  const res = new Array(12).fill(0);
  let used = 0;
  for (let k = 0; k < 12; k++) {
    if (bestMask & (1 << k)) {
      res[k] = aliceArrows[k] + 1;
      used += res[k];
    }
  }
  if (used < numArrows) res[0] += numArrows - used;
  return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(maximumBobPoints(9, [1,1,0,1,0,0,2,1,0,1,2,0]))); // sum=9, max points
console.log(JSON.stringify(maximumBobPoints(3, [0,0,1,0,0,0,0,0,0,0,0,2]))); // [0,0,0,0,0,0,0,0,1,1,1,0]
console.log(JSON.stringify(maximumBobPoints(1, [0,0,0,0,0,0,0,0,0,0,0,1]))); // [0,0,0,0,0,0,0,0,0,0,0,0] or win section 0
