/*
 * @lc app=leetcode id=2976 lang=javascript
 *
 * [2976] Minimum Cost to Convert String I
 */

// @lc code=start
/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(source, target, original, changed, cost) {
  const INF = Infinity;
  const dist = Array.from({ length: 26 }, () => new Array(26).fill(INF));
  for (let i = 0; i < 26; i++) dist[i][i] = 0;
  for (let i = 0; i < original.length; i++) {
    const u = original[i].charCodeAt(0) - 97;
    const v = changed[i].charCodeAt(0) - 97;
    dist[u][v] = Math.min(dist[u][v], cost[i]);
  }
  for (let k = 0; k < 26; k++) {
    for (let i = 0; i < 26; i++) {
      if (dist[i][k] === INF) continue;
      for (let j = 0; j < 26; j++) {
        if (dist[k][j] === INF) continue;
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }
  let res = 0;
  for (let i = 0; i < source.length; i++) {
    if (source[i] === target[i]) continue;
    const u = source.charCodeAt(i) - 97;
    const v = target.charCodeAt(i) - 97;
    if (dist[u][v] === INF) return -1;
    res += dist[u][v];
  }
  return res;
};
// @lc code=end

// TEST:
console.log(minimumCost('abcd', 'acbe', ['a','b','c','c','e','d'], ['b','c','b','e','b','e'], [2,5,5,1,2,20])); // 28
console.log(minimumCost('aaaa', 'bbbb', ['a','c'], ['c','b'], [1,2])); // 12
console.log(minimumCost('abcd', 'abce', ['a'], ['e'], [10000])); // -1
console.log(minimumCost('a', 'a', ['a'], ['b'], [1])); // 0
console.log(minimumCost('abc', 'def', ['a','b','c','d','e'], ['b','c','d','e','f'], [1,1,1,1,1])); // 9
