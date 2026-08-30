/*
 * @lc app=leetcode id=3897 lang=javascript
 *
 * [3897] Maximum Value of Concatenated Binary Segments
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums0
 * @return {number}
 */
var maxValue = function (nums1, nums0) {
  const MOD = 1e9 + 7;
  const n = nums1.length;
  const segs = [];
  let totalLen = 0;
  for (let i = 0; i < n; i++) {
    segs.push({ a: nums1[i], b: nums0[i] });
    totalLen += nums1[i] + nums0[i];
  }

  // 交换论证: A 在 B 前当且仅当 key(A) >= key(B), key(a,b) = (2^a-1)*2^b/(2^b-1)
  // 等价规则: b=0(纯1段)最前 -> a 降序, b 升序 -> a=0(纯0段)最后
  segs.sort((s1, s2) => {
    if (s1.b === 0 && s2.b === 0) return 0;
    if (s1.b === 0) return -1;
    if (s2.b === 0) return 1;
    if (s1.a !== s2.a) return s2.a - s1.a;
    return s1.b - s2.b;
  });

  // 预处理 2 的幂
  const pow2 = new Array(totalLen + 1);
  pow2[0] = 1;
  for (let i = 1; i <= totalLen; i++) pow2[i] = (pow2[i - 1] * 2) % MOD;

  // 模乘: 拆 15 位避免大数乘法浮点精度丢失 (x,y < MOD < 2^30)
  const mulmod = (x, y) =>
    ((x * (y >>> 15)) % MOD * 32768 + (x * (y & 32767)) % MOD) % MOD;

  // 从后往前, 段 1^a 0^b 的贡献为 (2^a-1) * 2^(b+suffix)
  let ans = 0;
  let suffix = 0;
  for (let i = n - 1; i >= 0; i--) {
    const { a, b } = segs[i];
    ans = (ans + mulmod(mulmod((pow2[a] - 1 + MOD) % MOD, pow2[b]), pow2[suffix])) % MOD;
    suffix += a + b;
  }
  return ans;
};
// @lc code=end

// TEST:
// 1. 示例1: "10"+"11" -> "1110" = 14
console.log(maxValue([1, 2], [1, 0]), '===', 14);
// 2. 示例2: "111"+"1000" -> "1111000" = 120
console.log(maxValue([3, 1], [0, 3]), '===', 120);
// 3. 单段: "10" = 2
console.log(maxValue([1], [1]), '===', 2);
// 4. 纯1段在前: "1"+"111110" -> "1111110" = 126 (若 "1111101" 只有 125)
console.log(maxValue([5, 1], [1, 0]), '===', 126);
// 5. 同 a 时 b 小的在前: "110"+"11000" -> "11011000" = 216 (反向 "11000110" = 198)
console.log(maxValue([2, 2], [1, 3]), '===', 216);
// 6. 纯0段放最后: "11"+"0" -> "110" = 6
console.log(maxValue([0, 2], [1, 0]), '===', 6);
// 7. 全0: 0
console.log(maxValue([0], [1]), '===', 0);
// 8. 大数取模 (WA 回归用例)
console.log(maxValue([2288, 4019], [281, 10000]), '===', 307043257);
