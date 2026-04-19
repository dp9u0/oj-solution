/*
 * @lc app=leetcode id=2612 lang=javascript
 *
 * [2612] Minimum Reverse Operations
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} p
 * @param {number[]} banned
 * @param {number} k
 * @return {number[]}
 */
var minReverseOperations = function(n, p, banned, k) {
  const ans = new Int32Array(n).fill(-1);
  ans[p] = 0;

  const par = [new Int32Array(n + 4), new Int32Array(n + 4)];
  for (let t = 0; t < 2; t++)
    for (let i = 0; i < n + 4; i++) par[t][i] = i;

  const find = (t, x) => {
    let r = x;
    while (par[t][r] !== r) r = par[t][r];
    while (par[t][x] !== x) { const nx = par[t][x]; par[t][x] = r; x = nx; }
    return r;
  };

  const erase = (t, x) => { par[t][x] = find(t, x + 2); };

  const bannedSet = new Set(banned);
  for (const b of banned) erase(b & 1, b);
  erase(p & 1, p);

  const queue = [p];
  let head = 0;
  while (head < queue.length) {
    const pos = queue[head++];
    const lo = 2 * Math.max(0, pos - k + 1) + k - 1 - pos;
    const hi = 2 * Math.min(pos, n - k) + k - 1 - pos;
    if (lo > hi) continue;

    const t = ((k - 1 - pos) & 1) == 0 ? 0 : 1;
    let cur = find(t, lo);
    while (cur <= hi) {
      ans[cur] = ans[pos] + 1;
      queue.push(cur);
      erase(t, cur);
      cur = find(t, cur);
    }
  }

  return Array.from(ans);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(minReverseOperations(4, 0, [1,2], 4))); // [0,-1,-1,1]
console.log(JSON.stringify(minReverseOperations(5, 0, [2,4], 3))); // [0,-1,-1,-1,-1]
console.log(JSON.stringify(minReverseOperations(4, 2, [0,1,3], 1))); // [-1,-1,0,-1]
console.log(JSON.stringify(minReverseOperations(5, 0, [], 2))); // [0,1,2,3,4]? let's check
console.log(JSON.stringify(minReverseOperations(3, 1, [], 3))); // [-1,0,-1]
