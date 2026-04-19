/*
 * @lc app=leetcode id=2233 lang=javascript
 *
 * [2233] Maximum Product After K Increments
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumProduct = function(nums, k) {
  const MOD = 1e9 + 7;
  const n = nums.length;

  const heapify = (arr) => {
    for (let i = ((arr.length >> 1) - 1); i >= 0; i--) siftDown(arr, i);
  };

  const siftDown = (arr, i) => {
    const n = arr.length;
    while (true) {
      let min = i;
      const l = 2 * i + 1, r = 2 * i + 2;
      if (l < n && arr[l] < arr[min]) min = l;
      if (r < n && arr[r] < arr[min]) min = r;
      if (min === i) break;
      [arr[i], arr[min]] = [arr[min], arr[i]];
      i = min;
    }
  };

  heapify(nums);
  while (k-- > 0) {
    nums[0]++;
    siftDown(nums, 0);
  }

  let result = 1;
  for (const x of nums) result = (result * x) % MOD;
  return result;
};
// @lc code=end

// TEST:
console.log(maximumProduct([0,4], 5)); // 20
console.log(maximumProduct([6,3,3,2], 2)); // 216
console.log(maximumProduct([1], 1)); // 2
console.log(maximumProduct([0,0], 2)); // 1
console.log(maximumProduct([1000000,1000000], 100000)); // some large number mod 1e9+7
