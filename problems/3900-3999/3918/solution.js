/*
 * @lc app=leetcode id=3918 lang=javascript
 *
 * [3918] Sum of Primes Between Number and Its Reverse
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var sumOfPrimesInRange = function (n) {
  // 反转 n 的数字，前导零自然被去掉（如 10 -> 1）
  let r = 0;
  for (let x = n; x > 0; x = Math.floor(x / 10)) {
    r = r * 10 + (x % 10);
  }

  const lo = Math.min(n, r);
  const hi = Math.max(n, r);

  // 埃拉托斯特尼筛法，标记 [0, hi] 内的素数
  const isPrime = new Array(hi + 1).fill(true);
  isPrime[0] = false;
  if (hi >= 1) isPrime[1] = false;
  for (let i = 2; i * i <= hi; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= hi; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // 累加 [lo, hi] 内的素数（小于 2 的数不是素数）
  let sum = 0;
  for (let i = Math.max(lo, 2); i <= hi; i++) {
    if (isPrime[i]) sum += i;
  }
  return sum;
};
// @lc code=end

// TEST:
const assertEquals = (actual, expected, label) => {
  const ok = actual === expected;
  console.log(`${ok ? 'PASS' : 'FAIL'} ${label}: got ${actual}, expect ${expected}`);
  return ok;
};

assertEquals(sumOfPrimesInRange(13), 132, 'n=13 (r=31)');
assertEquals(sumOfPrimesInRange(10), 17, 'n=10 (r=1)');
assertEquals(sumOfPrimesInRange(8), 0, 'n=8 (r=8, 无素数)');
assertEquals(sumOfPrimesInRange(1), 0, 'n=1 (区间[1,1])');
assertEquals(sumOfPrimesInRange(2), 2, 'n=2 (区间[2,2])');
assertEquals(sumOfPrimesInRange(31), 132, 'n=31 (r=13, 对称用例)');
assertEquals(sumOfPrimesInRange(99), 0, 'n=99 (r=99, 99 非素数)');
assertEquals(sumOfPrimesInRange(100), 1060, 'n=100 (r=1, 2..100 素数和)');
assertEquals(sumOfPrimesInRange(98), 186, 'n=98 (r=89, 89+97)');
