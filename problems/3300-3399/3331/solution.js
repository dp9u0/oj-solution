/*
 * @lc app=leetcode id=3331 lang=javascript
 *
 * [3331] Find Subtree Sizes After Changes
 */

// @lc code=start
/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number[]}
 */
var findSubtreeSizes = function(parent, s) {
  const n = parent.length;
  const children = Array.from({ length: n }, () => []);
  for (let i = 1; i < n; i++) {
    children[parent[i]].push(i);
  }

  const newParent = [...parent];
  const lastSeen = new Array(26).fill(-1);

  // Iterative DFS: [node, childIndex, prevLastSeen]
  const ch0 = s.charCodeAt(0) - 97;
  const prev0 = lastSeen[ch0];
  lastSeen[ch0] = 0;
  const stk = [{ node: 0, ci: 0, prev: prev0 }];

  while (stk.length > 0) {
    const top = stk[stk.length - 1];
    if (top.ci < children[top.node].length) {
      const child = children[top.node][top.ci++];
      const ch = s.charCodeAt(child) - 97;
      if (lastSeen[ch] !== -1) newParent[child] = lastSeen[ch];
      const prev = lastSeen[ch];
      lastSeen[ch] = child;
      stk.push({ node: child, ci: 0, prev });
    } else {
      lastSeen[s.charCodeAt(top.node) - 97] = top.prev;
      stk.pop();
    }
  }

  // Build new tree and compute subtree sizes
  const newChildren = Array.from({ length: n }, () => []);
  for (let i = 1; i < n; i++) {
    newChildren[newParent[i]].push(i);
  }

  const size = new Array(n).fill(1);
  const postOrder = [];
  const stk2 = [0];
  while (stk2.length > 0) {
    const node = stk2.pop();
    postOrder.push(node);
    for (const c of newChildren[node]) stk2.push(c);
  }
  for (let i = postOrder.length - 1; i >= 0; i--) {
    const node = postOrder[i];
    for (const c of newChildren[node]) size[node] += size[c];
  }

  return size;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findSubtreeSizes([-1, 0, 0, 1, 1, 1], 'abaabc'))); // [6,3,1,1,1,1]
console.log(JSON.stringify(findSubtreeSizes([-1, 0, 4, 0, 1], 'abbba'))); // [5,2,1,1,1]
console.log(JSON.stringify(findSubtreeSizes([-1, 0, 1], 'abc'))); // [3,2,1]
console.log(JSON.stringify(findSubtreeSizes([-1, 0, 0], 'aaa'))); // [3,1,1]
console.log(JSON.stringify(findSubtreeSizes([-1], 'a'))); // [1]
