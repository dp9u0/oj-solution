/*
 * @lc app=leetcode id=2663 lang=javascript
 *
 * [2663] Lexicographically Smallest Beautiful String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var smallestBeautifulString = function (s, k) {
  const n = s.length;
  const chars = s.split('');

  // 在位置 i 寻找严格大于 chars[i]、且不与前两个字符冲突的最小字符
  const findLarger = (i) => {
    for (let c = chars[i].charCodeAt(0) + 1; c < 97 + k; c++) {
      const ch = String.fromCharCode(c);
      if (i >= 1 && chars[i - 1] === ch) continue;
      if (i >= 2 && chars[i - 2] === ch) continue;
      return ch;
    }
    return null;
  };

  for (let i = n - 1; i >= 0; i--) {
    const ch = findLarger(i);
    if (ch === null) continue;

    chars[i] = ch;
    // 后缀贪心：每个位置取不等于前两个字符的最小字符
    for (let j = i + 1; j < n; j++) {
      for (let c = 97; c < 97 + k; c++) {
        const cc = String.fromCharCode(c);
        if (chars[j - 1] === cc) continue;
        if (j >= 2 && chars[j - 2] === cc) continue;
        chars[j] = cc;
        break;
      }
    }
    return chars.join('');
  }
  return '';
};
// @lc code=end

// TEST:
console.log(smallestBeautifulString('abcz', 26)); // "abda"
console.log(smallestBeautifulString('dc', 4)); // ""
console.log(smallestBeautifulString('abc', 4)); // "abd" -> 检查: 'd' != 'b','a'，合法
console.log(smallestBeautifulString('ab', 4)); // "ac"
console.log(smallestBeautifulString('abcd', 4)); // i=3: 'd' 无法增大; i=2: 'c'->'d' 与 s[3] 无关但需 != 'b','a' -> 'd' 合法, 再填 j=3: 最小 != 'd','b' -> 'a' => "abda"
console.log(smallestBeautifulString('a', 4)); // "b"
console.log(smallestBeautifulString('dcbd', 4)); // 无解，返回 ""
