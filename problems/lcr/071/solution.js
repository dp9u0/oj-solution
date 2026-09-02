/*
 * @lc app=leetcode.cn id=LCR 071 lang=javascript
 *
 * [LCR 071] 按权重随机选择
 */

// @lc code=start
/**
 * @param {number[]} w
 */
var Solution = function(w) {
  this.pref = [];
  let sum = 0;
  for (const weight of w) {
    sum += weight;
    this.pref.push(sum);
  }
  this.total = sum;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
  const x = Math.random() * this.total;
  let lo = 0;
  let hi = this.pref.length; // first prefix > x
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (this.pref[mid] > x) hi = mid;
    else lo = mid + 1;
  }
  return lo;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
// @lc code=end

// TEST:
const assert = require('assert');

// deterministic single-element
const s1 = new Solution([1]);
for (let i = 0; i < 10; i++) assert.strictEqual(s1.pickIndex(), 0);

// statistical: [1,3] -> index1 ~75%
const s = new Solution([1, 3]);
let count1 = 0;
const N = 20000;
for (let i = 0; i < N; i++) if (s.pickIndex() === 1) count1++;
const ratio = count1 / N;
assert.ok(ratio > 0.70 && ratio < 0.80, 'ratio was ' + ratio);

// [1,1,1] uniform-ish
const s2 = new Solution([1, 1, 1]);
let c0 = 0, c1 = 0, c2 = 0;
for (let i = 0; i < 9000; i++) {
  const r = s2.pickIndex();
  if (r === 0) c0++; else if (r === 1) c1++; else c2++;
}
assert.ok(c0 > 2000 && c0 < 4000 && c1 > 2000 && c1 < 4000 && c2 > 2000 && c2 < 4000);

console.log('All tests passed!');