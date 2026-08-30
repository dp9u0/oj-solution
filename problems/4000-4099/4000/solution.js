/*
 * @lc app=leetcode id=4000 lang=javascript
 *
 * [4000] Largest Integer With Given Digit Sum
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} s
 * @return {number}
 */
var largestInteger = function(n, s) {
  if (s === 0) return 0;
  if (s > 9 * n) return -1;

  let result = 0;
  let remaining = s;
  for (let i = 0; i < n; i++) {
    const digit = Math.min(9, remaining);
    result = result * 10 + digit;
    remaining -= digit;
  }
  return result;
};
// @lc code=end

// TEST:
const assertEquals = (actual, expected, name) => {
  const pass = actual === expected;
  console.log(`${pass ? 'PASS' : 'FAIL'} ${name}: expected=${expected}, actual=${actual}`);
  return pass;
};

assertEquals(largestInteger(2, 9), 90, 'n=2,s=9');
assertEquals(largestInteger(2, 19), -1, 'n=2,s=19');
assertEquals(largestInteger(5, 0), 0, 'n=5,s=0');
assertEquals(largestInteger(1, 5), 5, 'n=1,s=5');
assertEquals(largestInteger(3, 27), 999, 'n=3,s=27');
assertEquals(largestInteger(5, 100), -1, 'n=5,s=100');
assertEquals(largestInteger(4, 20), 9920, 'n=4,s=20');
assertEquals(largestInteger(5, 45), 99999, 'n=5,s=45');
assertEquals(largestInteger(1, 0), 0, 'n=1,s=0');
assertEquals(largestInteger(3, 1), 100, 'n=3,s=1');
