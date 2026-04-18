/*
 * @lc app=leetcode id=2135 lang=javascript
 *
 * [2135] Count Words Obtained After Adding a Letter
 */

// @lc code=start
/**
 * @param {string[]} startWords
 * @param {string[]} targetWords
 * @return {number}
 */
var wordCount = function(startWords, targetWords) {
  const toMask = (s) => {
    let m = 0;
    for (let i = 0; i < s.length; i++) m |= 1 << (s.charCodeAt(i) - 97);
    return m;
  };
  const startSet = new Set();
  for (const w of startWords) startSet.add(toMask(w));
  let ans = 0;
  for (const w of targetWords) {
    const mask = toMask(w);
    for (let bit = mask; bit > 0; bit &= bit - 1) {
      const lowest = bit & -bit;
      if (startSet.has(mask ^ lowest)) { ans++; break; }
    }
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(wordCount(['ant', 'act', 'tack'], ['tack', 'act', 'acti'])); // 2
console.log(wordCount(['ab', 'a'], ['abc', 'abcd'])); // 1
console.log(wordCount(['a'], ['ab', 'bc'])); // 1
console.log(wordCount(['abc'], ['abcd'])); // 1
console.log(wordCount(['g'], ['trk'])); // 0
