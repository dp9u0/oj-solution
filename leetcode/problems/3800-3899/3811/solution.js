/*
 * @lc app=leetcode id=3811 lang=javascript
 *
 * [3811] Number of Alternating XOR Partitions
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target1
 * @param {number} target2
 * @return {number}
 */
var alternatingXOR = function(nums, target1, target2) {
  const MOD = 1e9 + 7;
  const n = nums.length;

  const s1 = new Map();
  const s2 = new Map();

  const getOrZero = (m, k) => m.get(k) || 0;

  s1.set(0, 1);
  s2.set(0, 0);

  let pxor = 0;
  let e1 = 0, e2 = 0;
  for (let j = 0; j < n; j++) {
    pxor ^= nums[j];

    e2 = getOrZero(s1, pxor ^ target1);
    e1 = getOrZero(s2, pxor ^ target2);

    s1.set(pxor, (getOrZero(s1, pxor) + e1) % MOD);
    s2.set(pxor, (getOrZero(s2, pxor) + e2) % MOD);
  }

  return (e1 + e2) % MOD;
};
// @lc code=end

// TEST:
console.log(alternatingXOR([2,3,1,4], 1, 5)); // 1
console.log(alternatingXOR([1,0,0], 1, 0)); // 3
console.log(alternatingXOR([7], 1, 7)); // 0
console.log(alternatingXOR([5], 5, 3)); // 1
console.log(alternatingXOR([1,1], 0, 1)); // 1
