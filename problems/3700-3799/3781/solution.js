/*
 * @lc app=leetcode id=3781 lang=javascript
 *
 * [3781] Maximum Score After Binary Swaps
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {string} s
 * @return {number}
 */
var maximumScore = function(nums, s) {
  const heap = [];
  const push = (val) => {
    heap.push(val);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p] <= heap[i]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const min = heap[0];
    const last = heap.pop();
    if (heap.length === 0) return min;
    heap[0] = last;
    let i = 0;
    while (true) {
      let s = i, l = 2 * i + 1, r = 2 * i + 2;
      if (l < heap.length && heap[l] < heap[s]) s = l;
      if (r < heap.length && heap[r] < heap[s]) s = r;
      if (s === i) break;
      [heap[s], heap[i]] = [heap[i], heap[s]];
      i = s;
    }
    return min;
  };

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '1') {
      push(nums[i]);
    } else if (heap.length > 0 && nums[i] > heap[0]) {
      pop();
      push(nums[i]);
    }
  }

  let score = 0;
  for (const v of heap) score += v;
  return score;
};
// @lc code=end

// TEST:
console.log(maximumScore([2, 1, 5, 2, 3], '01010')); // 7
console.log(maximumScore([4, 7, 2, 9], '0000')); // 0
console.log(maximumScore([1, 3, 2], '101')); // 4
console.log(maximumScore([5], '1')); // 5
console.log(maximumScore([10, 20, 30], '111')); // 60
