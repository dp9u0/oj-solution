/*
 * @lc app=leetcode.cn id=LCP 36 lang=javascript
 *
 * [LCP 36] 最多牌组数
 */

// @lc code=start
/**
 * @param {number[]} tiles
 * @return {number}
 */
var maxGroupNumber = function(tiles) {
  // count frequencies
  const cnt = new Map();
  for (const t of tiles) cnt.set(t, (cnt.get(t) || 0) + 1);

  const values = [...cnt.keys()].sort((a, b) => a - b);
  const NEG = -Infinity;

  let total = 0;
  let i = 0;
  while (i < values.length) {
    // gather a maximal contiguous run of values
    const run = [values[i]];
    let j = i;
    while (j + 1 < values.length && values[j + 1] === values[j] + 1) {
      run.push(values[j + 1]);
      j++;
    }
    i = j + 1;
    // counts for the run, plus two zero-count sentinels
    const c = run.map(v => cnt.get(v)).concat([0, 0]);

    // dp over (sPrev1, sPrev2) each in {0,1,2}
    let dp = Array.from({ length: 3 }, () => new Array(3).fill(NEG));
    dp[0][0] = 0; // (s[-1], s[-2]) initially 0
    for (const count of c) {
      const ndp = Array.from({ length: 3 }, () => new Array(3).fill(NEG));
      for (let s1 = 0; s1 <= 2; s1++) {
        for (let s2 = 0; s2 <= 2; s2++) {
          const cur = dp[s1][s2];
          if (cur === NEG) continue;
          for (let s0 = 0; s0 <= 2; s0++) {
            const used = s0 + s1 + s2; // straights consuming this value
            if (used > count) continue;
            const triples = Math.floor((count - used) / 3);
            const gain = cur + s0 + triples;
            if (gain > ndp[s0][s1]) ndp[s0][s1] = gain;
          }
        }
      }
      dp = ndp;
    }
    // after sentinels, no pending straights: state must be (0,0)
    total += dp[0][0];
  }
  return total;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(maxGroupNumber([2, 2, 2, 3, 4]), 1);
assert.strictEqual(maxGroupNumber([2, 2, 2, 3, 4, 1, 3]), 2);
// all triples
assert.strictEqual(maxGroupNumber([5, 5, 5, 5, 5, 5]), 2);
assert.strictEqual(maxGroupNumber([1, 2, 3]), 1);
assert.strictEqual(maxGroupNumber([1, 2, 3, 4, 5, 6]), 2);
// leftover < 3
assert.strictEqual(maxGroupNumber([1, 1, 2, 2]), 0);
assert.strictEqual(maxGroupNumber([1, 2, 3, 7, 8, 9]), 2);
// example single long run with mixed
assert.strictEqual(maxGroupNumber([1, 1, 1, 2, 2, 2, 3, 3, 3]), 3);

console.log('All tests passed!');
console.log('maxGroupNumber([2,2,2,3,4]) =', maxGroupNumber([2, 2, 2, 3, 4]));
