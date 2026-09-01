/*
 * @lc app=leetcode id=809 lang=javascript
 *
 * [809] Expressive Words
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(s, words) {
  const rle = (str) => {
    const chars = [], counts = [];
    let i = 0;
    while (i < str.length) {
      const c = str[i];
      let cnt = 0;
      while (i < str.length && str[i] === c) { cnt++; i++; }
      chars.push(c);
      counts.push(cnt);
    }
    return [chars, counts];
  };

  const [sChars, sCounts] = rle(s);
  let result = 0;

  for (const w of words) {
    const [wChars, wCounts] = rle(w);
    if (wChars.length !== sChars.length) continue;
    let valid = true;
    for (let i = 0; i < wChars.length; i++) {
      if (wChars[i] !== sChars[i]) { valid = false; break; }
      if (sCounts[i] < wCounts[i]) { valid = false; break; }
      if (sCounts[i] < 3 && sCounts[i] !== wCounts[i]) { valid = false; break; }
    }
    if (valid) result++;
  }
  return result;
};
// @lc code=end

// TEST:
console.log(expressiveWords("heeellooo", ["hello", "hi", "helo"])); // 1
console.log(expressiveWords("zzzzzyyyyy", ["zzyy","zy","zyy"])); // 3
console.log(expressiveWords("abcd", ["abc"])); // 0
console.log(expressiveWords("aaa", ["a"])); // 1
console.log(expressiveWords("hello", ["hello"])); // 1
