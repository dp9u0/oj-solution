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
  const heap = [...nums];
  const size = heap.length;
  let sum = 0;
  for (const v of nums) sum += v;
  const target = sum / 2;

  const siftDown = (i) => {
    while (true) {
      let largest = i;
      const l = 2 * i + 1;
      const r = 2 * i + 2;
      if (l < size && heap[l] > heap[largest]) largest = l;
      if (r < size && heap[r] > heap[largest]) largest = r;
      if (largest === i) break;
      [heap[i], heap[largest]] = [heap[largest], heap[i]];
      i = largest;
    }
  };
  for (let i = (size >> 1) - 1; i >= 0; i--) siftDown(i);

  let reduced = 0;
  let ops = 0;
  while (reduced < target) {
    const half = heap[0] / 2;
    reduced += half;
    ops++;
    heap[0] = half;
    siftDown(0);
  }
  return ops;
};
// @lc code=end

// TEST:
console.log(halveArray([5, 19, 8, 1]) === 3);
console.log(halveArray([3, 8, 20]) === 3);
console.log(halveArray([1]) === 1);
console.log(halveArray([10000000]) === 1);
console.log(halveArray([2, 2, 2, 2]) === 4);
console.log(halveArray([1, 1, 1]) === 3);
console.log(halveArray([6, 6]) === 2);
console.log(halveArray([4, 3, 2, 1]) === 4);
