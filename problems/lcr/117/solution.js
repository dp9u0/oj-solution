/*
 * @lc app=leetcode.cn id=LCR 117 lang=javascript
 *
 * [LCR 117] 相似字符串组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function(strs) {
  const n = strs.length;
  const parent = Array.from({ length: n }, (_, i) => i);

  const find = (x) => {
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    return x;
  };

  const union = (a, b) => {
    const ra = find(a);
    const rb = find(b);
    if (ra !== rb) parent[ra] = rb;
  };

  // 相似 ⇔ 差异位置数 <= 2（异位词保证差异数恒为偶数，即 0 或 2）
  const isSimilar = (a, b) => {
    let diff = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i] && ++diff > 2) return false;
    }
    return true;
  };

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isSimilar(strs[i], strs[j])) union(i, j);
    }
  }

  const groups = new Set();
  for (let i = 0; i < n; i++) {
    groups.add(find(i));
  }
  return groups.size;
};
// @lc code=end

// TEST:
console.log(numSimilarGroups(['tars', 'rats', 'arts', 'star'])); // 2
console.log(numSimilarGroups(['omv', 'ovm'])); // 1
console.log(numSimilarGroups(['abc', 'abc'])); // 1
console.log(numSimilarGroups(['aaa', 'aaa', 'aaa'])); // 1
console.log(numSimilarGroups(['tars', 'rats', 'arts', 'star', 'tsar'])); // 2
