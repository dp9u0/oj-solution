/*
 * @lc app=leetcode id=4035 lang=javascript
 *
 * [4035] Maximum Valid Split Positions I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxValidSplits = function (nums) {
  let ans = countSplits(nums);
  const n = nums.length;
  // removing one element from a length-2 array leaves length 1 (score 0)
  if (n >= 3) {
    for (let j = 0; j < n; j++) {
      const arr = nums.slice(0, j).concat(nums.slice(j + 1));
      ans = Math.max(ans, countSplits(arr));
    }
  }
  return ans;
};

/**
 * Count valid split positions of arr: pre(i) == suf(i+1) via prefix/suffix gcd.
 * @param {number[]} arr
 * @return {number}
 */
function countSplits(arr) {
  const m = arr.length;
  if (m < 2) return 0;
  // suffix gcd: suf[i] = gcd(arr[i..m-1]); gcd(0, x) = x makes 0 the identity
  const suf = new Array(m);
  let g = 0;
  for (let i = m - 1; i >= 0; i--) {
    g = gcd(g, arr[i]);
    suf[i] = g;
  }
  let count = 0;
  let pre = 0;
  for (let i = 0; i < m - 1; i++) {
    pre = gcd(pre, arr[i]);
    if (pre === suf[i + 1]) count++;
  }
  return count;
}

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function gcd(a, b) {
  while (b !== 0) {
    const t = a % b;
    a = b;
    b = t;
  }
  return a;
}
// @lc code=end

// TEST:
console.log(maxValidSplits([10, 30, 15, 10])); // 2 (remove 15 -> [10,30,10])
console.log(maxValidSplits([2, 10, 14])); // 1 (no removal, split 0 valid)
console.log(maxValidSplits([2, 4])); // 0 (2 != 4, removal leaves length 1)
console.log(maxValidSplits([6, 6, 6])); // 2 (all splits valid)
console.log(maxValidSplits([1, 1, 1, 1])); // 3 (all gcds are 1)
console.log(maxValidSplits([4, 6, 2])); // 1 (no removal, split 1: gcd(4,6)=2 == gcd(2)=2)
console.log(maxValidSplits([1000000000, 1000000000])); // 1 (max value, equal halves)
console.log(maxValidSplits([2, 3])); // 0 (coprime pair)
