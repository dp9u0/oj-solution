/*
 * @lc app=leetcode id=960 lang=javascript
 *
 * [960] Delete Columns to Make Sorted III
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    const m = strs[0].length;
    const n = strs.length;

    // Check if column i is compatible with column j (i < j)
    // i.e., for all rows, strs[row][i] <= strs[row][j]
    const compatible = (i, j) => {
        for (let r = 0; r < n; r++) {
            if (strs[r][i] > strs[r][j]) return false;
        }
        return true;
    };

    // LIS on columns
    const dp = new Array(m).fill(1);
    for (let j = 1; j < m; j++) {
        for (let i = 0; i < j; i++) {
            if (compatible(i, j)) {
                dp[j] = Math.max(dp[j], dp[i] + 1);
            }
        }
    }

    const maxKeep = Math.max(...dp);
    return m - maxKeep;
};
// @lc code=end

// TEST:
console.log(minDeletionSize(["babca","bbazb"])); // 3
console.log(minDeletionSize(["edcba"])); // 4
console.log(minDeletionSize(["ghi","def","abc"])); // 0
