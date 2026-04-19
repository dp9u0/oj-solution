/*
 * @lc app=leetcode id=1562 lang=javascript
 *
 * [1562] Find Latest Group of Size M
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} m
 * @return {number}
 */
var findLatestStep = function(arr, m) {
  const n = arr.length;
  const parent = new Int32Array(n + 2);
  const size = new Int32Array(n + 2);
  const active = new Uint8Array(n + 2);
  let countM = 0, result = -1;

  const find = (x) => {
    while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; }
    return x;
  };

  for (let step = 0; step < n; step++) {
    const p = arr[step];
    parent[p] = p;
    size[p] = 1;
    active[p] = 1;
    if (m === 1) countM++;

    for (const nb of [p - 1, p + 1]) {
      if (!active[nb]) continue;
      const rp = find(p), rnb = find(nb);
      if (size[rp] === m) countM--;
      if (size[rnb] === m) countM--;
      if (size[rp] < size[rnb]) {
        parent[rp] = rnb;
        size[rnb] += size[rp];
        if (size[rnb] === m) countM++;
      } else {
        parent[rnb] = rp;
        size[rp] += size[rnb];
        if (size[rp] === m) countM++;
      }
    }

    if (countM > 0) result = step + 1;
  }

  return result;
};
// @lc code=end

// TEST:
console.log(findLatestStep([3, 5, 1, 2, 4], 1)); // 4
console.log(findLatestStep([3, 1, 5, 4, 2], 2)); // -1
console.log(findLatestStep([1], 1)); // 1
console.log(findLatestStep([2, 1], 1)); // 1
console.log(findLatestStep([1, 2, 3, 4], 1)); // 1
