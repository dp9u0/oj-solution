/*
 * @lc app=leetcode id=3594 lang=javascript
 *
 * [3594] Minimum Time to Transport All Individuals
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @param {number} m
 * @param {number[]} time
 * @param {number[]} mul
 * @return {number}
 */
var minTime = function(n, k, m, time, mul) {
  const fullMask = (1 << n) - 1;
  // dist[mask][stage][boatAtFar] = min time
  const dist = Array.from({ length: 1 << n }, () =>
    Array.from({ length: m }, () => new Float64Array(2).fill(Infinity))
  );
  // Min-heap
  const heap = [];
  const heapPush = (d, mask, stage, boat) => {
    if (d < dist[mask][stage][boat]) {
      dist[mask][stage][boat] = d;
      heap.push([d, mask, stage, boat]);
      let i = heap.length - 1;
      while (i > 0) {
        const parent = (i - 1) >> 1;
        if (heap[parent][0] > heap[i][0]) {
          [heap[parent], heap[i]] = [heap[i], heap[parent]];
          i = parent;
        } else break;
      }
    }
  };

  const heapPop = () => {
    const top = heap[0];
    const last = heap.pop();
    if (heap.length > 0) {
      heap[0] = last;
      let i = 0;
      while (true) {
        let smallest = i;
        const l = 2 * i + 1, r = 2 * i + 2;
        if (l < heap.length && heap[l][0] < heap[smallest][0]) smallest = l;
        if (r < heap.length && heap[r][0] < heap[smallest][0]) smallest = r;
        if (smallest !== i) {
          [heap[smallest], heap[i]] = [heap[i], heap[smallest]];
          i = smallest;
        } else break;
      }
    }
    return top;
  };

  heap.push([0, 0, 0, 0]);
  dist[0][0][0] = 0;

  // Precompute combinations for available people
  const generateCombos = (available, minSize, maxSize) => {
    const result = [];
    const backtrack = (start, current) => {
      if (current.length >= minSize) result.push([...current]);
      if (current.length >= maxSize) return;
      for (let i = start; i < available.length; i++) {
        current.push(available[i]);
        backtrack(i + 1, current);
        current.pop();
      }
    };
    backtrack(0, []);
    return result;
  };

  while (heap.length > 0) {
    const [d, mask, stage, boatAtFar] = heapPop();
    if (d > dist[mask][stage][boatAtFar]) continue;
    if (mask === fullMask) return d;

    if (boatAtFar === 0) {
      // Boat at base: send 1..k people across
      const available = [];
      for (let i = 0; i < n; i++) {
        if (!(mask & (1 << i))) available.push(i);
      }
      const combos = generateCombos(available, 1, k);
      for (const group of combos) {
        let newMask = mask;
        let maxTime = 0;
        for (const i of group) {
          newMask |= (1 << i);
          maxTime = Math.max(maxTime, time[i]);
        }
        const crossTime = maxTime * mul[stage];
        const newStage = (stage + Math.floor(crossTime)) % m;
        heapPush(d + crossTime, newMask, newStage, 1);
      }
    } else {
      // Boat at far: send 1 person back
      for (let i = 0; i < n; i++) {
        if (mask & (1 << i)) {
          const returnTime = time[i] * mul[stage];
          const newStage = (stage + Math.floor(returnTime)) % m;
          heapPush(d + returnTime, mask ^ (1 << i), newStage, 0);
        }
      }
    }
  }

  return -1;
};
// @lc code=end

// TEST:
console.log(minTime(1, 1, 2, [5], [1.0, 1.3])); // 5
console.log(minTime(3, 2, 3, [2, 5, 8], [1.0, 1.5, 0.75])); // 14.5
console.log(minTime(2, 1, 2, [10, 10], [2.0, 2.0])); // -1
