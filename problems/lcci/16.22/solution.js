/*
 * @lc app=leetcode.cn id=面试题 16.22 lang=javascript
 *
 * [面试题 16.22] 兰顿蚂蚁
 */

// @lc code=start
/**
 * @param {number} K
 * @return {string[]}
 */
var printKMoves = function(K) {
    // 无限网格用黑格坐标集合表示；顺时针方向序 R→D→L→U
    const dirs = 'RDLU';
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];
    const blacks = new Set();
    let d = 0; // 初始面向右
    let x = 0, y = 0;
    let minX = 0, maxX = 0, minY = 0, maxY = 0;
    for (let step = 0; step < K; step++) {
        const key = `${x},${y}`;
        if (blacks.has(key)) {
            blacks.delete(key);
            d = (d + 3) % 4; // 黑格左转
        } else {
            blacks.add(key);
            d = (d + 1) % 4; // 白格右转
        }
        x += dx[d];
        y += dy[d];
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
    }
    const grid = [];
    for (let row = minY; row <= maxY; row++) {
        let line = '';
        for (let col = minX; col <= maxX; col++) {
            line += col === x && row === y ? dirs[d] : blacks.has(`${col},${row}`) ? 'X' : '_';
        }
        grid.push(line);
    }
    return grid;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(printKMoves(0)) === JSON.stringify(['R']));
console.log(JSON.stringify(printKMoves(1)) === JSON.stringify(['X', 'D']));
console.log(JSON.stringify(printKMoves(2)) === JSON.stringify(['_X', 'LX']));
console.log(JSON.stringify(printKMoves(5)) === JSON.stringify(['_U', 'X_', 'XX']));
