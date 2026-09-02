/*
 * @lc app=leetcode.cn id=LCR 118 lang=javascript
 *
 * [LCR 118] 冗余连接
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  const n = edges.length;
  const parent = new Array(n + 1).fill(0).map((_, i) => i);

  const find = (x) => {
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]]; // 路径压缩
      x = parent[x];
    }
    return x;
  };

  const union = (a, b) => {
    parent[find(a)] = find(b);
  };

  for (const [a, b] of edges) {
    if (find(a) === find(b)) {
      return [a, b]; // 成环的边，即冗余边
    }
    union(a, b);
  }
};
// @lc code=end

// TEST:
console.log('[[2,3]]', JSON.stringify(findRedundantConnection([[1, 2], [1, 3], [2, 3]])) === JSON.stringify([2, 3]));
console.log('[[1,4]]', JSON.stringify(findRedundantConnection([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]])) === JSON.stringify([1, 4]));
console.log('[[3,1]]', JSON.stringify(findRedundantConnection([[1, 2], [2, 3], [3, 1], [3, 4]])) === JSON.stringify([3, 1]));
console.log('square', JSON.stringify(findRedundantConnection([[1, 2], [2, 3], [3, 4], [4, 1], [1, 5]])) === JSON.stringify([4, 1]));
console.log('triangle tail', JSON.stringify(findRedundantConnection([[1, 2], [2, 3], [3, 4], [1, 3], [1, 5]])) === JSON.stringify([1, 3]));
