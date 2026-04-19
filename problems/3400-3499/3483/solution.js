/*
 * @lc app=leetcode id=3483 lang=javascript
 *
 * [3483] Unique 3-Digit Even Numbers
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function(digits) {
  const freq = new Array(10).fill(0);
  for (const d of digits) freq[d]++;
  let count = 0;
  for (let num = 100; num <= 998; num += 2) {
    const a = Math.floor(num / 100);
    const b = Math.floor((num % 100) / 10);
    const c = num % 10;
    const need = new Array(10).fill(0);
    need[a]++; need[b]++; need[c]++;
    let ok = true;
    for (let i = 0; i < 10; i++) {
      if (need[i] > freq[i]) { ok = false; break; }
    }
    if (ok) count++;
  }
  return count;
};
// @lc code=end

// TEST:
console.log(totalNumbers([1,2,3,4])); // 12
console.log(totalNumbers([0,2,2])); // 2
console.log(totalNumbers([6,6,6])); // 1
console.log(totalNumbers([1,3,5])); // 0
