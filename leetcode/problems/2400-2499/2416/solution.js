/*
 * @lc app=leetcode id=2416 lang=javascript
 *
 * [2416] Sum of Prefix Scores of Strings
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number[]}
 */
var sumPrefixScores = function(words) {
  // Build Trie
  const root = {};

  for (const word of words) {
    let node = root;
    for (const ch of word) {
      const c = ch.charCodeAt(0) - 97;
      if (!node[c]) node[c] = { count: 0 };
      node = node[c];
      node.count = (node.count || 0) + 1;
    }
  }

  const result = [];
  for (const word of words) {
    let sum = 0;
    let node = root;
    for (const ch of word) {
      const c = ch.charCodeAt(0) - 97;
      node = node[c];
      sum += node.count;
    }
    result.push(sum);
  }

  return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(sumPrefixScores(['abc','ab','bc','b'])) === JSON.stringify([5,4,3,2]));
console.log(JSON.stringify(sumPrefixScores(['abcd'])) === JSON.stringify([4]));
console.log(JSON.stringify(sumPrefixScores(['a','a','a'])) === JSON.stringify([3,3,3]));
console.log(JSON.stringify(sumPrefixScores(['ab','bc'])) === JSON.stringify([2,2]));
console.log(JSON.stringify(sumPrefixScores(['x'])) === JSON.stringify([1]));
