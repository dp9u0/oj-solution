/*
 * @lc app=leetcode id=3272 lang=javascript
 *
 * [3272] Find the Count of Good Integers
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var countGoodIntegers = function(n, k) {
    const half = Math.ceil(n / 2);
    const start = 10 ** (half - 1);
    const end = 10 ** half;

    // Precompute factorials
    const fact = new Array(n + 1);
    fact[0] = 1;
    for (let i = 1; i <= n; i++) fact[i] = fact[i - 1] * i;

    const seen = new Set();

    // Enumerate all n-digit palindromes
    for (let i = start; i < end; i++) {
        const s = String(i);
        const rev = s.split('').reverse().join('');
        const palindrome = n % 2 === 0
            ? s + rev
            : s + rev.slice(1);

        if (parseInt(palindrome) % k === 0) {
            const freq = new Array(10).fill(0);
            for (const c of palindrome) freq[c.charCodeAt(0) - 48]++;
            seen.add(freq.join(','));
        }
    }

    let ans = 0;
    for (const key of seen) {
        const freq = key.split(',').map(Number);
        // Valid permutations: n! / prod(ci!) minus those with leading zero
        let total = fact[n];
        for (let d = 0; d <= 9; d++) total = Math.round(total / fact[freq[d]]);

        if (freq[0] > 0) {
            let invalid = fact[n - 1];
            invalid = Math.round(invalid / fact[freq[0] - 1]);
            for (let d = 1; d <= 9; d++) invalid = Math.round(invalid / fact[freq[d]]);
            total -= invalid;
        }
        ans += total;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(countGoodIntegers(3, 5));  // 27
console.log(countGoodIntegers(1, 4));  // 2
console.log(countGoodIntegers(5, 6));  // 2468
console.log(countGoodIntegers(1, 1));  // 9
console.log(countGoodIntegers(2, 1));  // 9
