/*
 * @lc app=leetcode id=3965 lang=javascript
 *
 * [3965] Finish Time of Tasks I
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} baseTime
 * @return {number}
 */
var finishTime = function (n, edges, baseTime) {
  // edges[i] = [u, v] 表示 u 是 v 的父节点，天然自顶向下
  const childCount = new Array(n).fill(0);
  const parent = new Array(n).fill(-1);
  for (const [u, v] of edges) {
    childCount[u]++;
    parent[v] = u;
  }

  const finish = new Array(n).fill(0);
  const earliest = new Array(n).fill(Infinity); // 子节点完成时间最小值
  const latest = new Array(n).fill(-Infinity); // 子节点完成时间最大值

  // 叶子节点（无子节点）完成时间即 baseTime，从叶向根拓扑处理
  const queue = [];
  for (let i = 0; i < n; i++) {
    if (childCount[i] === 0) {
      finish[i] = baseTime[i];
      queue.push(i);
    }
  }

  for (let qi = 0; qi < queue.length; qi++) {
    const node = queue[qi];
    const p = parent[node];
    if (p === -1) continue; // 根节点无父节点

    const t = finish[node];
    if (t < earliest[p]) earliest[p] = t;
    if (t > latest[p]) latest[p] = t;

    if (--childCount[p] === 0) {
      // latest + (latest - earliest) + baseTime[p]
      finish[p] = 2 * latest[p] - earliest[p] + baseTime[p];
      queue.push(p);
    }
  }

  return finish[0];
};
// @lc code=end

// TEST:
console.log(finishTime(3, [[0, 1], [1, 2]], [9, 5, 3])); // 17
console.log(finishTime(3, [[0, 1], [0, 2]], [4, 7, 6])); // 12
console.log(finishTime(4, [[0, 1], [0, 2], [2, 3]], [5, 8, 2, 1])); // 18
console.log(finishTime(1, [], [42])); // 42（单节点：根即叶子）
console.log(
  finishTime(
    5,
    [[0, 1], [0, 2], [1, 3], [1, 4]],
    [3, 2, 6, 4, 9]
  )
); // 任务3/4/2为叶子:4,9,6 → 任务1: latest=9,earliest=4,9+5+2=16 → 根: latest=16,earliest=6,16+10+3=29
console.log(finishTime(2, [[0, 1]], [100000, 100000])); // 叶子1:1e5 → 根: 1e5+0+1e5=200000
