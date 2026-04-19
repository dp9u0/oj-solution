/*
 * @lc app=leetcode id=1925 lang=javascript
 *
 * [1925] Count Square Sum Triples
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
  let count = 0;
  for (let a = 1; a <= n; a++) {
    for (let b = a + 1; b <= n; b++) {
      const c2 = a * a + b * b;
      const c = Math.floor(Math.sqrt(c2));
      if (c * c === c2 && c <= n) count += 2;
    }
  }
  return count;
};
// @lc code=end

// TEST:
console.log(countTriples(5)); // 2
console.log(countTriples(10)); // 4
console.log(countTriples(250)); // 330
