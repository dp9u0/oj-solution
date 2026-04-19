/*
 * @lc app=leetcode id=1311 lang=javascript
 *
 * [1311] Get Watched Videos by Your Friends
 */

// @lc code=start
/**
 * @param {string[][]} watchedVideos
 * @param {number[][]} friends
 * @param {number} id
 * @param {number} level
 * @return {string[]}
 */
var watchedVideosByFriends = function(watchedVideos, friends, id, level) {
  const n = friends.length;
  const visited = new Array(n).fill(false);
  const queue = [id];
  visited[id] = true;
  let depth = 0;

  while (queue.length && depth < level) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      for (const f of friends[node]) {
        if (!visited[f]) {
          visited[f] = true;
          queue.push(f);
        }
      }
    }
    depth++;
  }

  // Count video frequencies at target level
  const freq = {};
  for (const person of queue) {
    for (const v of watchedVideos[person]) {
      freq[v] = (freq[v] || 0) + 1;
    }
  }

  // Sort by frequency (ascending), then alphabetically
  return Object.entries(freq)
    .sort((a, b) => a[1] !== b[1] ? a[1] - b[1] : a[0].localeCompare(b[0]))
    .map(([video]) => video);
};
// @lc code=end

// TEST:
console.log(watchedVideosByFriends([["A","B"],["C"],["B","C"],["D"]], [[1,2],[0,3],[0,3],[1,2]], 0, 1)); // ["B","C"]
console.log(watchedVideosByFriends([["A","B"],["C"],["B","C"],["D"]], [[1,2],[0,3],[0,3],[1,2]], 0, 2)); // ["D"]
