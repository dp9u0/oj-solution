/*
 * @lc app=leetcode id=2391 lang=javascript
 *
 * [2391] Minimum Amount of Time to Collect Garbage
 */

// @lc code=start
/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
  let total = 0;
  let lastM = -1, lastP = -1, lastG = -1;

  for (let i = 0; i < garbage.length; i++) {
    total += garbage[i].length;
    for (const c of garbage[i]) {
      if (c === 'M') lastM = i;
      else if (c === 'P') lastP = i;
      else lastG = i;
    }
  }

  const prefixSum = [0];
  for (let i = 0; i < travel.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + travel[i];
  }

  if (lastM > 0) total += prefixSum[lastM];
  if (lastP > 0) total += prefixSum[lastP];
  if (lastG > 0) total += prefixSum[lastG];

  return total;
};
// @lc code=end

// TEST:
console.log(garbageCollection(["G","P","GP","GG"], [2,4,3])); // 21
console.log(garbageCollection(["MMM","PGM","GP"], [3,10])); // 37
console.log(garbageCollection(["G","M"], [1])); // 4
console.log(garbageCollection(["MP","GM","PGP"], [1,2])); // 13
console.log(garbageCollection(["GGGGG"], [])); // 5
