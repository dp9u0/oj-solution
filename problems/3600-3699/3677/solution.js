/*
 * @lc app=leetcode id=3677 lang=javascript
 *
 * [3677] Count Binary Palindromic Numbers
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countBinaryPalindromes = function(n) {
    if (n === 0) return 1;

    const N = BigInt(n);
    const bits = N.toString(2);
    const L = bits.length;

    let count = 1; // k=0

    // Palindromes with fewer than L bits
    for (let l = 1; l < L; l++) {
        count += (1 << ((l - 1) >> 1));
    }

    // Palindromes with exactly L bits and <= n
    const h = (L + 1) >> 1; // ceil(L/2)
    const M = Number(N >> BigInt(L - h));

    // Prefixes strictly less than M (first h bits of n)
    count += M - (1 << (h - 1));

    // Check prefix = M: construct palindrome and compare
    const prefix = bits.slice(0, h);
    const rev = prefix.slice(0, L - h).split('').reverse().join('');
    const palindrome = BigInt('0b' + prefix + rev);

    if (palindrome <= N) count++;

    return count;
};
// @lc code=end

// TEST:
console.log(countBinaryPalindromes(9)); // 6
console.log(countBinaryPalindromes(0)); // 1
console.log(countBinaryPalindromes(1)); // 2
console.log(countBinaryPalindromes(2)); // 2
console.log(countBinaryPalindromes(15)); // 7
console.log(countBinaryPalindromes(1000000000000000)); // large
