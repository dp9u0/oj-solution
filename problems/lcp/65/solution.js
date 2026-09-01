/*
 * @lc app=leetcode.cn id=LCP 65 lang=javascript
 *
 * [LCP 65] 舒适的湿度
 */

// @lc code=start
/**
 * @param {number[]} operate
 * @return {number}
 */
var unSuitability = function(operate) {
  const n = operate.length;
  const sum = operate.reduce((a, b) => a + b, 0);

  // Check whether some sign assignment keeps every prefix sum (incl. S[0]=0)
  // inside a window of width X. Model prefix sums as relative positions in
  // [0, X] (window contains the start 0, so the relative start can be anywhere
  // in [0, X]). Reachable relative positions encoded as a BigInt bitset.
  const check = (X) => {
    const mask = (1n << BigInt(X + 1)) - 1n; // low X+1 bits set
    let bits = mask; // every relative position 0..X reachable initially
    for (const v of operate) {
      const bv = BigInt(v);
      bits = ((bits << bv) | (bits >> bv)) & mask;
      if (bits === 0n) return false;
    }
    return bits !== 0n;
  };

  // Overall discomfort = max segment abs sum = max(S) - min(S).
  // Binary search the minimal window width X.
  let lo = 0, hi = sum;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (check(mid)) hi = mid;
    else lo = mid + 1;
  }
  return lo;
};
// @lc code=end

// TEST:
// Example 1
console.log(unSuitability([5, 3, 7]) === 8);
// Example 2
console.log(unSuitability([20, 10]) === 20);
// Single element
console.log(unSuitability([7]) === 7);
// Two equal elements: [5, -5] gives S = [0,5,0], range 5
console.log(unSuitability([5, 5]) === 5);
// [3,1,1,1]: +3 then -1s => S=[0,3,2,1,0], range 3
console.log(unSuitability([3, 1, 1, 1]) === 3);
// All ones: alternate signs keep S in [0,1], range 1
console.log(unSuitability([1, 1, 1, 1]) === 1);
