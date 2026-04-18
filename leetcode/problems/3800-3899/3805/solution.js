/*
 * @lc app=leetcode id=3805 lang=javascript
 *
 * [3805] Count Caesar Cipher Pairs
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var countPairs = function(words) {
  const normalize = (s) => {
    const base = s.charCodeAt(0);
    let key = '';
    for (let i = 1; i < s.length; i++) {
      key += String.fromCharCode(((s.charCodeAt(i) - base) % 26 + 26) % 26 + 97);
    }
    return s.length + ':' + key;
  };
  const map = new Map();
  for (const w of words) {
    const k = normalize(w);
    map.set(k, (map.get(k) || 0) + 1);
  }
  let ans = 0;
  for (const cnt of map.values()) {
    ans += cnt * (cnt - 1) / 2;
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(countPairs(['fusion', 'layout'])); // 1
console.log(countPairs(['ab', 'aa', 'za', 'aa'])); // 2
console.log(countPairs(['a', 'b', 'c'])); // 3
console.log(countPairs(['aa', 'bb', 'cc'])); // 3
console.log(countPairs(['ab', 'cd'])); // 1
