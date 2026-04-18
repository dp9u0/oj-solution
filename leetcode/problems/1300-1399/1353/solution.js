/*
 * @lc app=leetcode id=1353 lang=javascript
 *
 * [1353] Maximum Number of Events That Can Be Attended
 */

// @lc code=start
/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(events) {
  events.sort((a, b) => a[0] - b[0]);
  const heap = [];
  const heapPush = (val) => {
    heap.push(val);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p] <= heap[i]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const heapPop = () => {
    const top = heap[0];
    const last = heap.pop();
    if (heap.length > 0) {
      heap[0] = last;
      let i = 0;
      while (true) {
        let min = i;
        const l = 2 * i + 1, r = 2 * i + 2;
        if (l < heap.length && heap[l] < heap[min]) min = l;
        if (r < heap.length && heap[r] < heap[min]) min = r;
        if (min === i) break;
        [heap[min], heap[i]] = [heap[i], heap[min]];
        i = min;
      }
    }
    return top;
  };

  let count = 0, idx = 0;
  const maxDay = Math.max(...events.map(e => e[1]));
  for (let day = 1; day <= maxDay; day++) {
    while (idx < events.length && events[idx][0] <= day) {
      heapPush(events[idx][1]);
      idx++;
    }
    while (heap.length > 0 && heap[0] < day) heapPop();
    if (heap.length > 0) {
      heapPop();
      count++;
    }
  }
  return count;
};
// @lc code=end

// TEST:
console.log(maxEvents([[1, 2], [2, 3], [3, 4]])); // 3
console.log(maxEvents([[1, 2], [2, 3], [3, 4], [1, 2]])); // 4
console.log(maxEvents([[1, 4], [4, 4], [2, 2], [3, 4], [1, 1]])); // 4
console.log(maxEvents([[1, 1], [1, 2], [1, 3], [1, 4]])); // 4
console.log(maxEvents([[1, 2], [1, 2], [3, 3], [1, 5], [1, 5]])); // 5
