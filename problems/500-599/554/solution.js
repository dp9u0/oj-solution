/*
 * @lc app=leetcode id=554 lang=javascript
 *
 * [554] Brick Wall
 */

// @lc code=start
/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    const edgeCount = new Map();
    for (const row of wall) {
        let prefix = 0;
        for (let i = 0; i < row.length - 1; i++) {
            prefix += row[i];
            edgeCount.set(prefix, (edgeCount.get(prefix) || 0) + 1);
        }
    }
    let maxEdges = 0;
    for (const count of edgeCount.values()) {
        maxEdges = Math.max(maxEdges, count);
    }
    return wall.length - maxEdges;
};
// @lc code=end

// TEST:
console.log(leastBricks([[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]])); // 2
console.log(leastBricks([[1],[1],[1]])); // 3
