/*
 * @lc app=leetcode id=3770 lang=javascript
 *
 * [3770] Largest Prime from Consecutive Prime Sum
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var largestPrime = function(n) {
    if (n < 2) return 0;

    // sieve
    const isPrime = new Uint8Array(n + 1).fill(1);
    isPrime[0] = isPrime[1] = 0;
    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) isPrime[j] = 0;
        }
    }

    // collect primes and compute prefix sums
    const primes = [];
    for (let i = 2; i <= n; i++) if (isPrime[i]) primes.push(i);
    const prefix = [0];
    for (const p of primes) prefix.push(prefix[prefix.length - 1] + p);

    // enumerate consecutive prime sums starting from 2
    let ans = 0;
    for (let j = 1; j <= primes.length; j++) {
        const sum = prefix[j];
        if (sum > n) break;
        if (isPrime[sum]) ans = sum;
    }

    return ans;
};
// @lc code=end

// TEST:
const test = (fn, args, expected) => {
    const result = fn(...args);
    console.log(JSON.stringify(args), '=>', result, result === expected ? 'OK' : 'FAIL expected ' + expected);
};
test(largestPrime, [20], 17);
test(largestPrime, [2], 2);
test(largestPrime, [1], 0);
test(largestPrime, [10], 5);
test(largestPrime, [100], 41);
test(largestPrime, [1000], 281);
test(largestPrime, [5], 5);
