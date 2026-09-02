/*
 * @lc app=leetcode.cn id=LCR 113 lang=javascript
 *
 * [LCR 113] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const adj = Array.from({ length: numCourses }, () => []);
  const indeg = new Array(numCourses).fill(0);
  for (const [a, b] of prerequisites) {
    adj[b].push(a);   // b is a prereq of a
    indeg[a]++;
  }
  const queue = [];
  for (let i = 0; i < numCourses; i++) if (indeg[i] === 0) queue.push(i);

  const order = [];
  let head = 0;
  while (head < queue.length) {
    const c = queue[head++];
    order.push(c);
    for (const nxt of adj[c]) {
      if (--indeg[nxt] === 0) queue.push(nxt);
    }
  }
  return order.length === numCourses ? order : [];
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.deepStrictEqual(findOrder(2, [[1, 0]]), [0, 1]);
assert.strictEqual(findOrder(1, []).length, 1);
// both valid orders accepted by checking prereqs are met
const isValid = (order, numCourses, prereqs) => {
  const pos = new Map();
  order.forEach((c, i) => pos.set(c, i));
  if (order.length !== numCourses) return false;
  for (const [a, b] of prereqs) if (pos.get(b) > pos.get(a)) return false;
  return true;
};
assert.ok(isValid(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]), 4, [[1, 0], [2, 0], [3, 1], [3, 2]]));
// cycle -> empty
assert.deepStrictEqual(findOrder(2, [[0, 1], [1, 0]]), []);
// no prereqs -> some permutation of all
assert.strictEqual(findOrder(3, []).length, 3);
// chain
assert.ok(isValid(findOrder(3, [[1, 0], [2, 1]]), 3, [[1, 0], [2, 1]]));
// diamond: 0 -> {1,2} -> 3
assert.ok(isValid(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]), 4, [[1, 0], [2, 0], [3, 1], [3, 2]]));

console.log('All tests passed!');
console.log('findOrder(2, [[1,0]]) =', JSON.stringify(findOrder(2, [[1, 0]])));
