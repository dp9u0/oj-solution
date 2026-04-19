/*
 * @lc app=leetcode id=825 lang=javascript
 *
 * [825] Friends Of Appropriate Ages
 */

// @lc code=start
/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {
  const cnt = new Array(121).fill(0);
  for (const a of ages) cnt[a]++;

  let total = 0;
  for (let a = 1; a <= 120; a++) {
    if (cnt[a] === 0) continue;
    for (let b = Math.floor(0.5 * a + 7) + 1; b <= a; b++) {
      if (cnt[b] === 0) continue;
      if (a === b) {
        total += cnt[a] * (cnt[a] - 1);
      } else {
        total += cnt[a] * cnt[b];
      }
    }
  }
  return total;
};
// @lc code=end

// TEST:
console.log(numFriendRequests([16,16])); // 2
console.log(numFriendRequests([16,17,18])); // 2
console.log(numFriendRequests([20,30,100,110,120])); // 3
console.log(numFriendRequests([1])); // 0
console.log(numFriendRequests([108,115,5,2,92,81,89,118,21,14,49,31,30,67,99,85,76,39,35,24])); // 59
