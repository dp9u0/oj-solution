/*
 * @lc app=leetcode id=502 lang=javascript
 *
 * [502] IPO
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
  const n = profits.length;
  const order = Array.from({ length: n }, (_, i) => i).sort((a, b) => capital[a] - capital[b]);
  const heap = [];
  const push = (v) => {
    heap.push(v);
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
    if (heap.length > 0) {
      heap[0] = last;
      let i = 0;
      while (true) {
        const l = 2 * i + 1;
        const r = 2 * i + 2;
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
  let ptr = 0;
  let cur = w;
  for (let step = 0; step < k; step++) {
    while (ptr < n && capital[order[ptr]] <= cur) {
      push(profits[order[ptr]]);
      ptr++;
    }
    if (heap.length === 0) break;
    cur += pop();
  }
  return cur;
};
// @lc code=end

// TEST:
console.log(findMaximizedCapital(2, 0, [1, 2, 3], [0, 1, 1]) === 4);
console.log(findMaximizedCapital(3, 0, [1, 2, 3], [0, 1, 2]) === 6);
console.log(findMaximizedCapital(1, 0, [1], [0]) === 1);
console.log(findMaximizedCapital(2, 5, [1], [0]) === 6);
console.log(findMaximizedCapital(1, 0, [1], [1]) === 0);
console.log(findMaximizedCapital(10, 2, [1, 2, 3], [3, 4, 5]) === 2);
