/*
 * @lc app=leetcode id=3850 lang=javascript
 *
 * [3850] Count Sequences to K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSequences = function(nums, k) {
  let t2 = 0, t3 = 0, t5 = 0, temp = k;
  while (temp % 2 === 0) { t2++; temp /= 2; }
  while (temp % 3 === 0) { t3++; temp /= 3; }
  while (temp % 5 === 0) { t5++; temp /= 5; }
  if (temp !== 1) return 0;

  const pe = [[0,0,0],[1,0,0],[0,1,0],[2,0,0],[0,0,1],[1,1,0]];

  let dp = new Map();
  dp.set([0, 0, 0].join(','), 1);

  for (const num of nums) {
    const [d2, d3, d5] = pe[num - 1];
    const next = new Map();
    for (const [key, count] of dp) {
      const p = key.split(',');
      const e2 = +p[0], e3 = +p[1], e5 = +p[2];
      // Leave
      const k0 = key;
      next.set(k0, (next.get(k0) || 0) + count);
      // Multiply
      const k1 = `${e2+d2},${e3+d3},${e5+d5}`;
      next.set(k1, (next.get(k1) || 0) + count);
      // Divide
      const k2 = `${e2-d2},${e3-d3},${e5-d5}`;
      next.set(k2, (next.get(k2) || 0) + count);
    }
    dp = next;
  }

  return dp.get(`${t2},${t3},${t5}`) || 0;
};
// @lc code=end

// TEST:
console.log(countSequences([2,3,2], 6) === 2);
console.log(countSequences([4,6,3], 2) === 2);
console.log(countSequences([1,5], 1) === 3);
console.log(countSequences([2], 2) === 1);
console.log(countSequences([2,2], 1) === 3);
