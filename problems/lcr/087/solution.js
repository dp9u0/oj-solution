/*
 * @lc app=leetcode.cn id=LCR 087 lang=javascript
 *
 * [LCR 087] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const n = s.length;
  if (n < 4 || n > 12) return [];
  const res = [];
  const parts = [];

  const isValid = (seg) => {
    if (seg.length > 1 && seg[0] === '0') return false; // leading zero
    const v = Number(seg);
    return v >= 0 && v <= 255;
  };

  const dfs = (start) => {
    if (parts.length === 4) {
      if (start === n) res.push(parts.join('.'));
      return;
    }
    if (parts.length === 3) {
      // last part takes the whole remainder
      const seg = s.slice(start);
      if (seg.length >= 1 && seg.length <= 3 && isValid(seg)) {
        parts.push(seg);
        if (start + seg.length === n) res.push(parts.join('.'));
        parts.pop();
      }
      return;
    }
    for (let len = 1; len <= 3 && start + len <= n; len++) {
      const seg = s.slice(start, start + len);
      if (!isValid(seg)) continue;
      parts.push(seg);
      dfs(start + len);
      parts.pop();
    }
  };
  dfs(0);
  return res;
};
// @lc code=end

// TEST:
const assert = require('assert');

const sorted = (a) => a.slice().sort();
assert.deepStrictEqual(sorted(restoreIpAddresses('25525511135')), sorted(['255.255.11.135', '255.255.111.35']));
assert.deepStrictEqual(sorted(restoreIpAddresses('0000')), sorted(['0.0.0.0']));
assert.deepStrictEqual(sorted(restoreIpAddresses('1111')), sorted(['1.1.1.1']));
assert.deepStrictEqual(sorted(restoreIpAddresses('010010')), sorted(['0.10.0.10', '0.100.1.0']));
assert.deepStrictEqual(sorted(restoreIpAddresses('10203040')), sorted(['10.20.30.40', '102.0.30.40', '10.203.0.40']));
assert.deepStrictEqual(restoreIpAddresses(''), []);
assert.deepStrictEqual(restoreIpAddresses('000'), []);
assert.deepStrictEqual(restoreIpAddresses('123456789012345'), []);

console.log('All tests passed!');
console.log('restoreIpAddresses("25525511135") =', JSON.stringify(restoreIpAddresses('25525511135')));
