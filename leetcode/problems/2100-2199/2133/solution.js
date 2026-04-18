/*
 * @lc app=leetcode id=2133 lang=javascript
 *
 * [2133] Check if Every Row and Column Contains All Numbers
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    const n = matrix.length;
    const check = (arr) => {
        const seen = new Uint8Array(n + 1);
        for (const x of arr) {
            if (x < 1 || x > n || seen[x]) return false;
            seen[x] = 1;
        }
        return true;
    };

    for (let i = 0; i < n; i++) {
        if (!check(matrix[i])) return false;
        const col = [];
        for (let j = 0; j < n; j++) col.push(matrix[j][i]);
        if (!check(col)) return false;
    }
    return true;
};
// @lc code=end

// TEST:
console.log(checkValid([[1,2,3],[3,1,2],[2,3,1]])); // true
console.log(checkValid([[1,1,1],[1,2,3],[1,2,3]])); // false
console.log(checkValid([[1]])); // true
console.log(checkValid([[1,2],[2,1]])); // true
console.log(checkValid([[1,2],[1,2]])); // false
console.log(checkValid([[2,1],[1,2]])); // true
