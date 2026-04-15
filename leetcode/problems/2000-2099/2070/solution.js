/*
 * @lc app=leetcode id=2070 lang=javascript
 *
 * [2070] Most Beautiful Item for Each Query
 */

// @lc code=start
/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function(items, queries) {
  items.sort((a, b) => a[0] - b[0]);
  const maxBeauty = [items[0][1]];
  for (let i = 1; i < items.length; i++) {
    maxBeauty[i] = Math.max(maxBeauty[i - 1], items[i][1]);
  }
  const prices = items.map(item => item[0]);
  return queries.map(q => {
    let lo = 0, hi = prices.length - 1, idx = -1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (prices[mid] <= q) {
        idx = mid;
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
    return idx === -1 ? 0 : maxBeauty[idx];
  });
};
// @lc code=end

// TEST:
console.log(JSON.stringify(maximumBeauty([[1,2],[3,2],[2,4],[5,6],[3,5]], [1,2,3,4,5,6]))); // [2,4,5,5,6,6]
console.log(JSON.stringify(maximumBeauty([[1,2],[1,2],[1,3],[1,4]], [1]))); // [4]
console.log(JSON.stringify(maximumBeauty([[10,1000]], [5]))); // [0]
