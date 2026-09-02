/*
 * @lc app=leetcode.cn id=LCR 163 lang=javascript
 *
 * [LCR 163] 找到第 k 位数字
 */

// @lc code=start
/**
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(k) {
  // digits 表示当前位数（1 位、2 位、3 位...）
  let digits = 1;
  let start = 1;
  // 当前位数段共占用的位数：9 * start * digits
  let count = 9;

  // 1. 定位 k 落在哪个位数段
  while (k > count * digits) {
    k -= count * digits;
    digits++;
    start *= 10;
    count *= 10;
  }

  // 2. 定位具体数字：段内第 k 位对应第 (k-1)/digits 个数字
  const num = start + Math.floor((k - 1) / digits);

  // 3. 定位具体位：段内偏移为 (k-1) % digits
  const digitIndex = (k - 1) % digits;
  return Number(String(num)[digitIndex]);
};
// @lc code=end

// TEST:
const tests = [
  [5, 5],
  [12, 1],
  [1, 1],
  [9, 9],
  [10, 1],
  [11, 0],
  [13, 1],
  [100, 5],
  [190, 1],
  [2147483647, 2],
];

for (const [k, expected] of tests) {
  const actual = findKthNumber(k);
  const pass = actual === expected;
  console.log(`findKthNumber(${k}) = ${actual} ${pass ? 'PASS' : `FAIL (expected ${expected})`}`);
}
