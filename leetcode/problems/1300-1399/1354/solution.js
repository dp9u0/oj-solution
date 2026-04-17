/*
 * @lc app=leetcode id=1354 lang=javascript
 *
 * [1354] Construct Target Array With Multiple Sums
 */

// @lc code=start
/**
 * @param {number[]} target
 * @return {boolean}
 */
var isPossible = function(target) {
  const n = target.length;
  if (n === 1) return target[0] === 1;

  let sum = 0;
  for (let i = 0; i < n; i++) sum += target[i];

  const heap = [...target];
  const siftDown = (i) => {
    while (true) {
      let largest = i;
      const l = 2 * i + 1, r = 2 * i + 2;
      if (l < n && heap[l] > heap[largest]) largest = l;
      if (r < n && heap[r] > heap[largest]) largest = r;
      if (largest === i) break;
      [heap[i], heap[largest]] = [heap[largest], heap[i]];
      i = largest;
    }
  };

  for (let i = (n >> 1) - 1; i >= 0; i--) siftDown(i);

  while (heap[0] > 1) {
    const M = heap[0];
    const R = sum - M;
    if (R < 1) return false;
    if (R === 1) return true;
    if (M <= R) return false;

    const newVal = M % R;
    if (newVal === 0) return false;

    sum = sum - M + newVal;
    heap[0] = newVal;
    siftDown(0);
  }

  return true;
};
// @lc code=end

// TEST:
console.log(isPossible([9,3,5])); // true
console.log(isPossible([1,1,1,2])); // false
console.log(isPossible([8,5])); // true
console.log(isPossible([1])); // true
console.log(isPossible([2])); // false
console.log(isPossible([1,1,1])); // true
console.log(isPossible([2,2])); // false
console.log(isPossible([1,1000000000])); // true
console.log(isPossible([5,2,1])); // false
