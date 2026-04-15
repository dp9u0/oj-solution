/*
 * @lc app=leetcode id=3784 lang=javascript
 *
 * [3784] Minimum Deletion Cost to Make All Characters Equal
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(s, cost) {
  let totalCost = 0;
  let charSum = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    const idx = s.charCodeAt(i) - 97;
    totalCost += cost[i];
    charSum[idx] += cost[i];
  }
  return totalCost - Math.max(...charSum);
};
// @lc code=end

// TEST:
console.log(minCost("aabaac", [1,2,3,4,1,10])); // 11
console.log(minCost("abc", [10,5,8])); // 13
console.log(minCost("zzzzz", [67,67,67,67,67])); // 0
