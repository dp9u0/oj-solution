/*
 * @lc app=leetcode id=1090 lang=javascript
 *
 * [1090] Largest Values From Labels
 */

// @lc code=start
/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} numWanted
 * @param {number} useLimit
 * @return {number}
 */
var largestValsFromLabels = function(values, labels, numWanted, useLimit) {
  const n = values.length;
  const items = Array.from({ length: n }, (_, i) => i);
  items.sort((a, b) => values[b] - values[a]);

  const labelCount = new Map();
  let sum = 0, picked = 0;

  for (const i of items) {
    if (picked >= numWanted) break;
    const label = labels[i];
    const cnt = labelCount.get(label) || 0;
    if (cnt >= useLimit) continue;
    labelCount.set(label, cnt + 1);
    sum += values[i];
    picked++;
  }

  return sum;
};
// @lc code=end

// TEST:
console.log(largestValsFromLabels([5,4,3,2,1], [1,1,2,2,3], 3, 1)); // 9
console.log(largestValsFromLabels([5,4,3,2,1], [1,3,3,3,2], 3, 2)); // 12
console.log(largestValsFromLabels([9,8,8,7,6], [0,0,0,1,1], 3, 1)); // 16
console.log(largestValsFromLabels([1], [0], 1, 1)); // 1
console.log(largestValsFromLabels([1,2,3], [1,1,1], 2, 1)); // 3
