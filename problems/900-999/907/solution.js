/*
 * @lc app=leetcode id=907 lang=javascript
 *
 * [907] Sum of Subarray Minimums
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
  const MOD = 1e9 + 7;
  const n = arr.length;

  // Left: first index to the left with value < arr[i]
  const left = new Array(n);
  const stack = [];
  for (let i = 0; i < n; i++) {
    while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) stack.pop();
    left[i] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(i);
  }

  // Right: first index to the right with value <= arr[i]
  const right = new Array(n);
  stack.length = 0;
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && arr[stack[stack.length - 1]] > arr[i]) stack.pop();
    right[i] = stack.length ? stack[stack.length - 1] : n;
    stack.push(i);
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    result = (result + arr[i] * (i - left[i]) * (right[i] - i)) % MOD;
  }

  return result;
};
// @lc code=end

// TEST:
console.log(sumSubarrayMins([3,1,2,4])); // 17
console.log(sumSubarrayMins([11,81,94,43,3])); // 444
