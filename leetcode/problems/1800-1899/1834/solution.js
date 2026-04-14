/*
 * @lc app=leetcode id=1834 lang=javascript
 *
 * [1834] Single-Threaded CPU
 */

// @lc code=start
/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function(tasks) {
  const n = tasks.length;
  const indexed = tasks.map((t, i) => ({ e: t[0], p: t[1], i }));
  indexed.sort((a, b) => a.e - b.e);

  // Min-heap: [processingTime, index]
  const heap = [];
  const push = (item) => {
    heap.push(item);
    let c = heap.length - 1;
    while (c > 0) {
      const p = (c - 1) >> 1;
      if (heap[p][0] < heap[c][0] || (heap[p][0] === heap[c][0] && heap[p][1] < heap[c][1])) break;
      [heap[p], heap[c]] = [heap[c], heap[p]];
      c = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    const last = heap.pop();
    if (heap.length) {
      heap[0] = last;
      let c = 0;
      while (true) {
        let s = c;
        const l = 2 * c + 1, r = 2 * c + 2;
        if (l < heap.length && (heap[l][0] < heap[s][0] || (heap[l][0] === heap[s][0] && heap[l][1] < heap[s][1]))) s = l;
        if (r < heap.length && (heap[r][0] < heap[s][0] || (heap[r][0] === heap[s][0] && heap[r][1] < heap[s][1]))) s = r;
        if (s === c) break;
        [heap[s], heap[c]] = [heap[c], heap[s]];
        c = s;
      }
    }
    return top;
  };

  const result = [];
  let time = 0, idx = 0;
  while (result.length < n) {
    while (idx < n && indexed[idx].e <= time) {
      push([indexed[idx].p, indexed[idx].i]);
      idx++;
    }
    if (heap.length) {
      const [p, i] = pop();
      result.push(i);
      time += p;
    } else if (idx < n) {
      time = indexed[idx].e;
    }
  }
  return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(getOrder([[1,2],[2,4],[3,2],[4,1]]))); // [0,2,3,1]
console.log(JSON.stringify(getOrder([[7,10],[7,12],[7,5],[7,4],[7,2]]))); // [4,3,2,0,1]
