/*
 * @lc app=leetcode id=3260 lang=javascript
 *
 * [3260] Find the Largest Palindrome Divisible by K
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var largestPalindrome = function(n, k) {
  const r = c => c.repeat(n);
  const r2 = (c, cnt) => c.repeat(Math.max(0, cnt));

  if (k === 1 || k === 3 || k === 9) return r('9');

  if (k === 2) return n === 1 ? '8' : '8' + '9'.repeat(n - 2) + '8';

  if (k === 4) return n <= 3 ? '8'.repeat(n) : '88' + '9'.repeat(n - 4) + '88';

  if (k === 5) return n === 1 ? '5' : '5' + '9'.repeat(n - 2) + '5';

  if (k === 6) {
    if (n === 1) return '6';
    if (n === 2) return '66';
    if (n % 2 === 0) {
      const m = n / 2;
      return '8' + '9'.repeat(m - 2) + '77' + '9'.repeat(m - 2) + '8';
    }
    const m = (n - 1) / 2;
    return '8' + '9'.repeat(m - 1) + '8' + '9'.repeat(m - 1) + '8';
  }

  if (k === 7) {
    const rem = [0, 2, 1, 5, 3, 4][n % 6];
    if (rem === 0) return r('9');
    const inv7 = [0, 1, 4, 5, 2, 3, 6];
    const p10 = [1, 3, 2, 6, 4, 5]; // 10^i mod 7

    if (n % 2 === 1) {
      const mid = (n - 1) / 2;
      const w = p10[mid % 6];
      const v = (rem * inv7[w]) % 7;
      const d = 9 - v;
      const half = '9'.repeat(mid);
      return half + d + half;
    }
    const m = n / 2;
    const i = m - 1;
    const w = (p10[i % 6] + p10[(n - 1 - i) % 6]) % 7;
    const v = (rem * inv7[w]) % 7;
    const d = 9 - v;
    return '9'.repeat(m - 1) + String(d) + String(d) + '9'.repeat(m - 1);
  }

  if (k === 8) return n <= 5 ? '8'.repeat(n) : '888' + '9'.repeat(n - 6) + '888';

  return r('9');
};
// @lc code=end

// TEST:
console.log(largestPalindrome(3, 5)); // "595"
console.log(largestPalindrome(1, 4)); // "8"
console.log(largestPalindrome(5, 6)); // "89898"
console.log(largestPalindrome(4, 7)); // "9779"
console.log(largestPalindrome(2, 8)); // "88"
