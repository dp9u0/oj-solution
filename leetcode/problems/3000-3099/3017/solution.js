/*
 * @lc app=leetcode id=3017 lang=javascript
 *
 * [3017] Count the Number of Houses at a Certain Distance II
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} x
 * @param {number} y
 * @return {number[]}
 */
var countOfPairs = function(n, x, y) {
  if (x > y) [x, y] = [y, x];

  const diff = new Float64Array(n + 3);
  const radd = (l, r, v) => {
    l = Math.max(1, l); r = Math.min(n, r);
    if (l <= r) { diff[l] += v; diff[r + 1] -= v; }
  };

  for (let d = 1; d <= n - 1; d++) radd(d, d, 2 * (n - d));

  if (x === y) {
    let acc = 0;
    const ans = [];
    for (let d = 1; d <= n; d++) { acc += diff[d]; ans.push(acc); }
    return ans;
  }

  for (let i = 1; i <= n; i++) {
    const A = Math.abs(i - x) + 1;

    // Case 1: j >= y, shortcut via (x,y) if better
    if (A < y - i && y <= n) {
      const oldLo = y - i, oldHi = n - i;
      const newLo = A, newHi = A + n - y;
      radd(oldLo, oldHi, -2);
      radd(newLo, newHi, 2);
    }

    // Case 2: j < y, shortcut via (x,y) if better
    // shortcut < direct: A + y - j < j - i => j > (A + y + i) / 2
    const crossJ = Math.floor((A + y + i) / 2) + 1;
    if (crossJ < y && crossJ > i) {
      const oldLo = crossJ - i, oldHi = y - 1 - i;
      const newLo = A + 1, newHi = A + y - crossJ;
      radd(oldLo, oldHi, -2);
      radd(newLo, newHi, 2);
    }
  }

  let acc = 0;
  const ans = [];
  for (let d = 1; d <= n; d++) { acc += diff[d]; ans.push(acc); }
  return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(countOfPairs(3, 1, 3))); // [6,0,0]
console.log(JSON.stringify(countOfPairs(5, 2, 4))); // [10,8,2,0,0]
console.log(JSON.stringify(countOfPairs(4, 1, 1))); // [6,4,2,0]
console.log(JSON.stringify(countOfPairs(2, 1, 2))); // [2,0]
console.log(JSON.stringify(countOfPairs(6, 1, 5))); // [12,14,4,0,0,0]
