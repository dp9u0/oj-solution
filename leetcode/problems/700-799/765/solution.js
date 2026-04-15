/*
 * @lc app=leetcode id=765 lang=javascript
 *
 * [765] Couples Holding Hands
 */

// @lc code=start
/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function(row) {
  const n = row.length;
  const pos = new Array(n);
  for (let i = 0; i < n; i++) pos[row[i]] = i;

  const partner = (x) => x % 2 === 0 ? x + 1 : x - 1;

  let swaps = 0;
  for (let i = 0; i < n; i += 2) {
    let p = partner(row[i]);
    if (row[i + 1] !== p) {
      let j = pos[p];
      // Swap row[i+1] and row[j]
      pos[row[i + 1]] = j;
      pos[p] = i + 1;
      [row[i + 1], row[j]] = [row[j], row[i + 1]];
      swaps++;
    }
  }
  return swaps;
};
// @lc code=end

// TEST:
console.log(minSwapsCouples([0,2,1,3])); // 1
console.log(minSwapsCouples([3,2,0,1])); // 0
console.log(minSwapsCouples([0,3,2,1])); // 1
