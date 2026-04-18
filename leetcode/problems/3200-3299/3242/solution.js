/*
 * @lc app=leetcode id=3242 lang=javascript
 *
 * [3242] Design Neighbor Sum Service
 */

// @lc code=start
/**
 * @param {number[][]} grid
 */
var NeighborSum = function(grid) {
    const n = grid.length;
    this.adjMap = new Map();
    this.diaMap = new Map();
    const adj = [[-1,0],[1,0],[0,-1],[0,1]];
    const dia = [[-1,-1],[-1,1],[1,-1],[1,1]];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let a = 0, d = 0;
            for (const [dr, dc] of adj) {
                const r = i + dr, c = j + dc;
                if (r >= 0 && r < n && c >= 0 && c < n) a += grid[r][c];
            }
            for (const [dr, dc] of dia) {
                const r = i + dr, c = j + dc;
                if (r >= 0 && r < n && c >= 0 && c < n) d += grid[r][c];
            }
            this.adjMap.set(grid[i][j], a);
            this.diaMap.set(grid[i][j], d);
        }
    }
};

NeighborSum.prototype.adjacentSum = function(value) {
    return this.adjMap.get(value);
};

NeighborSum.prototype.diagonalSum = function(value) {
    return this.diaMap.get(value);
};

/**
 * Your NeighborSum object will be instantiated and called as such:
 * var obj = new NeighborSum(grid)
 * var param_1 = obj.adjacentSum(value)
 * var param_2 = obj.diagonalSum(value)
 */
// @lc code=end

// TEST:
var ns1 = new NeighborSum([[0,1,2],[3,4,5],[6,7,8]]);
console.log(ns1.adjacentSum(1)); // 6
console.log(ns1.adjacentSum(4)); // 16
console.log(ns1.diagonalSum(4)); // 16
console.log(ns1.diagonalSum(8)); // 4

var ns2 = new NeighborSum([[1,2,0,3],[4,7,15,6],[8,9,10,11],[12,13,14,5]]);
console.log(ns2.adjacentSum(15)); // 23
console.log(ns2.diagonalSum(9)); // 45

var ns3 = new NeighborSum([[0,1],[2,3]]);
console.log(ns3.adjacentSum(0)); // 3
