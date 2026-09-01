/*
 * @lc app=leetcode.cn id=LCR 111 lang=javascript
 *
 * [LCR 111] 除法求值
 */

// @lc code=start
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
  // 构建带权图: graph[a] = { b: a/b 的值 }
  const graph = new Map();
  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i];
    const v = values[i];
    if (!graph.has(a)) graph.set(a, {});
    if (!graph.has(b)) graph.set(b, {});
    graph.get(a)[b] = v;
    graph.get(b)[a] = 1 / v;
  }

  const dfs = (start, end, visited) => {
    if (!graph.has(start) || !graph.has(end)) return -1;
    if (start === end) return 1;
    visited.add(start);
    const neighbors = graph.get(start);
    for (const next in neighbors) {
      if (visited.has(next)) continue;
      const product = dfs(next, end, visited);
      if (product !== -1) return neighbors[next] * product;
    }
    return -1;
  };

  const result = [];
  for (const [c, d] of queries) {
    result.push(dfs(c, d, new Set()));
  }
  return result;
};
// @lc code=end

// TEST:
const eq1 = [["a", "b"], ["b", "c"]];
const val1 = [2.0, 3.0];
const q1 = [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]];
console.log(calcEquation(eq1, val1, q1));
// 期望: [6.0, 0.5, -1.0, 1.0, -1.0]

const eq2 = [["a", "b"], ["b", "c"], ["bc", "cd"]];
const val2 = [1.5, 2.5, 5.0];
const q2 = [["a", "c"], ["c", "b"], ["bc", "cd"], ["cd", "bc"]];
console.log(calcEquation(eq2, val2, q2));
// 期望: [3.75, 0.4, 5.0, 0.2]

const eq3 = [["a", "b"]];
const val3 = [0.5];
const q3 = [["a", "b"], ["b", "a"], ["a", "c"], ["x", "y"]];
console.log(calcEquation(eq3, val3, q3));
// 期望: [0.5, 2.0, -1.0, -1.0]

// 附加测试: 单节点自除
console.log(calcEquation([["a", "b"]], [2.0], [["a", "a"]]));
// 期望: [1.0]

// 附加测试: 三角形路径 a/c 可通过 a->b->c
console.log(calcEquation([["a", "b"], ["b", "c"], ["a", "c"]], [2.0, 3.0, 6.0], [["a", "c"], ["c", "a"]]));
// 期望: [6.0, 1/6]

// 附加测试: 不可达但变量存在
console.log(calcEquation([["a", "b"], ["c", "d"]], [2.0, 4.0], [["a", "c"]]));
// 期望: [-1.0]
