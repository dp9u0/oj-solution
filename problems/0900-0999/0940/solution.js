/*
 * @lc app=leetcode.cn id=940 lang=javascript
 *
 * [940] 不同的子序列 II
 */

// @lc code=start
/**
 * 给定字符串 s, 统计其"不同非空子序列"的个数(去重), 对 1e9+7 取模。
 *
 * 思路(增量维护 end[], O(n)):
 *  - 记 total 为"已处理前缀的所有不同非空子序列"数量; end[c] 为其中以字符 c 结尾的数量。
 *  - 处理新字符 x 时, 把 x 追加到 "每个既有子序列 ∪ 空串" 上, 得到 total+1 个以 x 结尾的新候选。
 *    这些候选之间互不相同; 与既有的重复项恰好是旧的 end[x] 全体(每个 w∈end[x] 都 = w[:-1] + x,
 *    而 w[:-1] 必是既有子序列或空串)。故:
 *        newEndX = total + 1
 *        end[x]  = newEndX
 *        total  += newEndX - end[x]_旧
 *  - 始终满足 total = Σ end[c], 一路取模即可。答案即 total。
 *
 * 复杂度: 时间 O(n), 空间 O(1)。
 *
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function(s) {
  const MOD = 1e9 + 7;
  const end = new Array(26).fill(0); // end[c]: 以字符 c 结尾的不同子序列数
  let total = 0; // 所有不同非空子序列数

  for (let i = 0; i < s.length; i++) {
    const x = s.charCodeAt(i) - 97;
    const oldEnd = end[x];
    const newEndX = total + 1; // 追加 x 后新形成的、以 x 结尾的子序列数
    total = (total + newEndX - oldEnd) % MOD;
    if (total < 0) total += MOD;
    end[x] = newEndX % MOD;
  }
  return total;
};
// @lc code=end

// TEST:
const assert = require('assert');

// 官方示例
assert.strictEqual(distinctSubseqII('abc'), 7);
assert.strictEqual(distinctSubseqII('aba'), 6);
assert.strictEqual(distinctSubseqII('aaa'), 3);

// 其他有代表性用例
assert.strictEqual(distinctSubseqII('a'), 1);
assert.strictEqual(distinctSubseqII('ab'), 3); // a,b,ab
assert.strictEqual(distinctSubseqII('aa'), 2); // a,aa
assert.strictEqual(distinctSubseqII('abcd'), 15); // 2^4-1
// 重复较多的(经暴力核对: a,b,aa,ab,ba,bb,aab,aba,abb,bab,abab = 11)
assert.strictEqual(distinctSubseqII('abab'), 11);

// ---- 与暴力枚举对拍(小写小串) ----
function brute(s) {
  const n = s.length;
  const set = new Set();
  // 枚举子序列掩码(状态压缩, 用于小 n 验证)
  for (let mask = 1; mask < 1 << n; mask++) {
    let t = '';
    for (let i = 0; i < n; i++) if (mask & (1 << i)) t += s[i];
    set.add(t);
  }
  return set.size % (1e9 + 7);
}
for (let t = 0; t < 4000; t++) {
  const n = 1 + Math.floor(Math.random() * 10);
  let s = '';
  const alphabet = 'abc'; // 小字母表让重复更频繁
  for (let i = 0; i < n; i++) s += alphabet[Math.floor(Math.random() * alphabet.length)];
  const got = distinctSubseqII(s);
  const exp = brute(s);
  assert.strictEqual(got, exp, `mismatch on "${s}" got=${got} exp=${exp}`);
}
// 更长字母表的冒烟
for (let t = 0; t < 2000; t++) {
  const n = 1 + Math.floor(Math.random() * 9);
  let s = '';
  for (let i = 0; i < n; i++) s += 'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 26)];
  const got = distinctSubseqII(s);
  const exp = brute(s);
  assert.strictEqual(got, exp, `mismatch on "${s}" got=${got} exp=${exp}`);
}

console.log('All tests passed!');
