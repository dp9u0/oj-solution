/*
 * @lc app=leetcode id=3926 lang=javascript
 *
 * [3926] Count Occurrences of Words
 */

// @lc code=start
/**
 * @param {string[]} chunks
 * @param {string[]} queries
 * @return {number[]}
 */
var countWordOccurrences = function(chunks, queries) {
  const s = chunks.join('');
  const n = s.length;
  const isLetter = (c) => c >= 'a' && c <= 'z';
  const counts = new Map();
  const buf = [];
  const flush = () => {
    if (buf.length) {
      const w = buf.join('');
      counts.set(w, (counts.get(w) || 0) + 1);
      buf.length = 0;
    }
  };
  for (let i = 0; i < n; i++) {
    const c = s[i];
    if (isLetter(c) || (c === '-' && i > 0 && i < n - 1 && isLetter(s[i - 1]) && isLetter(s[i + 1]))) {
      buf.push(c);
    } else {
      flush();
    }
  }
  flush();
  return queries.map((q) => counts.get(q) || 0);
};
// @lc code-end

// TEST:
console.log(JSON.stringify(countWordOccurrences(['hello wor', 'ld hello'], ['hello', 'world', 'wor'])) === JSON.stringify([2, 1, 0]));
console.log(JSON.stringify(countWordOccurrences(['a-b a--b ', 'a-', 'b'], ['a-b', 'a', 'b'])) === JSON.stringify([2, 1, 1]));
console.log(JSON.stringify(countWordOccurrences(['-cat dog- mouse'], ['cat', 'dog', 'mouse', 'cat-dog'])) === JSON.stringify([1, 1, 1, 0]));
console.log(JSON.stringify(countWordOccurrences(['ab'], ['ab', 'a', 'b'])) === JSON.stringify([1, 0, 0]));
console.log(JSON.stringify(countWordOccurrences(['a', '-', 'b'], ['a-b', 'a', 'b'])) === JSON.stringify([0, 1, 1]));
console.log(JSON.stringify(countWordOccurrences(['a-b-c'], ['a-b-c', 'a-b', 'b-c'])) === JSON.stringify([1, 0, 0]));
console.log(JSON.stringify(countWordOccurrences(['-'], ['-', ''])) === JSON.stringify([0, 0]));
