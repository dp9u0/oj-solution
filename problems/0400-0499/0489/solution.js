/*
 * @lc app=leetcode.cn id=489 lang=javascript
 *
 * [489] 扫地机器人
 */

// @lc code=start
/**
 * @param {Robot} robot
 * @return {void}
 */
var cleanRoom = function(robot) {
    // 0 up, 1 right, 2 down, 3 left
    const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const cleaned = new Set();
    const goBack = () => {
        robot.turnRight();
        robot.turnRight();
        robot.move();
        robot.turnRight();
        robot.turnRight();
    };
    const dfs = (x, y, d) => {
        robot.clean();
        cleaned.add(x + ',' + y);
        for (let k = 0; k < 4; k++) {
            const nd = (d + k) % 4;
            const nx = x + dirs[nd][0], ny = y + dirs[nd][1];
            if (!cleaned.has(nx + ',' + ny) && robot.move()) {
                dfs(nx, ny, nd);
                goBack(); // return to (x,y) facing nd again
            }
            robot.turnRight(); // rotate to the next direction
        }
    };
    dfs(0, 0, 0);
};
// @lc code=end

// TEST:
class RobotSim {
    constructor(room, row, col) {
        this.room = room;
        this.row = row; this.col = col;
        this.d = 0; // up, right, down, left
        this.cleanedCells = new Set();
    }
    move() {
        const [dr, dc] = [[-1, 0], [0, 1], [1, 0], [0, -1]][this.d];
        const nr = this.row + dr, nc = this.col + dc;
        if (nr >= 0 && nr < this.room.length && nc >= 0 && nc < this.room[0].length && this.room[nr][nc] === 1) {
            this.row = nr; this.col = nc;
            return true;
        }
        return false;
    }
    turnLeft() { this.d = (this.d + 3) % 4; }
    turnRight() { this.d = (this.d + 1) % 4; }
    clean() { this.cleanedCells.add(this.row + ',' + this.col); }
}
const test = (room, r, c, expected) => {
    const robot = new RobotSim(room, r, c);
    cleanRoom(robot);
    const onlyOpen = [...robot.cleanedCells].every(k => {
        const [a, b] = k.split(',').map(Number);
        return room[a][b] === 1;
    });
    const ok = robot.cleanedCells.size === expected && onlyOpen;
    console.log(ok ? 'OK ' + expected : 'FAIL got ' + robot.cleanedCells.size + ' expected ' + expected);
};

test([[1]], 0, 0, 1);
test([[1, 1, 1]], 0, 1, 3);
test([[1, 1], [1, 1]], 0, 0, 4);
test([[1, 1], [1, 0]], 0, 0, 3);
test([[1, 1, 1], [1, 0, 1], [1, 1, 1]], 0, 0, 8);
test([[1, 1, 1, 1, 1], [0, 0, 1, 0, 0], [1, 1, 1, 1, 1]], 0, 2, 11);
