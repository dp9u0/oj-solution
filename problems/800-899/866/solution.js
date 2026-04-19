/*
 * @lc app=leetcode id=866 lang=javascript
 *
 * [866] Prime Palindrome
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var primePalindrome = function(n) {
  if (n <= 2) return 2;
  if (n <= 3) return 3;
  if (n <= 5) return 5;
  if (n <= 7) return 7;
  if (n <= 11) return 11;

  const isPrime = (x) => {
    if (x < 2) return false;
    if (x === 2) return true;
    if (x % 2 === 0) return false;
    for (let i = 3; i * i <= x; i += 2) {
      if (x % i === 0) return false;
    }
    return true;
  };

  // Generate odd-length palindromes by mirroring half
  for (let half = 1; half < 100000; half++) {
    const s = String(half);
    const palindrome = parseInt(s + s.slice(0, -1).split('').reverse().join(''));
    if (palindrome >= n && isPrime(palindrome)) return palindrome;
  }
  return -1;
};
// @lc code=end

// TEST:
console.log(primePalindrome(6)); // 7
console.log(primePalindrome(8)); // 11
console.log(primePalindrome(13)); // 101
console.log(primePalindrome(1)); // 2
console.log(primePalindrome(9989900)); // 100030001
