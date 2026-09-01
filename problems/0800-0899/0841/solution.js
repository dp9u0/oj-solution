/*
 * @lc app=leetcode id=841 lang=javascript
 *
 * [841] Keys and Rooms
 */

// @lc code=start
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  const n = rooms.length;
  const visited = new Uint8Array(n);
  const queue = [0];
  visited[0] = 1;
  let count = 1;

  while (queue.length) {
    const room = queue.pop();
    for (const key of rooms[room]) {
      if (!visited[key]) {
        visited[key] = 1;
        count++;
        queue.push(key);
      }
    }
  }
  return count === n;
};
// @lc code=end

// TEST:
console.log(canVisitAllRooms([[1],[2],[3],[]])); // true
console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]])); // false
console.log(canVisitAllRooms([[1],[1]])); // false
console.log(canVisitAllRooms([[1,2],[2,1],[0]])); // true
console.log(canVisitAllRooms([[0]])); // true
