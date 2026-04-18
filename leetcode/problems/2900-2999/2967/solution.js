/*
 * @lc app=leetcode id=2967 lang=javascript
 *
 * [2967] Minimum Cost to Make Array Equalindromic
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;

  const computeCost = (y) => {
    let cost = 0;
    for (const x of nums) cost += Math.abs(x - y);
    return cost;
  };

  const getNearbyPalindromes = (x) => {
    const s = String(x);
    const len = s.length;
    const isOdd = len % 2 === 1;
    const halfIdx = Math.ceil(len / 2);
    const half = Number(s.slice(0, halfIdx));

    const createPal = (h) => {
      const hs = String(h);
      const rev = hs.split('').reverse().join('');
      return Number(isOdd ? hs + rev.slice(1) : hs + rev);
    };

    const cands = new Set();
    for (const h of [half - 1, half, half + 1]) {
      if (h > 0) cands.add(createPal(h));
    }
    if (len > 1) cands.add(Number('9'.repeat(len - 1)));
    cands.add(Number('1' + '0'.repeat(Math.max(0, len - 1)) + '1'));

    return [...cands].filter(p => p > 0 && p < 1e9);
  };

  const medians = n % 2 === 1
    ? [nums[n >> 1]]
    : [nums[(n >> 1) - 1], nums[n >> 1]];

  let ans = Infinity;
  for (const m of medians) {
    for (const p of getNearbyPalindromes(m)) {
      ans = Math.min(ans, computeCost(p));
    }
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(minimumCost([1,2,3,4,5])); // 6
console.log(minimumCost([10,12,13,14,15])); // 11
console.log(minimumCost([22,33,22,33,22])); // 22
console.log(minimumCost([1])); // 0
console.log(minimumCost([100,1000000000])); // 999999900
