/*
 * @lc app=leetcode.cn id=LCR 177 lang=javascript
 *
 * [LCR 177] 撞色搭配
 */

// @lc code=start
/**
 * @param {number[]} sockets
 * @return {number[]}
 */
var sockCollocation = function(sockets) {
  let x = 0;
  for (const v of sockets) x ^= v; // a ^ b (others cancel in pairs)
  const lowbit = x & -x; // a and b differ here
  let a = 0;
  let b = 0;
  for (const v of sockets) {
    if (v & lowbit) a ^= v;
    else b ^= v;
  }
  return [a, b];
};
// @lc code=end

// TEST:
const assert = require('assert');

const sortPair = (arr) => arr.slice().sort((x, y) => x - y);
assert.deepStrictEqual(sortPair(sockCollocation([4, 5, 2, 4, 6, 6])), [2, 5]);
assert.deepStrictEqual(sortPair(sockCollocation([1, 2, 4, 1, 4, 3, 12, 3])), [2, 12]);
// negatives (JS XOR is 32-bit signed, still works)
assert.deepStrictEqual(sortPair(sockCollocation([-1, 1, 2, -1, 1, 2, 3, 5])), [3, 5]);
// just two numbers, no duplicates
assert.deepStrictEqual(sortPair(sockCollocation([7, 9])), [7, 9]);
// larger values mix
assert.deepStrictEqual(sortPair(sockCollocation([10, 20, 30, 40, 10, 20])), [30, 40]);
// repeats beyond a pair (4 eights) cancel in XOR; singles are 2 and 100
assert.deepStrictEqual(sortPair(sockCollocation([8, 8, 2, 8, 8, 100])), [2, 100]);

console.log('All tests passed!');
console.log('sockCollocation([4,5,2,4,6,6]) =', JSON.stringify(sortPair(sockCollocation([4, 5, 2, 4, 6, 6]))));
