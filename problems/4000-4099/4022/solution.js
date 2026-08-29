/*
 * @lc app=leetcode id=4022 lang=javascript
 *
 * [4022] K-th Digit in Infinite String
 */

// @lc code=start
/**
 * @param {number} k
 * @return {number}
 */
var kthDigit = function(k) {
  if (k <= 9) return k;
  let rem = k - 9;
  let L = 2;
  while (rem > 90 * L * Math.pow(10, L - 2)) {
    rem -= 90 * L * Math.pow(10, L - 2);
    L++;
  }
  const perBlock = 10 * L;
  const blockIndex = Math.floor((rem - 1) / perBlock);
  const offset = (rem - 1) % perBlock;
  const b = Math.pow(10, L - 2) + blockIndex;
  const m = Math.floor(offset / L);
  const digitPos = offset % L;
  const number = b % 2 === 0 ? 10 * b + m : 10 * b + 9 - m;
  return Number(String(number)[digitPos]);
};
// @lc code=end

// TEST:
console.log(kthDigit(4) === 4);
console.log(kthDigit(15) === 7);
console.log(kthDigit(11) === 9);
console.log(kthDigit(9) === 9);
console.log(kthDigit(10) === 1);
console.log(kthDigit(12) === 1);
console.log(kthDigit(21) === 4);

// cross-check against direct simulation for small k
let sim = '';
let b = 0;
while (sim.length < 5000) {
  if (b === 0) sim += '123456789';
  else if (b % 2 === 0) sim += String(10 * b) + String(10 * b + 1) + String(10 * b + 2) + String(10 * b + 3) + String(10 * b + 4) + String(10 * b + 5) + String(10 * b + 6) + String(10 * b + 7) + String(10 * b + 8) + String(10 * b + 9);
  else sim += String(10 * b + 9) + String(10 * b + 8) + String(10 * b + 7) + String(10 * b + 6) + String(10 * b + 5) + String(10 * b + 4) + String(10 * b + 3) + String(10 * b + 2) + String(10 * b + 1) + String(10 * b);
  b++;
}
let ok = true;
for (let k = 1; k <= 5000; k++) {
  if (kthDigit(k) !== Number(sim[k - 1])) { ok = false; console.log('MISMATCH at k=' + k); break; }
}
console.log(ok);
