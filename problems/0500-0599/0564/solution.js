/*
 * @lc app=leetcode id=564 lang=javascript
 *
 * [564] Find the Closest Palindrome
 */

// @lc code=start
/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function(n) {
  const num = BigInt(n);
  const L = n.length;
  const halfLen = (L + 1) >> 1;
  const half = n.slice(0, halfLen);
  const makePal = (h) => {
    const rev = h.slice(0, L >> 1).split('').reverse().join('');
    return BigInt(h + rev);
  };
  const cands = new Set();
  for (const p of [BigInt(half) - 1n, BigInt(half), BigInt(half) + 1n]) {
    const ps = p.toString();
    if (ps.length !== halfLen || ps[0] === '0') continue;
    cands.add(makePal(ps));
  }
  cands.add(L === 1 ? 0n : BigInt('9'.repeat(L - 1)));
  cands.add(BigInt('1' + '0'.repeat(L - 1) + '1'));

  let best = null;
  for (const c of cands) {
    if (c === num) continue;
    if (
      best === null ||
      (c - num > 0n ? c - num : num - c) < (best - num > 0n ? best - num : num - best) ||
      ((c - num > 0n ? c - num : num - c) === (best - num > 0n ? best - num : num - best) && c < best)
    ) {
      best = c;
    }
  }
  return best.toString();
};
// @lc code=end

// TEST:
console.log(nearestPalindromic('123') === '121');
console.log(nearestPalindromic('1') === '0');
console.log(nearestPalindromic('10') === '9');
console.log(nearestPalindromic('99') === '101');
console.log(nearestPalindromic('100') === '99');
console.log(nearestPalindromic('999') === '1001');
console.log(nearestPalindromic('1000') === '999');
console.log(nearestPalindromic('11') === '9');
console.log(nearestPalindromic('123456789012345678') === '123456788887654321');
