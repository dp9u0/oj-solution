/*
 * @lc app=leetcode id=3377 lang=javascript
 *
 * [3377] Digit Operations to Make Two Integers Equal
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var minOperations = function(n, m) {
  // Sieve of Eratosthenes
  const MAX = 10000;
  const isPrime = new Uint8Array(MAX);
  isPrime.fill(1);
  isPrime[0] = isPrime[1] = 0;
  for (let i = 2; i * i < MAX; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < MAX; j += i) isPrime[j] = 0;
    }
  }

  if (isPrime[n] || isPrime[m]) return -1;
  if (n === m) return n;

  const digits = String(n).length;
  const lo = Math.pow(10, digits - 1);
  const hi = Math.pow(10, digits) - 1;

  // Dijkstra with binary min-heap
  const dist = new Int32Array(MAX).fill(-1);
  dist[n] = n;

  const heap = [[n, n]]; // [cost, value]

  function heapPush(item) {
    heap.push(item);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p][0] <= heap[i][0]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  }

  function heapPop() {
    const top = heap[0];
    const last = heap.pop();
    if (heap.length > 0) {
      heap[0] = last;
      let i = 0;
      while (true) {
        let min = i;
        const l = 2 * i + 1, r = 2 * i + 2;
        if (l < heap.length && heap[l][0] < heap[min][0]) min = l;
        if (r < heap.length && heap[r][0] < heap[min][0]) min = r;
        if (min === i) break;
        [heap[min], heap[i]] = [heap[i], heap[min]];
        i = min;
      }
    }
    return top;
  }

  while (heap.length > 0) {
    const [cost, val] = heapPop();
    if (cost > dist[val]) continue;
    if (val === m) return cost;

    const s = String(val);
    for (let i = 0; i < s.length; i++) {
      const d = s.charCodeAt(i) - 48;
      const pow = Math.pow(10, s.length - 1 - i);
      // Decrement digit
      if (d > 0) {
        const nv = val - pow;
        if (nv >= lo && !isPrime[nv]) {
          const nc = cost + nv;
          if (dist[nv] === -1 || nc < dist[nv]) {
            dist[nv] = nc;
            heapPush([nc, nv]);
          }
        }
      }
      // Increment digit
      if (d < 9) {
        const nv = val + pow;
        if (nv <= hi && !isPrime[nv]) {
          const nc = cost + nv;
          if (dist[nv] === -1 || nc < dist[nv]) {
            dist[nv] = nc;
            heapPush([nc, nv]);
          }
        }
      }
    }
  }

  return -1;
};
// @lc code=end

// TEST:
console.log(minOperations(10, 12)); // 85
console.log(minOperations(4, 8)); // -1
console.log(minOperations(6, 2)); // -1
console.log(minOperations(10, 10)); // 10
console.log(minOperations(100, 200)); // need to check
