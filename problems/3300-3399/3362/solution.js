/*
 * @lc app=leetcode id=3362 lang=javascript
 *
 * [3362] Zero Array Transformation III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var maxRemoval = function(nums, queries) {
  const n = nums.length;
  queries.sort((a, b) => a[0] - b[0]);

  const diff = new Int32Array(n + 1);
  const heap = [];
  let qi = 0;
  let used = 0;
  let coverage = 0;

  const push = (val) => {
    heap.push(val);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p] >= heap[i]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };

  const pop = () => {
    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    let i = 0;
    while (true) {
      let largest = i;
      const l = 2 * i + 1, r = 2 * i + 2;
      if (l < heap.length && heap[l] > heap[largest]) largest = l;
      if (r < heap.length && heap[r] > heap[largest]) largest = r;
      if (largest === i) break;
      [heap[i], heap[largest]] = [heap[largest], heap[i]];
      i = largest;
    }
    return top;
  };

  for (let i = 0; i < n; i++) {
    coverage += diff[i];
    while (qi < queries.length && queries[qi][0] === i) {
      push(queries[qi][1]);
      qi++;
    }
    while (coverage < nums[i] && heap.length > 0 && heap[0] >= i) {
      const r = pop();
      coverage++;
      diff[r + 1]--;
      used++;
    }
    if (coverage < nums[i]) return -1;
  }

  return queries.length - used;
};
// @lc code=end

// TEST:
console.log(maxRemoval([2,0,2], [[0,2],[0,2],[1,1]])); // 1
console.log(maxRemoval([1,1,1,1], [[1,3],[0,2],[1,3],[1,2]])); // 2
console.log(maxRemoval([1,2,3,4], [[0,3]])); // -1
