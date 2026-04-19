/*
 * @lc app=leetcode id=3479 lang=javascript
 *
 * [3479] Fruits Into Baskets III
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
  const n = baskets.length;
  let size = 1;
  while (size < n) size <<= 1;
  const tree = new Array(2 * size).fill(0);
  for (let i = 0; i < n; i++) tree[size + i] = baskets[i];
  for (let i = size - 1; i > 0; i--) tree[i] = Math.max(tree[2 * i], tree[2 * i + 1]);

  const query = (x) => {
    if (tree[1] < x) return -1;
    let node = 1;
    while (node < size) {
      if (tree[2 * node] >= x) node = 2 * node;
      else node = 2 * node + 1;
    }
    return node - size;
  };

  const update = (i) => {
    let node = size + i;
    tree[node] = 0;
    while (node > 1) {
      node >>= 1;
      tree[node] = Math.max(tree[2 * node], tree[2 * node + 1]);
    }
  };

  let unplaced = 0;
  for (const f of fruits) {
    const idx = query(f);
    if (idx === -1) unplaced++;
    else update(idx);
  }
  return unplaced;
};
// @lc code=end

// TEST:
console.log(numOfUnplacedFruits([4,2,5], [3,5,4])); // 1
console.log(numOfUnplacedFruits([3,6,1], [6,4,7])); // 0
console.log(numOfUnplacedFruits([5,5,5], [1,1,1])); // 3
console.log(numOfUnplacedFruits([1], [1])); // 0
console.log(numOfUnplacedFruits([1,2,3,4], [4,3,2,1])); // 2
