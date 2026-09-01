/*
 * @lc app=leetcode id=913 lang=javascript
 *
 * [913] Cat and Mouse
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number}
 */
var catMouseGame = function(graph) {
  const n = graph.length;
  // color[m][c][t]: 0 unknown, 1 mouse win, 2 cat win
  const color = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => new Int8Array(2))
  );
  const degree = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => new Int8Array(2))
  );
  for (let m = 0; m < n; m++) {
    for (let c = 0; c < n; c++) {
      degree[m][c][0] = graph[m].length; // mouse to move
      degree[m][c][1] = graph[c].length - (graph[c].includes(0) ? 1 : 0); // cat moves (exclude hole)
    }
  }
  const queue = [];
  for (let m = 0; m < n; m++) {
    for (let c = 0; c < n; c++) {
      for (let t = 0; t < 2; t++) {
        if (m === 0) {
          color[m][c][t] = 1;
          queue.push([m, c, t]);
        } else if (m === c) {
          color[m][c][t] = 2;
          queue.push([m, c, t]);
        }
      }
    }
  }
  const other = (r) => 3 - r;
  const prevStates = (m, c, t) => {
    // states that can move into (m, c, t): if t is the mover of previous state
    const res = [];
    if (t === 1) {
      // previous state: mouse to move (t=0), mouse moved to m from pm
      for (const pm of graph[m]) res.push([pm, c, 0]);
    } else {
      // previous: cat to move (t=1), cat moved to c from pc (pc != 0)
      for (const pc of graph[c]) {
        if (pc !== 0) res.push([m, pc, 1]);
      }
    }
    return res;
  };
  while (queue.length) {
    const [m, c, t] = queue.shift();
    const col = color[m][c][t];
    for (const [pm, pc, pt] of prevStates(m, c, t)) {
      if (color[pm][pc][pt] !== 0) continue;
      if (pt === 0) {
        // mouse to move: if child is mouse win -> mouse wins
        if (col === 1) {
          color[pm][pc][pt] = 1;
          queue.push([pm, pc, pt]);
        } else {
          degree[pm][pc][pt]--;
          if (degree[pm][pc][pt] === 0) {
            color[pm][pc][pt] = 2;
            queue.push([pm, pc, pt]);
          }
        }
      } else {
        if (col === 2) {
          color[pm][pc][pt] = 2;
          queue.push([pm, pc, pt]);
        } else {
          degree[pm][pc][pt]--;
          if (degree[pm][pc][pt] === 0) {
            color[pm][pc][pt] = 1;
            queue.push([pm, pc, pt]);
          }
        }
      }
    }
  }
  return color[1][2][0];
};
// @lc code=end

// TEST:
console.log(catMouseGame([[2, 5], [3], [0, 4, 5], [1, 4, 5], [2, 3], [0, 2, 3]]) === 0);
console.log(catMouseGame([[1, 3], [0], [3], [0, 2]]) === 1);
console.log(catMouseGame([[3, 4], [3, 4], [3, 4], [0, 1, 2], [0, 1, 2]]) === 2);
console.log(catMouseGame([[2, 3], [3, 4], [0, 4], [0, 1], [1, 2]]) === 1);
