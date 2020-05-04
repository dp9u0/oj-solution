/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let graph = {};
  for (const edge of prerequisites) {
    const [s] = edge;
    graph[s] = graph[s] || [];
    graph[s].push(edge);
  }
  for (let c = 0; c < numCourses; c++) {
    let seen = new Set();
    if (detectCycle(c, seen, graph)) return false;
  }
  return true;
};

// 检测图中的环
const detectCycle = (current, seen, graph) => {
  seen.add(current);
  let edges = graph[current] || [];
  for (const [s, e] of edges) {
    if (seen.has(e)) return true;
    if (detectCycle(e, seen, graph)) return true;
  }
  seen.delete(current);
  return false;
}

// TEST:
console.log(canFinish(2, [[1, 0]]))
console.log(canFinish(2, [[1, 0], [0, 1]]))
console.log(canFinish(4, [[0, 1], [3, 1], [1, 3], [3, 2]]))
console.log(canFinish(3, [[0, 1], [0, 2], [1, 2]]))