/*
 * @lc app=leetcode.cn id=2897 lang=javascript
 *
 * [2897] 对数组执行操作使平方和最大
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSum = function(nums, k) {
  const MOD = 1e9 + 7;
  const BITS = 30;
  // 每个二进制位上 1 的个数是操作的不变量
  const cnt = new Array(BITS).fill(0);
  for (const x of nums) {
    for (let b = 0; b < BITS; b++) {
      if ((x >> b) & 1) cnt[b]++;
    }
  }
  // 贪心：第 i 大的数取所有 cnt[b] > i 的位，平方和用 BigInt 防溢出
  let ans = 0n;
  const bigMod = BigInt(MOD);
  for (let i = 0; i < k; i++) {
    let v = 0;
    for (let b = 0; b < BITS; b++) {
      if (cnt[b] > i) v |= 1 << b;
    }
    const bv = BigInt(v);
    ans = (ans + bv * bv) % bigMod;
  }
  return Number(ans);
};
// @lc code=end

// TEST:
console.log(maxSum([2, 6, 5, 8], 2) === 261); // true
console.log(maxSum([4, 5, 4, 7], 3) === 90); // true
console.log(maxSum([1], 1) === 1); // true
console.log(maxSum([1, 2, 3], 3) === 18); // bit counts: bit0=2, bit1=2 -> [3,3,0] -> 9+9+0=18
console.log(maxSum([1000000000, 1000000000, 1000000000], 3) === 147); // 3 * (1e9)^2 mod (1e9+7) = 3 * 49 = 147
