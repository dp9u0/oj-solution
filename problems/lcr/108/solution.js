/*
 * @lc app=leetcode.cn id=LCR 108 lang=javascript
 *
 * [LCR 108] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  const L = beginWord.length;
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  // pattern -> list of words
  const patternMap = new Map();
  const addPattern = (word) => {
    const chars = word.split('');
    for (let i = 0; i < L; i++) {
      const orig = chars[i];
      chars[i] = '*';
      const key = chars.join('');
      if (!patternMap.has(key)) patternMap.set(key, []);
      patternMap.get(key).push(word);
      chars[i] = orig;
    }
  };
  for (const w of wordList) addPattern(w);

  // BFS from beginWord (even if not in wordList)
  const queue = [beginWord];
  let head = 0;
  const visited = new Set();
  visited.add(beginWord);
  let level = 1;
  while (head < queue.length) {
    const size = queue.length - head;
    for (let k = 0; k < size; k++) {
      const word = queue[head++];
      if (word === endWord) return level;
      const chars = word.split('');
      for (let i = 0; i < L; i++) {
        const orig = chars[i];
        chars[i] = '*';
        const key = chars.join('');
        const neighbors = patternMap.get(key) || [];
        for (const nb of neighbors) {
          if (!visited.has(nb)) {
            visited.add(nb);
            queue.push(nb);
          }
        }
        chars[i] = orig;
      }
    }
    level++;
  }
  return 0;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']), 5);
assert.strictEqual(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']), 0);
// endWord directly reachable
assert.strictEqual(ladderLength('a', 'c', ['c']), 2);
// beginWord == one hop
assert.strictEqual(ladderLength('hit', 'hot', ['hot', 'dot']), 2);
// no path
assert.strictEqual(ladderLength('aa', 'bb', ['cc']), 0);
// longer chain
assert.strictEqual(ladderLength('dog', 'lot', ['dot', 'hot', 'lot', 'log', 'cog', 'dog']), 3); // dog->dot->lot? or dog->log->lot = 3

console.log('All tests passed!');
console.log('ladderLength("hit","cog",[...]) =', ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']));
