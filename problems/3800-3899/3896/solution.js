/*
 * @lc app=leetcode id=3896 lang=javascript
 *
 * [3896] Minimum Operations to Transform Array into Alternating Prime
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  // Sieve up to 2e5: nums[i] <= 1e5 and the next prime after 1e5 is 100003
  const MAX = 200003;
  const isPrime = new Uint8Array(MAX).fill(1);
  isPrime[0] = 0;
  isPrime[1] = 0;
  for (let i = 2; i * i < MAX; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < MAX; j += i) isPrime[j] = 0;
    }
  }

  // nextPrime[v]: smallest prime >= v
  const nextPrime = new Int32Array(MAX + 1);
  for (let i = MAX - 1; i >= 0; i--) {
    nextPrime[i] = isPrime[i] ? i : nextPrime[i + 1];
  }

  let ops = 0;
  for (let i = 0; i < nums.length; i++) {
    const v = nums[i];
    if (i % 2 === 0) {
      ops += nextPrime[v] - v;
    } else if (isPrime[v]) {
      // 2 -> 4 costs 2 (3 is prime); any odd prime p -> p+1 (even > 2) costs 1
      ops += v === 2 ? 2 : 1;
    }
  }
  return ops;
};
// @lc code=end

// TEST:
console.log(minOperations([1, 2, 3, 4]) === 3);
console.log(minOperations([5, 6, 7, 8]) === 0);
console.log(minOperations([4, 4]) === 1);
console.log(minOperations([1]) === 1); // 1 -> 2
console.log(minOperations([2, 2]) === 2); // idx0: 2 ok; idx1: 2 -> 4
console.log(minOperations([13, 13, 100000]) === 4); // idx1: 13 -> 14; idx2: 100000 -> 100003
console.log(minOperations([99989, 1, 99991]) === 0); // 99989 & 99991 primes, 1 non-prime
