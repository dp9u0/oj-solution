/*
 * @lc app=leetcode id=3493 lang=javascript
 *
 * [3493] Properties Graph
 */

// @lc code=start
/**
 * @param {number[][]} properties
 * @param {number} k
 * @return {number}
 */
var numberOfComponents = function(properties, k) {
  const n = properties.length;
  const sets = properties.map(p => new Set(p));
  const parent = Array.from({ length: n }, (_, i) => i);
  const find = (x) => parent[x] === x ? x : (parent[x] = find(parent[x]));
  const union = (a, b) => { parent[find(a)] = find(b); };

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let cnt = 0;
      for (const v of sets[i]) {
        if (sets[j].has(v)) cnt++;
      }
      if (cnt >= k) union(i, j);
    }
  }
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (find(i) === i) ans++;
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(numberOfComponents([[1,2],[1,1],[3,4],[4,5],[5,6],[7,7]], 1)); // 3
console.log(numberOfComponents([[1,2,3],[2,3,4],[4,3,5]], 2)); // 1
console.log(numberOfComponents([[1,1],[1,1]], 2)); // 2
console.log(numberOfComponents([[1,2,3]], 1)); // 1
console.log(numberOfComponents([[1,2],[2,3],[3,4]], 1)); // 1
