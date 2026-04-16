/*
 * @lc app=leetcode id=1476 lang=javascript
 *
 * [1476] Subrectangle Queries
 */

// @lc code=start
/**
 * @param {number[][]} rectangle
 */
var SubrectangleQueries = function(rectangle) {
    this.rect = rectangle;
};

SubrectangleQueries.prototype.updateSubrectangle = function(row1, col1, row2, col2, newValue) {
    for (let i = row1; i <= row2; i++) {
        for (let j = col1; j <= col2; j++) {
            this.rect[i][j] = newValue;
        }
    }
};

SubrectangleQueries.prototype.getValue = function(row, col) {
    return this.rect[row][col];
};

/** 
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */
// @lc code=end

// TEST:
let sq = new SubrectangleQueries([[1,2,1],[4,3,4],[3,2,1],[1,1,1]]);
console.log(sq.getValue(0, 2)); // 1
sq.updateSubrectangle(0, 0, 3, 2, 5);
console.log(sq.getValue(0, 2)); // 5
console.log(sq.getValue(3, 1)); // 5
