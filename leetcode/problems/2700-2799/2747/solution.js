/*
 * @lc app=leetcode id=2747 lang=javascript
 *
 * [2747] Count Zero Request Servers
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} logs
 * @param {number} x
 * @param {number[]} queries
 * @return {number[]}
 */
var countServers = function(n, logs, x, queries) {
  logs.sort((a, b) => a[1] - b[1]);
  const iq = queries.map((q, i) => [q, i]).sort((a, b) => a[0] - b[0]);
  const count = new Map();
  let active = 0;
  const addServer = (id) => {
    const c = count.get(id) || 0;
    if (c === 0) active++;
    count.set(id, c + 1);
  };
  const removeServer = (id) => {
    const c = count.get(id);
    if (c === 1) { count.delete(id); active--; }
    else count.set(id, c - 1);
  };
  const result = new Array(queries.length);
  let l = 0, r = 0;
  for (const [q, idx] of iq) {
    const lo = q - x, hi = q;
    while (r < logs.length && logs[r][1] <= hi) { addServer(logs[r][0]); r++; }
    while (l < logs.length && logs[l][1] < lo) { removeServer(logs[l][0]); l++; }
    result[idx] = n - active;
  }
  return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(countServers(3, [[1, 3], [2, 6], [1, 5]], 5, [10, 11]))); // [1,2]
console.log(JSON.stringify(countServers(3, [[2, 4], [2, 1], [1, 2], [3, 1]], 2, [3, 4]))); // [0,1]
console.log(JSON.stringify(countServers(1, [[1, 1]], 1, [1]))); // [0]
console.log(JSON.stringify(countServers(2, [[1, 1]], 1, [2]))); // [1]
console.log(JSON.stringify(countServers(3, [[1, 3], [2, 6], [1, 5]], 1, [10]))); // [3]
