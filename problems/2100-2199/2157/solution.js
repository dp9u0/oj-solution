/*
 * @lc app=leetcode id=2157 lang=javascript
 *
 * [2157] Groups of Strings
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number[]}
 */
var groupStrings = function(words) {
  const n = words.length;
  const masks = words.map(w => {
    let m = 0;
    for (let i = 0; i < w.length; i++) m |= 1 << (w.charCodeAt(i) - 97);
    return m;
  });

  // DSU
  const parent = Array.from({ length: n }, (_, i) => i);
  const rnk = new Int32Array(n);

  function find(x) {
    while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; }
    return x;
  }

  function union(a, b) {
    a = find(a); b = find(b);
    if (a === b) return;
    if (rnk[a] < rnk[b]) { const t = a; a = b; b = t; }
    parent[b] = a;
    if (rnk[a] === rnk[b]) rnk[a]++;
  }

  // Map mask → first index; union duplicates
  const maskToIdx = new Map();
  for (let i = 0; i < n; i++) {
    const m = masks[i];
    if (maskToIdx.has(m)) {
      union(i, maskToIdx.get(m));
    } else {
      maskToIdx.set(m, i);
    }
  }

  // For each unique mask, find connected neighbors
  for (const [mask, idx] of maskToIdx) {
    // Deletion: remove each set bit
    for (let c = 0; c < 26; c++) {
      if (mask & (1 << c)) {
        const nb = mask ^ (1 << c);
        if (maskToIdx.has(nb)) union(idx, maskToIdx.get(nb));
      }
    }
    // Replacement: remove one set bit, add one unset bit
    for (let c1 = 0; c1 < 26; c1++) {
      if (!(mask & (1 << c1))) continue;
      for (let c2 = 0; c2 < 26; c2++) {
        if (mask & (1 << c2)) continue;
        const nb = mask ^ (1 << c1) ^ (1 << c2);
        if (maskToIdx.has(nb)) union(idx, maskToIdx.get(nb));
      }
    }
  }

  // Count groups and max size
  const groupSize = new Map();
  for (let i = 0; i < n; i++) {
    const root = find(i);
    groupSize.set(root, (groupSize.get(root) || 0) + 1);
  }

  let maxGroup = 0;
  for (const size of groupSize.values()) {
    if (size > maxGroup) maxGroup = size;
  }

  return [groupSize.size, maxGroup];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(groupStrings(['a','b','ab','cde']))); // [2,3]
console.log(JSON.stringify(groupStrings(['a','ab','abc']))); // [1,3]
console.log(JSON.stringify(groupStrings(['a','a']))); // [1,2]
console.log(JSON.stringify(groupStrings(['x']))); // [1,1]
console.log(JSON.stringify(groupStrings(['ab','cd','ef']))); // [3,1]
