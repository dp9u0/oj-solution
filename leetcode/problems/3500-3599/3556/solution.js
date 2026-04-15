/*
 * @lc app=leetcode id=3556 lang=javascript
 *
 * [3556] Sum of Largest Prime Substrings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var sumOfLargestPrimes = function(s) {
    const isPrime = (n) => {
        if (n < 2) return false;
        if (n === 2) return true;
        if (n % 2 === 0) return false;
        for (let i = 3; i * i <= n; i += 2) {
            if (n % i === 0) return false;
        }
        return true;
    };

    const primes = new Set();
    const n = s.length;
    for (let i = 0; i < n; i++) {
        let num = 0;
        for (let j = i; j < n; j++) {
            num = num * 10 + Number(s[j]);
            if (isPrime(num)) primes.add(num);
        }
    }

    const sorted = [...primes].sort((a, b) => b - a);
    let sum = 0;
    for (let i = 0; i < Math.min(3, sorted.length); i++) {
        sum += sorted[i];
    }
    return sum;
};
// @lc code=end

// TEST:
console.log(sumOfLargestPrimes("12234")); // 1469
console.log(sumOfLargestPrimes("111")); // 11
