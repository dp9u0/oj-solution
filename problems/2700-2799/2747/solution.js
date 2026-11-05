/*
 * @lc app=leetcode.cn id=2747 lang=javascript
 *
 * [2747] 统计没有收到请求的服务器数目
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

  const m = queries.length;
  const idx = Array.from({ length: m }, (_, i) => i)
    .sort((a, b) => queries[a] - queries[b]);

  const cnt = new Array(n + 1).fill(0); // cnt[id] = 窗口内该服务器的日志条数
  let active = 0; // 窗口内收到过请求的不同服务器数
  const ans = new Array(m);

  let i = 0;
  let j = 0;
  const total = logs.length;

  for (const qi of idx) {
    const q = queries[qi];
    // 纳入 time <= q 的日志
    while (j < total && logs[j][1] <= q) {
      const id = logs[j][0];
      if (cnt[id]++ === 0) active++;
      j++;
    }
    // 移出 time < q - x 的日志（闭区间左端点 q - x 保留）
    const left = q - x;
    while (i < total && logs[i][1] < left) {
      const id = logs[i][0];
      if (--cnt[id] === 0) active--;
      i++;
    }
    ans[qi] = n - active;
  }

  return ans;
};
// @lc code=end

// TEST:
console.log(countServers(3, [[1, 3], [2, 6], [1, 5]], 5, [10, 11])); // [1, 2]
console.log(countServers(3, [[2, 4], [2, 1], [1, 2], [3, 1]], 2, [3, 4])); // [0, 1]
console.log(countServers(1, [[1, 1]], 1, [5])); // [1] 窗口 [4,5] 无日志
console.log(countServers(2, [[1, 1], [1, 2], [2, 3]], 2, [3])); // [0] 同一服务器多条日志只算一次
console.log(countServers(5, [[1, 10], [2, 10], [3, 10]], 5, [15, 16])); // [3, 5]
console.log(countServers(2, [[1, 5], [2, 6]], 3, [8, 9])); // [0, 1] 验证乱序查询回填
console.log(countServers(3, [[1, 5], [2, 5], [3, 5]], 1, [6, 7, 100])); // [0, 3, 3] 左端点闭区间含 time=5
console.log(countServers(4, [], 3, [10])); // [4] 无日志
