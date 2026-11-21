/*
 * @lc app=leetcode.cn id=2061 lang=javascript
 *
 * [2061] 扫地机器人清扫过的空间个数
 */

// @lc code=start
/**
 * @param {number[][]} room
 * @return {number}
 */
var numberOfCleanRooms = function(room) {
    const m = room.length, n = room[0].length;
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const cleaned = Array.from({ length: m }, () => new Uint8Array(n));
    const seen = new Set();
    let r = 0, c = 0, d = 0, count = 0;
    cleaned[0][0] = 1;
    count = 1;
    while (true) {
        const key = (r * n + c) * 4 + d;
        if (seen.has(key)) break;
        seen.add(key);
        const [dr, dc] = dirs[d];
        while (r + dr >= 0 && r + dr < m && c + dc >= 0 && c + dc < n && room[r + dr][c + dc] === 0) {
            r += dr;
            c += dc;
            if (!cleaned[r][c]) {
                cleaned[r][c] = 1;
                count++;
            }
        }
        d = (d + 1) % 4;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(numberOfCleanRooms([[0,0,0],[1,1,0],[0,0,0]])); // 7
console.log(numberOfCleanRooms([[0,1,0],[1,0,0],[0,0,0]])); // 1
console.log(numberOfCleanRooms([[0]])); // 1
console.log(numberOfCleanRooms([[0,0]])); // 2 (right to wall, down blocked, left back, up blocked... count 2)
console.log(numberOfCleanRooms([[0,0,0],[0,0,0]])); // 6 (all cells traversed)
