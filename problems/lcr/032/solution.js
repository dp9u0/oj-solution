/*
 * @lc app=leetcode.cn id=LCR 032 lang=javascript
 *
 * [LCR 032] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  // 长度不同必然不是变位词
  if (s.length !== t.length) return false;
  // 顺序完全相同则不算变位词(本题定义与主站 242 不同)
  if (s === t) return false;
  const count = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < t.length; i++) {
    const idx = t.charCodeAt(i) - 97;
    count[idx]--;
    // t 中某字符出现次数超过 s,提前返回 false
    if (count[idx] < 0) return false;
  }
  return true;
};
// @lc code=end

// TEST:
const test = (s, t, expected) => {
  const res = isAnagram(s, t);
  console.log(`${s} | ${t} => ${res} (expected ${expected}) ${res === expected ? 'PASS' : 'FAIL'}`);
};

test("anagram", "nagaram", true);
test("rat", "car", false);
test("a", "a", false);
test("ab", "ab", false);
test("ab", "ba", true);
test("listen", "silent", true);
test("hello", "ollhe", true);
test("abc", "abcd", false);
test("aaa", "aab", false);
test("", "", false);
