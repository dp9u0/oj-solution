/*
 * @lc app=leetcode.cn id=LCR 170 lang=javascript
 *
 * [LCR 170] 交易逆序对的总数
 */

// @lc code=start
/**
 * @param {number[]} record
 * @return {number}
 */
var reversePairs = function(record) {
  let count = 0;
  const temp = new Array(record.length);

  const mergeSort = (lo, hi) => {
    if (hi - lo <= 1) return;
    const mid = (lo + hi) >> 1;
    mergeSort(lo, mid);
    mergeSort(mid, hi);
    // merge [lo,mid) & [mid,hi)
    let i = lo;
    let j = mid;
    let k = lo;
    while (i < mid && j < hi) {
      if (record[i] <= record[j]) {
        temp[k++] = record[i++];
      } else {
        count += mid - i; // record[j] smaller than all remaining left
        temp[k++] = record[j++];
      }
    }
    while (i < mid) temp[k++] = record[i++];
    while (j < hi) temp[k++] = record[j++];
    for (let t = lo; t < hi; t++) record[t] = temp[t];
  };

  mergeSort(0, record.length);
  return count;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(reversePairs([9, 7, 5, 4, 6]), 8);
assert.strictEqual(reversePairs([7, 5, 6, 4]), 5);
assert.strictEqual(reversePairs([]), 0);
assert.strictEqual(reversePairs([1]), 0);
assert.strictEqual(reversePairs([1, 2, 3]), 0);
assert.strictEqual(reversePairs([3, 2, 1]), 3);
assert.strictEqual(reversePairs([5, 5, 5]), 0);
assert.strictEqual(reversePairs([2, 1, 2, 1]), 3);

console.log('All tests passed!');
console.log('reversePairs([9,7,5,4,6]) =', reversePairs([9, 7, 5, 4, 6]));
