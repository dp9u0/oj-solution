/*
 * @lc app=leetcode.cn id=631 lang=javascript
 *
 * [631] 设计 Excel 求和公式
 */

// @lc code=start
/**
 * @param {number} height
 * @param {character} width
 */
var Excel = function(height, width) {
    this.w = width.charCodeAt(0) - 64;
    this.val = Array.from({ length: height + 1 }, () => new Array(this.w + 1).fill(0));
    this.formula = Array.from({ length: height + 1 }, () => new Array(this.w + 1).fill(null));
    this.memo = Array.from({ length: height + 1 }, () => new Array(this.w + 1).fill(null));
};

Excel.prototype.clearMemo = function() {
    for (const row of this.memo) row.fill(null);
};

Excel.prototype.parseCell = function(s) {
    return [parseInt(s.slice(1), 10), s.charCodeAt(0) - 64];
};

Excel.prototype.getVal = function(r, c) {
    const f = this.formula[r][c];
    if (!f) return this.val[r][c];
    if (this.memo[r][c] !== null) return this.memo[r][c]; // DAG: safe to cache
    let total = 0;
    for (const item of f) {
        if (item.includes(':')) {
            const [a, b] = item.split(':');
            const [r1, c1] = this.parseCell(a);
            const [r2, c2] = this.parseCell(b);
            for (let rr = r1; rr <= r2; rr++) {
                for (let cc = c1; cc <= c2; cc++) total += this.getVal(rr, cc);
            }
        } else {
            const [r1, c1] = this.parseCell(item);
            total += this.getVal(r1, c1);
        }
    }
    this.memo[r][c] = total;
    return total;
};

/**
 * @param {number} row
 * @param {character} column
 * @param {number} val
 * @return {void}
 */
Excel.prototype.set = function(row, column, val) {
    const c = column.charCodeAt(0) - 64;
    this.formula[row][c] = null;
    this.val[row][c] = val;
    this.clearMemo();
};

/**
 * @param {number} row
 * @param {character} column
 * @return {number}
 */
Excel.prototype.get = function(row, column) {
    return this.getVal(row, column.charCodeAt(0) - 64);
};

/**
 * @param {number} row
 * @param {character} column
 * @param {string[]} numbers
 * @return {number}
 */
Excel.prototype.sum = function(row, column, numbers) {
    const c = column.charCodeAt(0) - 64;
    this.formula[row][c] = numbers.slice();
    this.clearMemo();
    return this.getVal(row, c);
};

/**
 * Your Excel object will be instantiated and called as such:
 * var obj = new Excel(height, width)
 * obj.set(row,column,val)
 * var param_2 = obj.get(row,column)
 * var param_3 = obj.sum(row,column,numbers)
 */
// @lc code=end

// TEST:
const ex = new Excel(3, 'C');
ex.set(1, 'A', 2);
console.log(ex.sum(3, 'C', ['A1', 'A1:B2'])); // 4
ex.set(2, 'B', 2);
console.log(ex.get(3, 'C')); // 6
console.log(ex.get(1, 'A')); // 2
console.log(ex.get(2, 'C')); // 0 (empty cell)

ex.set(3, 'C', 99); // overwrite formula
console.log(ex.get(3, 'C')); // 99

const ex2 = new Excel(5, 'E');
ex2.set(1, 'B', 3);
console.log(ex2.sum(1, 'A', ['B1'])); // 3
console.log(ex2.sum(2, 'A', ['A1', 'B1:C1'])); // 3 (A1=3, B1:C1 empty)
ex2.set(1, 'C', 5);
console.log(ex2.get(2, 'A')); // 8 (chain propagation through A1)
