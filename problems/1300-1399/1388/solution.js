/*
 * @lc app=leetcode id=1388 lang=javascript
 *
 * [1388] Pizza With 3n Slices
 */

// @lc code=start
/**
 * @param {number[]} slices
 * @return {number}
 */
var maxSizeSlices = function(slices) {
  const n = slices.length;
  const k = n / 3;

  const solve = (arr) => {
    const m = arr.length;
    let prev2 = new Array(k + 1).fill(0);
    let prev1 = new Array(k + 1).fill(0);

    for (let i = 1; i <= m; i++) {
      const curr = new Array(k + 1).fill(0);
      for (let j = 1; j <= k; j++) {
        curr[j] = Math.max(prev1[j], prev2[j - 1] + arr[i - 1]);
      }
      prev2 = prev1;
      prev1 = curr;
    }
    return prev1[k];
  };

  return Math.max(
    solve(slices.slice(1)),
    solve(slices.slice(0, -1))
  );
};
// @lc code=end

// TEST:
console.log(maxSizeSlices([1, 2, 3, 4, 5, 6]) === 10);
console.log(maxSizeSlices([8, 9, 8, 6, 1, 1]) === 16);
console.log(maxSizeSlices([1, 2, 3]) === 3);
console.log(maxSizeSlices([3, 1, 2]) === 3);
console.log(maxSizeSlices([9, 5, 1, 7, 3, 2, 6, 8, 4]) === 24);
