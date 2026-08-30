/*
 * @lc app=leetcode id=839 lang=javascript
 *
 * [839] Similar String Groups
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function (strs) {
  const n = strs.length;
  const parent = Array.from({ length: n }, (_, i) => i);
  const size = new Array(n).fill(1);

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
    if (ra === rb) return;
    if (size[ra] < size[rb]) {
      parent[ra] = rb;
      size[rb] += size[ra];
    } else {
      parent[rb] = ra;
      size[ra] += size[rb];
    }
  };

  // 相似：差异位置恰好为 0 或 2（变位词前提下 2 处差异必然可一次交换相等）
  const isSimilar = (x, y) => {
    let diff = -1;
    let count = 0;
    for (let i = 0; i < x.length; i++) {
      if (x[i] !== y[i]) {
        count++;
        if (count > 2) return false;
        if (diff === -1) diff = i;
        else if (x[diff] !== y[i] || x[i] !== y[diff]) return false;
      }
    }
    return count !== 1;
  };

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isSimilar(strs[i], strs[j])) {
        union(i, j);
      }
    }
  }

  let groups = 0;
  for (let i = 0; i < n; i++) {
    if (find(i) === i) groups++;
  }
  return groups;
};
// @lc code=end

// TEST:
console.log(numSimilarGroups(['tars', 'rats', 'arts', 'star'])); // 2
console.log(numSimilarGroups(['omv', 'ovm'])); // 1
console.log(numSimilarGroups(['abc', 'abc'])); // 1 (相同字符串相似)
console.log(numSimilarGroups(['abc', 'bca', 'cab'])); // 3 (循环移位，两两差异 3 处，不相似)
console.log(numSimilarGroups(['a'])); // 1 (单个字符串)
console.log(numSimilarGroups(['abcd', 'abdc', 'bacd'])); // 1 (两两相似)