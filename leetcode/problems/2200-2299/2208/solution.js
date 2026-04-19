/*
 * @lc app=leetcode id=2208 lang=javascript
 *
 * [2208] Minimum Operations to Halve Array Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var halveArray = function(nums) {
  let total = 0;
  const heap = new Float64Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    heap[i] = nums[i];
    total += nums[i];
  }

  const heapify = () => {
    for (let i = ((heap.length >> 1) - 1); i >= 0; i--) siftDown(i);
  };

  const siftDown = (i) => {
    const n = heap.length;
    while (true) {
      let max = i;
      const l = 2 * i + 1, r = 2 * i + 2;
      if (l < n && heap[l] > heap[max]) max = l;
      if (r < n && heap[r] > heap[max]) max = r;
      if (max === i) break;
      [heap[i], heap[max]] = [heap[max], heap[i]];
      i = max;
    }
  };

  heapify();
  let target = total / 2;
  let ops = 0;
  while (total > target) {
    heap[0] /= 2;
    total -= heap[0];
    siftDown(0);
    ops++;
  }
  return ops;
};
// @lc code=end

// TEST:
console.log(halveArray([5,19,8,1])); // 3
console.log(halveArray([3,8,20])); // 3
console.log(halveArray([1])); // 1
console.log(halveArray([1,1])); // 2
console.log(halveArray([6,6])); // 2
