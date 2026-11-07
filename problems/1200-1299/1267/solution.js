/*
 * @lc app=leetcode.cn id=1267 lang=javascript
 *
 * [1267] 统计参与通信的服务器
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const rowCount = new Array(m).fill(0);
    const colCount = new Array(n).fill(0);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                rowCount[i]++;
                colCount[j]++;
            }
        }
    }

    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1 && (rowCount[i] > 1 || colCount[j] > 1)) {
                count++;
            }
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(countServers([[1, 0], [0, 1]]) === 0); // 没有服务器能通信
console.log(countServers([[1, 0], [1, 1]]) === 3); // 三台服务器都能通信
console.log(countServers([[1, 1, 0, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 1]]) === 4); // 第一行两台+第三列两台通信
console.log(countServers([[1]]) === 0); // 单台服务器，无法通信
console.log(countServers([[1, 1, 1], [0, 0, 0], [0, 0, 1]]) === 4); // 第一行三台+第三列两台通信
console.log(countServers([[1, 0], [0, 0], [1, 0]]) === 2); // 第一列两台通信
