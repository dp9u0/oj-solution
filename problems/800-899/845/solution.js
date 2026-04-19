/*
 * @lc app=leetcode id=845 lang=javascript
 *
 * [845] Longest Mountain in Array
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
  const n = arr.length;
  if (n < 3) return 0;

  const left = new Uint16Array(n);
  const right = new Uint16Array(n);

  for (let i = 1; i < n; i++) {
    left[i] = arr[i] > arr[i - 1] ? left[i - 1] + 1 : 0;
  }
  for (let i = n - 2; i >= 0; i--) {
    right[i] = arr[i] > arr[i + 1] ? right[i + 1] + 1 : 0;
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (left[i] > 0 && right[i] > 0) {
      ans = Math.max(ans, left[i] + right[i] + 1);
    }
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(longestMountain([2,1,4,7,3,2,5])); // 5
console.log(longestMountain([2,2,2])); // 0
console.log(longestMountain([1,2,3,4,5])); // 0
console.log(longestMountain([5,4,3,2,1])); // 0
console.log(longestMountain([1,2,1])); // 3
console.log(longestMountain([0,1,2,3,4,5,4,3,2,1,0])); // 11
