/*
 * @lc app=leetcode id=648 lang=javascript
 *
 * [648] Replace Words
 */

// @lc code=start
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
  const trie = {};
  for (const root of dictionary) {
    let node = trie;
    for (const ch of root) {
      if (!node[ch]) node[ch] = {};
      node = node[ch];
    }
    node['#'] = true;
  }

  const findRoot = (word) => {
    let node = trie;
    for (let i = 0; i < word.length; i++) {
      if (node['#']) return word.slice(0, i);
      if (!node[word[i]]) return word;
      node = node[word[i]];
    }
    return node['#'] ? word : word;
  };

  return sentence.split(' ').map(findRoot).join(' ');
};
// @lc code=end

// TEST:
console.log(replaceWords(['cat','bat','rat'], 'the cattle was rattled by the battery')); // 'the cat was rat by the bat'
console.log(replaceWords(['a','b','c'], 'aadsfasf absbs bbab cadsfafs')); // 'a a b c'
