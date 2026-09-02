/*
 * @lc app=leetcode.cn id=LCR 116 lang=javascript
 *
 * [LCR 116] 省份数量
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
  const n = isConnected.length;
  const parent = Array.from({ length: n }, (_, i) => i);
  const rank = new Array(n).fill(0);

  const find = (x) => {
    // 路径压缩
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    return x;
  };

  const union = (a, b) => {
    let ra = find(a);
    let rb = find(b);
    if (ra === rb) return;
    // 按秩合并
    if (rank[ra] < rank[rb]) {
      [ra, rb] = [rb, ra];
    }
    parent[rb] = ra;
    if (rank[ra] === rank[rb]) rank[ra]++;
  };

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isConnected[i][j] === 1) union(i, j);
    }
  }

  let provinces = 0;
  for (let i = 0; i < n; i++) {
    if (find(i) === i) provinces++;
  }
  return provinces;
};
// @lc code=end

// TEST:
const test = (input, expected) => {
  const res = findCircleNum(input);
  console.log(res === expected ? 'PASS' : 'FAIL', res, expected);
};

test([[1, 1, 0], [1, 1, 0], [0, 0, 1]], 2); // 示例 1
test([[1, 0, 0], [0, 1, 0], [0, 0, 1]], 3); // 示例 2
test([[1]], 1); // 单城市
test([[1, 1, 1], [1, 1, 1], [1, 1, 1]], 1); // 全相连
test([[1, 0, 1], [0, 1, 0], [1, 0, 1]], 2); // 0-2 相连, 1 孤立
