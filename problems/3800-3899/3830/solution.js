/*
 * @lc app=leetcode id=3830 lang=javascript
 *
 * [3830] Longest Alternating Subarray After Removing At Most One Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestAlternating = function(nums) {
  const n = nums.length;
  const sign = (a, b) => (a < b ? 1 : a > b ? -1 : 0);
  const aLen = Array(n).fill(1);
  const aSign = Array(n).fill(0);
  const bLen = Array(n).fill(1);
  const bSign = Array(n).fill(0);
  let ans = 1;
  for (let i = 1; i < n; i++) {
    const s = sign(nums[i - 1], nums[i]);
    // A
    if (s === 0) {
      aLen[i] = 1;
      aSign[i] = 0;
    } else if (aLen[i - 1] === 1 || aSign[i - 1] === -s) {
      aLen[i] = aLen[i - 1] + 1;
      aSign[i] = s;
    } else {
      aLen[i] = 2;
      aSign[i] = s;
    }
    // B
    let bl = 1;
    let bs = 0;
    if (s !== 0) {
      if (bLen[i - 1] === 1 || bSign[i - 1] === -s) {
        bl = bLen[i - 1] + 1;
        bs = s;
      } else {
        bl = 2;
        bs = s;
      }
      if (i >= 2) {
        const s2 = sign(nums[i - 2], nums[i]);
        if (s2 !== 0 && (aLen[i - 2] === 1 || aSign[i - 2] === -s2) && aLen[i - 2] + 1 > bl) {
          bl = aLen[i - 2] + 1;
          bs = s2;
        }
      }
    }
    bLen[i] = bl;
    bSign[i] = bs;
    ans = Math.max(ans, aLen[i], bLen[i]);
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(longestAlternating([2, 1, 3, 2]) === 4);
console.log(longestAlternating([3, 2, 1, 2, 3, 2, 1]) === 4);
console.log(longestAlternating([100000, 100000]) === 1);
console.log(longestAlternating([1, 2, 2, 1]) === 3);
console.log(longestAlternating([1, 2, 3]) === 2);
console.log(longestAlternating([1, 2, 1, 2, 1]) === 5);
console.log(longestAlternating([5, 5, 5, 5]) === 1);

// brute cross-check
function bruteLongest(arr) {
  const longestOf = (a) => {
    let best = 1;
    let cur = 1;
    let sg = 0;
    for (let i = 1; i < a.length; i++) {
      const s = a[i - 1] < a[i] ? 1 : a[i - 1] > a[i] ? -1 : 0;
      if (s !== 0 && (cur === 1 || sg === -s)) { cur++; sg = s; }
      else if (s !== 0) { cur = 2; sg = s; }
      else { cur = 1; sg = 0; }
      best = Math.max(best, cur);
    }
    return best;
  };
  let best = longestOf(arr);
  for (let j = 0; j < arr.length; j++) {
    const b = arr.slice(0, j).concat(arr.slice(j + 1));
    best = Math.max(best, longestOf(b));
  }
  return best;
}
let seed = 5150;
const rnd = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) % 5;
let ok = true;
for (let t = 0; t < 500; t++) {
  const arr = Array.from({ length: 2 + t % 10 }, rnd);
  const a = longestAlternating(arr);
  const b = bruteLongest(arr);
  if (a !== b) { ok = false; console.log('MISMATCH', JSON.stringify(arr), a, b); break; }
}
console.log(ok);
