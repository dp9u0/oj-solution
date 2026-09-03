/*
 * @lc app=leetcode.cn id=3876 lang=javascript
 *
 * [3876] 构造奇偶一致的数组 II
 */

// @lc code=start
/**
 * 对每个下标 i,可选 nums2[i] = nums1[i](保持),或 nums2[i] = nums1[i] - nums1[j]
 * (j != i 且差值 >= 1)。问能否让 nums2 全为奇数,或全为偶数。
 *
 * 关键观察:结果的奇偶 = 被减数奇偶 XOR 减数奇偶。
 *  - 若某元素 x 的目标奇偶与 x 本身一致 → 直接"保持"即可。
 *  - 若不一致(需要被"修正"),设目标奇偶为 P、x 奇偶为 1-P,则需减数 y 满足
 *    parity(x) XOR parity(y) = P → parity(y) = (1-P) XOR P = 1,即减数必为奇数!
 *    无论目标是全奇还是全偶,要修正的元素都只能减去一个更小的奇数。
 *
 * 减数可被任意复用(每个 i 独立选择),所以只需"存在性":
 *  - 全偶可行 ⟺ 没有奇数元素(最小的那个奇数没有任何更小奇数可减,无法被修正)。
 *  - 全奇可行 ⟺ 每个偶数元素都有某个更小奇数可减 ⟺ 最小奇数 < 最小偶数
 *    (最小偶数若小于最小奇数则无更小奇数可减;反之所有偶数都可用最小奇数来减)。
 *  - 全奇(无偶数)/全偶(无奇数)自然可行。
 *
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function(nums1) {
  let minOdd = Infinity, minEven = Infinity;
  for (const x of nums1) {
    if (x & 1) minOdd = Math.min(minOdd, x);
    else minEven = Math.min(minEven, x);
  }
  if (minOdd === Infinity) return true;   // 全偶
  if (minEven === Infinity) return true;  // 全奇
  return minOdd < minEven;                // 最小奇数足够小,可修正所有偶数
};
// @lc code=end

// TEST:
const assert = require('assert');

// 示例
assert.strictEqual(uniformArray([1, 4, 7]), true);
assert.strictEqual(uniformArray([2, 3]), false);
assert.strictEqual(uniformArray([4, 6]), true);

// 全奇/全偶边界
assert.strictEqual(uniformArray([3, 5, 7]), true);
assert.strictEqual(uniformArray([2, 4, 6]), true);
// 单元素
assert.strictEqual(uniformArray([1]), true);
assert.strictEqual(uniformArray([2]), true);
// 最小奇数大于最小偶数 → 无法修正那个更小偶数
assert.strictEqual(uniformArray([3, 2]), false);
// 最小奇数小于最小偶数 → 可行
assert.strictEqual(uniformArray([3, 4, 10]), true);

// ---- 暴力穷举(逐 i 判断能否保持或减去某更小奇数)对拍 ----
function brute(nums) {
  function can(P) {
    for (const x of nums) {
      if ((x & 1) === P) continue; // 保持即可
      // 需要减一个奇数且更小(减数奇偶推导见 Approach)
      let ok = false;
      for (const y of nums) {
        if (y !== x && x - y >= 1 && (y & 1) === 1) { ok = true; break; }
      }
      if (!ok) return false;
    }
    return true;
  }
  return can(0) || can(1);
}
let seed = 20260903;
function rnd() { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; }
for (let t = 0; t < 5000; t++) {
  const n = 1 + Math.floor(rnd() * 7);
  const s = new Set();
  while (s.size < n) s.add(1 + Math.floor(rnd() * 15));
  const arr = [...s];
  assert.strictEqual(uniformArray(arr), brute(arr), 'mismatch ' + JSON.stringify(arr));
}

console.log('All tests passed!');
console.log('ex1 =', uniformArray([1, 4, 7]));
console.log('ex2 =', uniformArray([2, 3]));
console.log('ex3 =', uniformArray([4, 6]));
