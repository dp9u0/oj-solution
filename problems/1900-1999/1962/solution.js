/*
 * @lc app=leetcode id=1962 lang=javascript
 *
 * [1962] Remove Stones to Minimize the Total
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function(piles, k) {
  const heap = [...piles];
  const heapify = (i, size) => {
    let largest = i;
    const left = 2 * i + 1, right = 2 * i + 2;
    if (left < size && heap[left] > heap[largest]) largest = left;
    if (right < size && heap[right] > heap[largest]) largest = right;
    if (largest !== i) {
      [heap[i], heap[largest]] = [heap[largest], heap[i]];
      heapify(largest, size);
    }
  };
  const n = heap.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(i, n);

  for (let i = 0; i < k; i++) {
    heap[0] -= Math.floor(heap[0] / 2);
    heapify(0, n);
  }

  return heap.reduce((sum, v) => sum + v, 0);
};
// @lc code=end

// TEST:
console.log(minStoneSum([5, 4, 9], 2)); // 12
console.log(minStoneSum([4, 3, 6, 7], 3)); // 12
console.log(minStoneSum([1], 1)); // 1
