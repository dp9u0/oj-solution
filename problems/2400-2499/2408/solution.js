/*
 * @lc app=leetcode id=2408 lang=javascript
 *
 * [2408] Design SQL
 */

// @lc code=start
var SQL = function(names, columns) {
  this.tables = new Map();
  for (let i = 0; i < names.length; i++) {
    this.tables.set(names[i], { cols: columns[i], rows: new Map(), nextId: 1 });
  }
};

/**
 * @param {string} name
 * @param {string[]} row
 * @return {boolean}
 */
SQL.prototype.ins = function(name, row) {
  const t = this.tables.get(name);
  if (!t || row.length !== t.cols) return false;
  t.rows.set(t.nextId, row);
  t.nextId++;
  return true;
};

/**
 * @param {string} name
 * @param {number} rowId
 * @return {void}
 */
SQL.prototype.rmv = function(name, rowId) {
  const t = this.tables.get(name);
  if (!t) return;
  t.rows.delete(rowId);
};

/**
 * @param {string} name
 * @param {number} rowId
 * @param {number} columnId
 * @return {string}
 */
SQL.prototype.sel = function(name, rowId, columnId) {
  const t = this.tables.get(name);
  if (!t) return '<null>';
  const row = t.rows.get(rowId);
  if (!row || columnId < 1 || columnId > t.cols) return '<null>';
  return row[columnId - 1];
};

/**
 * @param {string} name
 * @return {string[]}
 */
SQL.prototype.exp = function(name) {
  const t = this.tables.get(name);
  if (!t) return [];
  const res = [];
  for (const [id, row] of t.rows) {
    res.push(id + ',' + row.join(','));
  }
  return res;
};
// @lc code=end

// TEST:
const sql = new SQL(['one', 'two', 'three'], [2, 3, 1]);
console.log(sql.ins('two', ['first', 'second', 'third']) === true);
console.log(sql.sel('two', 1, 3) === 'third');
console.log(sql.ins('two', ['fourth', 'fifth', 'sixth']) === true);
console.log(JSON.stringify(sql.exp('two')) === JSON.stringify(['1,first,second,third', '2,fourth,fifth,sixth']));
sql.rmv('two', 1);
console.log(sql.sel('two', 2, 2) === 'fifth');
console.log(JSON.stringify(sql.exp('two')) === JSON.stringify(['2,fourth,fifth,sixth']));
console.log(sql.ins('one', ['a']) === false);
console.log(sql.sel('nope', 1, 1) === '<null>');
console.log(sql.ins('two', ['a', 'b', 'c']) === true);
console.log(sql.sel('two', 3, 1) === 'a');
