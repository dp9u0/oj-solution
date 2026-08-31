/*
 * @lc app=leetcode id=3943 lang=javascript
 *
 * [3943] Number of Pairs After Increment
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[][]} queries
 * @return {number[]}
 */
var numberOfPairs = function(nums1, nums2, queries) {
  const n = nums2.length;
  const B = 350; // block width
  const m = Math.ceil(n / B);

  // Sqrt decomposition over positions of nums2. Each block keeps vals (base
  // value per position, lazy excluded) plus a count map keyed by base value.
  // A position's true value is vals[k] + lazy[b]: whole-block updates only
  // bump lazy[b], while partial updates rewrite the touched positions and
  // keep cnt[b] in sync. A type-2 query is then a direct hash lookup per
  // block instead of a binary search.
  const vals = new Float64Array(n);
  const lazy = new Float64Array(m);
  const cnt = new Array(m);
  for (let k = 0; k < n; k++) vals[k] = nums2[k];
  for (let b = 0; b < m; b++) {
    const map = new Map();
    const s = b * B, e = Math.min(s + B, n);
    for (let k = s; k < e; k++) map.set(vals[k], (map.get(vals[k]) || 0) + 1);
    cnt[b] = map;
  }

  // frequency of each distinct value in nums1 (at most 5)
  const freq1 = new Map();
  for (const a of nums1) freq1.set(a, (freq1.get(a) || 0) + 1);

  const bump = (b, k, val) => {
    const map = cnt[b], old = vals[k], c = map.get(old);
    if (c > 1) map.set(old, c - 1); else map.delete(old);
    const nv = old + val;
    vals[k] = nv;
    map.set(nv, (map.get(nv) || 0) + 1);
  };

  const update = (x, y, val) => {
    const b1 = (x / B) | 0, b2 = (y / B) | 0;
    if (b1 === b2) {
      for (let k = x; k <= y; k++) bump(b1, k, val);
      return;
    }
    if (x === b1 * B) lazy[b1] += val;
    else {
      const e1 = b1 * B + B;
      for (let k = x; k < e1; k++) bump(b1, k, val);
    }
    const s2 = b2 * B;
    if (y === s2 + B - 1) lazy[b2] += val;
    else {
      for (let k = s2; k <= y; k++) bump(b2, k, val);
    }
    for (let b = b1 + 1; b < b2; b++) lazy[b] += val;
  };

  const query = (tot) => {
    let ans = 0;
    for (const [a, f] of freq1) {
      const t = tot - a;
      if (t < 1) continue;
      for (let b = 0; b < m; b++) {
        const c = cnt[b].get(t - lazy[b]);
        if (c) ans += f * c;
      }
    }
    return ans;
  };

  const answer = [];
  for (const q of queries) {
    if (q[0] === 1) update(q[1], q[2], q[3]);
    else answer.push(query(q[1]));
  }
  return answer;
};
// @lc code=end

/**
// TEST:
console.log(JSON.stringify(numberOfPairs([1, 2], [3, 4], [[2, 5], [1, 0, 0, 2], [2, 5]])) === JSON.stringify([2, 1]));
console.log(JSON.stringify(numberOfPairs([1, 1], [2, 2, 3], [[2, 4], [1, 0, 1, 1], [2, 4]])) === JSON.stringify([2, 6]));
console.log(JSON.stringify(numberOfPairs([2, 5, 8, 4], [1, 3, 8], [[2, 9], [1, 1, 2, 1], [2, 10]])) === JSON.stringify([1, 0]));
console.log(JSON.stringify(numberOfPairs([1], [1], [[2, 2], [1, 0, 0, 5], [2, 6], [2, 7]])) === JSON.stringify([1, 0, 1]));
console.log(JSON.stringify(numberOfPairs([100000], [1, 100000], [[2, 200000], [1, 0, 1, 1], [2, 100002]])) === JSON.stringify([1, 1]));
console.log(JSON.stringify(numberOfPairs([3, 3, 3], [3, 3, 3, 3], [[2, 6], [1, 1, 2, 2], [2, 6], [2, 8]])) === JSON.stringify([12, 6, 6]));
console.log(JSON.stringify(numberOfPairs([1, 2, 3], [5], [[1, 0, 0, 3], [2, 5], [1, 0, 0, 1], [2, 9]])) === JSON.stringify([0, 0]));

*/
