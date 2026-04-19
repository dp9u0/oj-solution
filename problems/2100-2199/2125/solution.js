/*
 * @lc app=leetcode id=2125 lang=javascript
 *
 * [2125] Number of Laser Beams in a Bank
 */

// @lc code=start
/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
  const counts = [];
  for (const row of bank) {
    let cnt = 0;
    for (const ch of row) {
      if (ch === '1') cnt++;
    }
    if (cnt > 0) counts.push(cnt);
  }

  let result = 0;
  for (let i = 1; i < counts.length; i++) {
    result += counts[i - 1] * counts[i];
  }
  return result;
};
// @lc code=end

// TEST:
console.log(numberOfBeams(["011001","000000","010100","001000"])); // 8
console.log(numberOfBeams(["000","111","000"])); // 0
console.log(numberOfBeams(["1","1"])); // 1
