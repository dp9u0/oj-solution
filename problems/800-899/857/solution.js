/*
 * @lc app=leetcode id=857 lang=javascript
 *
 * [857] Minimum Cost to Hire K Workers
 */

// @lc code=start
/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function (quality, wage, k) {
  const n = quality.length;
  const order = Array.from({ length: n }, (_, i) => i).sort(
    (a, b) => wage[a] / quality[a] - wage[b] / quality[b]
  );

  // 大根堆维护当前最小的 k 个 quality
  const heap = [];
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
    const last = heap.pop();
    if (heap.length) {
      heap[0] = last;
      let i = 0;
      while (true) {
        const l = i * 2 + 1;
        const r = l + 1;
        let m = i;
        if (l < heap.length && heap[l] > heap[m]) m = l;
        if (r < heap.length && heap[r] > heap[m]) m = r;
        if (m === i) break;
        [heap[m], heap[i]] = [heap[i], heap[m]];
        i = m;
      }
    }
    return top;
  };

  let sumq = 0;
  let ans = Infinity;
  for (const i of order) {
    push(quality[i]);
    sumq += quality[i];
    if (heap.length > k) {
      sumq -= pop();
    }
    if (heap.length === k) {
      ans = Math.min(ans, (wage[i] / quality[i]) * sumq);
    }
  }
  return ans;
};
// @lc code=end

// TEST:
const eq = (a, b) => Math.abs(a - b) < 1e-5;
console.log(eq(mincostToHireWorkers([10, 20, 5], [70, 50, 30], 2), 105.0)); // true
console.log(eq(mincostToHireWorkers([3, 1, 10, 10, 1], [4, 8, 2, 2, 7], 3), 30.66667)); // true
console.log(eq(mincostToHireWorkers([5], [10], 1), 10.0)); // true
console.log(eq(mincostToHireWorkers([10, 1], [10, 1], 1), 1.0)); // true
console.log(eq(mincostToHireWorkers([4, 5, 6], [8, 10, 12], 2), 18.0)); // true: 比率均为 2，选质量最小的 4+5
console.log(eq(mincostToHireWorkers([2, 2, 2], [5, 5, 5], 3), 15.0)); // true
