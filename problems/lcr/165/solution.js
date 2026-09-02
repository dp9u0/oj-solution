/*
 * @lc app=leetcode.cn id=LCR 165 lang=javascript
 *
 * [LCR 165] 解密数字
 */

// @lc code=start
/**
 * @param {number} ciphertext
 * @return {number}
 */
var crackNumber = function(ciphertext) {
  const s = String(ciphertext);
  let twoBack = 1; // dp[i-2]
  let oneBack = 1; // dp[i-1]
  for (let i = 1; i < s.length; i++) {
    let cur = oneBack; // take s[i] as single digit
    const two = Number(s.slice(i - 1, i + 1));
    if (two >= 10 && two <= 25) cur += twoBack; // take s[i-1..i] as a 2-digit code
    twoBack = oneBack;
    oneBack = cur;
  }
  return oneBack;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(crackNumber(216612), 6);
assert.strictEqual(crackNumber(0), 1);
assert.strictEqual(crackNumber(1), 1);
// 26 not valid as a two-digit code in this variant (only up to 25)
assert.strictEqual(crackNumber(26), 1); // only "bg"-> '2','6'? actually 2->b? mapping 0..25=a..z; '2'->'c', '6'->'g', '26' invalid
assert.strictEqual(crackNumber(101), 2); // "10","1" and "1","0","1"
assert.strictEqual(crackNumber(110), 3); // 1-1-0, 11-0, 1-10
// classic: "111" -> 3 decodings (1-1-1, 11-1, 1-11)
assert.strictEqual(crackNumber(111), 3);
assert.strictEqual(crackNumber(506), 1);
assert.strictEqual(crackNumber(123), 3);

console.log('All tests passed!');
console.log('crackNumber(216612) =', crackNumber(216612));
