/*
 * @lc app=leetcode.cn id=4079 lang=javascript
 *
 * [4079] 选择质数子集 I
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} s
 * @return {number[]}
 */
function maxPrimes(n, s) {
  const sieve = new Uint8Array(n + 1);
  const res = [];
  let sum = 0;
  for (let i = 2; i <= n; i++) {
    if (sieve[i]) continue;
    for (let j = i * i; j <= n; j += i) sieve[j] = 1;
    if (sum + i <= s) {
      sum += i;
      res.push(i);
    } else {
      break;
    }
  }
  return res;
}
// @lc code=end

// TEST:
console.log(JSON.stringify(maxPrimes(7, 20)) === JSON.stringify([2,3,5,7]));
console.log(JSON.stringify(maxPrimes(15, 15)) === JSON.stringify([2,3,5]));
console.log(JSON.stringify(maxPrimes(5, 1)).length === 2);
console.log(JSON.stringify(maxPrimes(2, 2)) === JSON.stringify([2]));
console.log(maxPrimes(1, 100).length === 0);
(() => {
  const r = maxPrimes(100, 1000);
  const sum = r.reduce((a, b) => a + b, 0);
  console.log(r.length === 24 && sum === 963 && sum + 97 > 1000);
})();
