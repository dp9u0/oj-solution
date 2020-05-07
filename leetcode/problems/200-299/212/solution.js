/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  let height = board.length;
  let width = height === 0 ? 0 : board[0].length;
  let results = new Set();
  const dfs = (node, i, j) => {
    if (node.word && !results.has(node.word)) { results.add(node.word); }
    if (i < 0 || j < 0 || i >= height || j >= width) { return; }
    const c = board[i][j];
    const n = node[c];
    if (!n) { return; }
    board[i][j] = '!'; // The same letter cell may not be used more than once in a word
    dfs(n, i - 1, j);
    dfs(n, i + 1, j);
    dfs(n, i, j - 1);
    dfs(n, i, j + 1);
    board[i][j] = c;  // restore
  }
  const trie = buildTrie(words);
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      dfs(trie, i, j);
    }
  }
  return Array.from(results.values());
};

/**
 * @param {string[]} words
 */
const buildTrie = (words) => {
  let trie = {};
  for (const word of words) {
    let node = trie;
    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      if (!node[c]) {
        node[c] = {}
      }
      node = node[c];
    }
    node.word = word;
  }
  return trie;
}

// TEST:
let board, words;
board = [
  ['o', 'a', 'a', 'n'],
  ['e', 't', 'a', 'e'],
  ['i', 'h', 'k', 'r'],
  ['i', 'f', 'l', 'v']
]
words = ["oath", "pea", "eat", "rain"]
console.log(findWords(board, words));

board = [
  ['a', 'a'],
]
words = ["aaa"]
console.log(findWords(board, words));