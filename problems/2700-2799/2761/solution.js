/*
 * @lc app=leetcode id=2761 lang=javascript
 *
 * [2761] Prime Pairs With Target Sum
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var findPrimePairs = function(n) {
    // Sieve of Eratosthenes
    const isPrime = new Uint8Array(n + 1);
    isPrime.fill(1);
    isPrime[0] = isPrime[1] = 0;
    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = 0;
            }
        }
    }

    const result = [];
    for (let x = 2; x <= n / 2; x++) {
        if (isPrime[x] && isPrime[n - x]) {
            result.push([x, n - x]);
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findPrimePairs(10)));       // [[3,7],[5,5]]
console.log(JSON.stringify(findPrimePairs(2)));        // []
console.log(JSON.stringify(findPrimePairs(3)));        // []  (1+2, 1 not prime)
console.log(JSON.stringify(findPrimePairs(5)));        // [[2,3]]
console.log(JSON.stringify(findPrimePairs(100)));      // multiple pairs
console.log(JSON.stringify(findPrimePairs(1)));        // []
console.log(JSON.stringify(findPrimePairs(4)));        // [[2,2]]
