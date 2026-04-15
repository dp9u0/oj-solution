/*
 * @lc app=leetcode id=2661 lang=javascript
 *
 * [2661] First Completely Painted Row or Column
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
    let m = mat.length, n = mat[0].length;
    let pos = {};
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            pos[mat[r][c]] = [r, c];
        }
    }
    let rowCount = new Array(m).fill(0);
    let colCount = new Array(n).fill(0);
    for (let i = 0; i < arr.length; i++) {
        let [r, c] = pos[arr[i]];
        rowCount[r]++;
        colCount[c]++;
        if (rowCount[r] === n || colCount[c] === m) return i;
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(firstCompleteIndex([1,3,4,2], [[1,4],[2,3]])); // 2
console.log(firstCompleteIndex([2,8,7,4,1,3,5,6,9], [[3,2,5],[1,4,6],[8,7,9]])); // 3
