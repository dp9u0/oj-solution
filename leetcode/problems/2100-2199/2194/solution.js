/*
 * @lc app=leetcode id=2194 lang=javascript
 *
 * [2194] Cells in a Range on an Excel Sheet
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    const c1 = s.charCodeAt(0), r1 = s.charCodeAt(1);
    const c2 = s.charCodeAt(3), r2 = s.charCodeAt(4);
    const result = [];
    for (let c = c1; c <= c2; c++) {
        for (let r = r1; r <= r2; r++) {
            result.push(String.fromCharCode(c) + String.fromCharCode(r));
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(cellsInRange("K1:L2")));   // ["K1","K2","L1","L2"]
console.log(JSON.stringify(cellsInRange("A1:F1")));   // ["A1","B1","C1","D1","E1","F1"]
console.log(JSON.stringify(cellsInRange("A1:B2")));   // ["A1","A2","B1","B2"]
console.log(JSON.stringify(cellsInRange("Z9:Z9")));   // ["Z9"]
console.log(JSON.stringify(cellsInRange("A1:A5")));   // ["A1","A2","A3","A4","A5"]
