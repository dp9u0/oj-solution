/*
 * @lc app=leetcode.cn id=LCR 138 lang=javascript
 *
 * [LCR 138] 有效数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validNumber = function(s) {
  const str = s.trim();
  if (!str) return false;

  let i = 0;
  const n = str.length;

  // parse signed integer part (returns digits count), advancing i past digits
  const digitsOnly = () => {
    const start = i;
    while (i < n && str[i] >= '0' && str[i] <= '9') i++;
    return i - start;
  };

  // mantissa: [sign] digits [. digits] | [sign] . digits | [sign] digits .
  let sawDigit = false;
  let sawDot = false;
  if (str[i] === '+' || str[i] === '-') i++;
  while (i < n) {
    const ch = str[i];
    if (ch >= '0' && ch <= '9') {
      sawDigit = true;
      i++;
    } else if (ch === '.' && !sawDot) {
      sawDot = true;
      i++;
    } else {
      break;
    }
  }
  // mantissa must have at least one digit and a valid decimal form
  if (!sawDigit) return false;

  // optional exponent
  if (i < n && (str[i] === 'e' || str[i] === 'E')) {
    i++;
    if (i < n && (str[i] === '+' || str[i] === '-')) i++;
    const d = digitsOnly();
    if (d === 0) return false;
  }
  // must consume the whole string
  if (i !== n) return false;

  // reject cases where mantissa was only digits-dot form but no valid combos...
  // covered by sawDigit; dot only allowed at most once (enforced above).
  // Note "4." allowed, ".4" allowed, "." alone -> sawDigit false -> rejected.
  return true;
};
// @lc code=end

// TEST:
const assert = require('assert');

const valid = ['2', '0089', '-0.1', '+3.14', '4.', '-.9', '2e10', '-90E3', '3e+7', '+6e-1', '53.5e93', '-123.456e789', '0', ' 0.1 ', '.', '.5', '5.'];
const invalid = ['abc', '1a', '1e', 'e3', '99e2.5', '--6', '-+3', '95a54e53', 'e', '.', '+.', '.e1', '1e', '..', '1 2', '+-'];

for (const w of valid) if (w === '.') continue; // special-handled below
// actual validity per LeetCode 65: '.' invalid, '.5' valid, '5.' valid, 'e' invalid
for (const w of ['2', '0089', '-0.1', '+3.14', '4.', '-.9', '2e10', '-90E3', '3e+7', '+6e-1', '53.5e93', '-123.456e789', '0', ' 0.1 ', '.5']) assert.strictEqual(validNumber(w), true, 'should be valid: ' + w);
for (const w of ['abc', '1a', '1e', 'e3', '99e2.5', '--6', '-+3', '95a54e53', 'e', '.', '+.', '.e1', '..', '1 2', '+-', '']) assert.strictEqual(validNumber(w), false, 'should be invalid: ' + w);

console.log('All tests passed!');
console.log('validNumber("0") =', validNumber('0'), '| validNumber("e") =', validNumber('e'), '| validNumber(".") =', validNumber('.'));
