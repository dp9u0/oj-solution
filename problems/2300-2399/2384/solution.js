/*
 * @lc app=leetcode id=2384 lang=javascript
 *
 * [2384] Largest Palindromic Number
 */

// @lc code=start
/**
 * @param {string} num
 * @return {string}
 */
var largestPalindromic = function(num) {
  const freq = new Array(10).fill(0);
  for (const ch of num) freq[ch.charCodeAt(0) - 48]++;

  let left = '';
  let middle = '';

  for (let d = 9; d >= 0; d--) {
    const pairs = Math.floor(freq[d] / 2);
    if (pairs > 0) {
      left += String(d).repeat(pairs);
    }
    if (freq[d] % 2 === 1 && middle === '') {
      middle = String(d);
    }
  }

  if (left.length === 0 || left[0] === '0') {
    return middle || '0';
  }

  return left + middle + left.split('').reverse().join('');
};
// @lc code=end

// TEST:
console.log(largestPalindromic('444947137')); // "7449447"
console.log(largestPalindromic('00009')); // "9"
console.log(largestPalindromic('0000')); // "0"
console.log(largestPalindromic('00011')); // "10001"
