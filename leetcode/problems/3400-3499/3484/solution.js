/*
 * @lc app=leetcode id=3484 lang=javascript
 *
 * [3484] Design Spreadsheet
 */

// @lc code=start
/**
 * @param {number} rows
 */
var Spreadsheet = function(rows) {
  this.cells = new Map();
};

Spreadsheet.prototype.setCell = function(cell, value) {
  this.cells.set(cell, value);
};

Spreadsheet.prototype.resetCell = function(cell) {
  this.cells.set(cell, 0);
};

Spreadsheet.prototype.getValue = function(formula) {
  const resolve = (token) => {
    if (token[0] >= 'A' && token[0] <= 'Z') {
      return this.cells.get(token) || 0;
    }
    return Number(token);
  };
  const [x, y] = formula.slice(1).split('+');
  return resolve(x) + resolve(y);
};

/** 
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */
// @lc code=end

// TEST:
const ss = new Spreadsheet(3);
console.log(ss.getValue('=5+7')); // 12
ss.setCell('A1', 10);
console.log(ss.getValue('=A1+6')); // 16
ss.setCell('B2', 15);
console.log(ss.getValue('=A1+B2')); // 25
ss.resetCell('A1');
console.log(ss.getValue('=A1+B2')); // 15
ss.setCell('C3', 100);
console.log(ss.getValue('=C3+0')); // 100
