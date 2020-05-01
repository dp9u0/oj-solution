/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  const graph = buildGraph(beginWord, endWord, wordList);
  let results = [];
  backtrace(graph, beginWord, endWord, [beginWord], results);
  return results;
};

/**
 * backtrace
 * @param {*} graph the graph
 * @param {*} beginWord current begin word
 * @param {*} endWord endword
 * @param {*} result 当前解
 * @param {*} results 解集合
 */
function backtrace(graph, beginWord, endWord, result, results = []) {
  if (beginWord === endWord) {
    results.push([...result]);
    return;
  }
  for (const u of graph[beginWord]) {
    result.push(u);
    backtrace(graph, u, endWord, result, results);
    result.pop();
  }
}

/**
 * build graph
 */
function buildGraph(beginWord, endWord, wordList) {
  const graph = {};
  graph[beginWord] = new Set();
  for (const node of wordList) {
    graph[node] = new Set();
  }
  const distance = { [beginWord]: 1 };
  const seened = new Set();
  const queue = [beginWord];
  while (queue.length) {
    const w = queue.shift();
    for (const word of wordList) {
      if (isTransformedWord(w, word)) {
        if (distance[w] + 1 <= (distance[word] || Infinity)) {
          distance[word] = distance[w] + 1;
          graph[w].add(word);
        }
        if (!seened.has(word) && !(endWord in distance)) {
          seened.add(word);
          queue.push(word);
        }
      }
    }
  }
  return graph;
}

const isTransformedWord = (w1, w2) => {
  if (w1 === w2) {
    return false;
  }
  let diffCount = 0;
  for (let i = 0; i < w1.length; i++) {
    if (w1[i] !== w2[i]) {
      diffCount += 1;
    }
    if (diffCount === 2) { // 差别两个字母 不互相作为转换词
      return false;
    }
  }
  return true;
}

// TEST:
console.log(findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]))

