/*
 * @lc app=leetcode id=2151 lang=javascript
 *
 * [2151] Maximum Good People Based on Statements
 */

// @lc code=start
/**
 * @param {number[][]} statements
 * @return {number}
 */
var maximumGood = function(statements) {
  const n = statements.length;
  let result = 0;

  for (let mask = 1; mask < (1 << n); mask++) {
    let valid = true;
    for (let i = 0; i < n && valid; i++) {
      if (!(mask & (1 << i))) continue; // i is bad, skip
      for (let j = 0; j < n && valid; j++) {
        if (statements[i][j] === 2) continue;
        const isGood = (mask >> j) & 1;
        if (statements[i][j] !== isGood) valid = false;
      }
    }
    if (valid) result = Math.max(result, popcount(mask));
  }

  return result;
};

const popcount = (x) => {
  let c = 0;
  while (x) { c++; x &= x - 1; }
  return c;
};
// @lc code=end

// TEST:
console.log(maximumGood([[2,1,2],[1,2,2],[2,0,2]]) === 2);
console.log(maximumGood([[2,0],[0,2]]) === 1);
console.log(maximumGood([[2,2,2],[2,2,2],[2,2,2]]) === 3);
console.log(maximumGood([[2,0,2],[0,2,2],[2,2,2]]) === 2);
console.log(maximumGood([[2,1],[1,2]]) === 2);
console.log(maximumGood([[2,0,2,2],[0,2,2,2],[2,2,2,1],[2,2,0,2]]) === 2);
