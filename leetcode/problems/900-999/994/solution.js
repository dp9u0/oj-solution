/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const H = grid.length;
    const W = grid[0].length;
    const loop = (grid, callback) => {
        for (let i = 0; i < H; i++) {
            for (let j = 0; j < W; j++) {
                if (callback(grid[i][j], i, j)) return true;
            }
        }
        return false;
    };

    // 初始化
    let rottenOrange = [];
    loop(grid, (v, x, y) => {
        if (v === 2) {
            rottenOrange.push({ x, y })
        }
    })
    let time = 0;
    while (true) {
        let newRottenOrange = [];
        rottenOrange.forEach(({ x, y }) => {
            if (x - 1 >= 0 && grid[x - 1][y] === 1) { grid[x - 1][y] = 2; newRottenOrange.push({ x: x - 1, y }) }
            if (x + 1 < H && grid[x + 1][y] === 1) { grid[x + 1][y] = 2; newRottenOrange.push({ x: x + 1, y }) }
            if (y - 1 >= 0 && grid[x][y - 1] === 1) { grid[x][y - 1] = 2; newRottenOrange.push({ x: x, y: y - 1 }) }
            if (y + 1 < W && grid[x][y + 1] === 1) { grid[x][y + 1] = 2; newRottenOrange.push({ x: x, y: y + 1 }) }
        });
        if (newRottenOrange.length === 0) break;
        rottenOrange = newRottenOrange;
        time++;
    }
    let existFresh = loop(grid, (v) => {
        return v === 1
    })
    if (existFresh) return -1;
    return time;
};


// TEST:
console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]]))
console.log(orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]]))
console.log(orangesRotting([[0, 2]]))