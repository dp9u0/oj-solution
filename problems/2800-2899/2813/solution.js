/*
 * @lc app=leetcode id=2813 lang=javascript
 *
 * [2813] Maximum Elegance of a K-Length Subsequence
 */

// @lc code=start
/**
 * @param {number[][]} items
 * @param {number} k
 * @return {number}
 */
var findMaximumElegance = function(items, k) {
  items.sort((a, b) => b[0] - a[0]);

  const usedCat = new Set();
  let totalProfit = 0;
  const dupHeap = []; // min-heap of profits for duplicate categories

  for (let i = 0; i < k; i++) {
    const [p, c] = items[i];
    totalProfit += p;
    if (usedCat.has(c)) {
      dupHeap.push(p);
      let idx = dupHeap.length - 1;
      while (idx > 0) {
        const par = (idx - 1) >> 1;
        if (dupHeap[par] <= dupHeap[idx]) break;
        [dupHeap[par], dupHeap[idx]] = [dupHeap[idx], dupHeap[par]];
        idx = par;
      }
    } else {
      usedCat.add(c);
    }
  }

  let ans = totalProfit + usedCat.size * usedCat.size;

  for (let i = k; i < items.length && dupHeap.length; i++) {
    const [p, c] = items[i];
    if (usedCat.has(c)) continue;
    const minDup = dupHeap[0];
    dupHeap[0] = dupHeap[dupHeap.length - 1];
    dupHeap.pop();
    if (dupHeap.length) {
      let idx = 0;
      while (true) {
        let s = idx, l = 2*idx+1, r = 2*idx+2;
        if (l < dupHeap.length && dupHeap[l] < dupHeap[s]) s = l;
        if (r < dupHeap.length && dupHeap[r] < dupHeap[s]) s = r;
        if (s === idx) break;
        [dupHeap[s], dupHeap[idx]] = [dupHeap[idx], dupHeap[s]];
        idx = s;
      }
    }
    totalProfit += p - minDup;
    usedCat.add(c);
    ans = Math.max(ans, totalProfit + usedCat.size * usedCat.size);
  }

  return ans;
};
// @lc code=end

// TEST:
console.log(findMaximumElegance([[3,2],[5,1],[10,1]], 2)); // 17
console.log(findMaximumElegance([[3,1],[3,1],[2,2],[5,3]], 3)); // 19
console.log(findMaximumElegance([[1,1],[2,1],[3,1]], 3)); // 7
console.log(findMaximumElegance([[10,1],[10,2],[10,3]], 2)); // 24
console.log(findMaximumElegance([[5,1],[4,2],[3,3],[2,4],[1,5]], 3)); // 21
