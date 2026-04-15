/*
 * @lc app=leetcode id=1338 lang=javascript
 *
 * [1338] Reduce Array Size to The Half
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
  const freq = {};
  for (const x of arr) freq[x] = (freq[x] || 0) + 1;
  const counts = Object.values(freq).sort((a, b) => b - a);
  const half = arr.length >> 1;
  let removed = 0;
  for (let i = 0; i < counts.length; i++) {
    removed += counts[i];
    if (removed >= half) return i + 1;
  }
  return counts.length;
};
// @lc code=end

// TEST:
console.log(minSetSize([3,3,3,3,5,5,5,2,2,7])); // 2
console.log(minSetSize([7,7,7,7,7,7])); // 1
console.log(minSetSize([1,2,3,4])); // 2
