/*
 * @lc app=leetcode id=470 lang=javascript
 *
 * [470] Implement Rand10() Using Rand7()
 */

// @lc code=start
/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function () {
  // 两次 rand7 组合成 7 进制两位数: [1, 49] 均匀分布
  let r = (rand7() - 1) * 7 + rand7();
  if (r <= 40) return (r - 1) % 10 + 1;

  // 复用被拒绝的 [41, 49] (9 个均匀值): a ∈ [0, 8]
  // a * 7 + rand7() → [0, 62] 均匀分布, 取 [0, 59]
  let a = r - 41;
  r = a * 7 + rand7() - 1;
  if (r <= 59) return (r % 10) + 1;

  // 复用被拒绝的 [60, 62] (3 个均匀值): b ∈ [0, 2]
  // b * 7 + rand7() → [0, 20] 均匀分布, 取 [0, 19]
  let b = r - 60;
  r = b * 7 + rand7() - 1;
  if (r <= 19) return (r % 10) + 1;

  // 剩余 [20] 只有 1 个值, 无熵可回收, 重新开始
  return rand10();
};
// @lc code=end

// TEST:
// 本地模拟 rand7 (LeetCode 上由平台提供)
const rand7 = () => Math.floor(Math.random() * 7) + 1;

// 用例 1: 单次调用结果应在 [1, 10] 内
console.log('case1:', rand10() >= 1 && rand10() <= 10);

// 用例 2: 多次调用的取值范围校验
const results = Array.from({ length: 100000 }, () => rand10());
console.log('case2:', results.every((v) => v >= 1 && v <= 10));

// 用例 3: 均匀性校验 —— 每个数字出现频率应接近 10%
const count = new Array(11).fill(0);
results.forEach((v) => count[v]++);
const freq = count.slice(1).map((c) => (c / results.length) * 100);
console.log('case3:', freq.every((f) => Math.abs(f - 10) < 0.5), freq.map((f) => f.toFixed(2)).join(' '));

// 用例 4: 期望调用次数校验 —— 复用版约 2.21 次 (朴素拒绝采样为 2.45 次)
let calls = 0;
const countingRand7 = () => {
  calls++;
  return Math.floor(Math.random() * 7) + 1;
};
const countedRand10 = () => {
  let r = (countingRand7() - 1) * 7 + countingRand7();
  if (r <= 40) return (r - 1) % 10 + 1;
  let a = r - 41;
  r = a * 7 + countingRand7() - 1;
  if (r <= 59) return r % 10 + 1;
  let b = r - 60;
  r = b * 7 + countingRand7() - 1;
  if (r <= 19) return r % 10 + 1;
  return countedRand10();
};
const N = 100000;
for (let i = 0; i < N; i++) countedRand10();
console.log('case4: expected calls ≈', (calls / N).toFixed(3), calls / N < 2.45);

// 用例 5: 边界压力 —— 大量调用不抛错且全部合法
console.log('case5:', Array.from({ length: 1000 }, () => rand10()).every((v) => Number.isInteger(v) && v >= 1 && v <= 10));
