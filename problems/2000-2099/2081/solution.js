/*
 * @lc app=leetcode id=2081 lang=javascript
 *
 * [2081] Sum of k-Mirror Numbers
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var kMirror = function(k, n) {
  const isPalindrome = (s) => {
    let l = 0, r = s.length - 1;
    while (l < r) {
      if (s[l] !== s[r]) return false;
      l++;
      r--;
    }
    return true;
  };

  const toBaseK = (num, base) => {
    if (num === 0) return '0';
    let result = '';
    while (num > 0) {
      result = (num % base) + result;
      num = Math.floor(num / base);
    }
    return result;
  };

  // Generate palindromes by length in order
  const generatePalindromes = (length) => {
    const results = [];
    const half = Math.ceil(length / 2);
    const start = Math.pow(10, half - 1);
    const end = Math.pow(10, half);

    for (let prefix = start; prefix < end; prefix++) {
      const pre = String(prefix);
      let palindrome;
      if (length % 2 === 0) {
        palindrome = pre + pre.split('').reverse().join('');
      } else {
        palindrome = pre + pre.slice(0, -1).split('').reverse().join('');
      }
      results.push(Number(palindrome));
    }
    return results;
  };

  let count = 0;
  let sum = 0;
  let length = 1;

  while (count < n) {
    const palindromes = generatePalindromes(length);
    for (const p of palindromes) {
      if (isPalindrome(toBaseK(p, k))) {
        sum += p;
        count++;
        if (count === n) return sum;
      }
    }
    length++;
  }

  return sum;
};
// @lc code=end

// TEST:
console.log(kMirror(2, 5) === 25);
console.log(kMirror(3, 7) === 499);
console.log(kMirror(7, 17) === 20379000);
console.log(kMirror(2, 1) === 1);
console.log(kMirror(4, 5) === 66);
console.log(kMirror(3, 1) === 1);
console.log(kMirror(5, 3) === 6);
