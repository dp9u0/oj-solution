/*
 * @lc app=leetcode.cn id=LCR 019 lang=javascript
 *
 * [LCR 019] 验证回文串 II
 */

// @lc code=start
/**
 * 判断 s[l..r] 是否为回文
 * @param {string} s
 * @param {number} l
 * @param {number} r
 * @return {boolean}
 */
const isPalindrome = (s, l, r) => {
  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }
  return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) {
      // 遇到不匹配，尝试跳过左边或右边一个字符
      return isPalindrome(s, l + 1, r) || isPalindrome(s, l, r - 1);
    }
    l++;
    r--;
  }
  return true;
};
// @lc code=end

// TEST:
function assert(actual, expected) {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

assert(validPalindrome('aba'), true); // 本来就是回文
assert(validPalindrome('abca'), true); // 删除 'c' 或 'b'
assert(validPalindrome('abc'), false); // 需要删除超过一个字符
assert(validPalindrome('deeee'), true); // 删除 'd'
assert(validPalindrome('abccba'), true); // 本来就是回文
assert(validPalindrome('abcdecba'), true); // 删除 'd' 后为 'abcecba'
assert(validPalindrome('abcddcbe'), false); // 需删除多于一个字符
assert(validPalindrome('a'), true); // 单字符
console.log('All tests passed!');
