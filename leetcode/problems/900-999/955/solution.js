/*
 * @lc app=leetcode id=955 lang=javascript
 *
 * [955] Delete Columns to Make Sorted II
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    const n = strs.length;
    const m = strs[0].length;
    const sorted = new Array(n - 1).fill(false);
    let ans = 0;

    for (let j = 0; j < m; j++) {
        // Check if this column needs to be deleted
        let needDelete = false;
        for (let i = 0; i < n - 1; i++) {
            if (!sorted[i] && strs[i][j] > strs[i + 1][j]) {
                needDelete = true;
                break;
            }
        }

        if (needDelete) {
            ans++;
        } else {
            // Mark newly sorted pairs
            for (let i = 0; i < n - 1; i++) {
                if (!sorted[i] && strs[i][j] < strs[i + 1][j]) {
                    sorted[i] = true;
                }
            }
        }
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(minDeletionSize(["ca","bb","ac"]));       // 1
console.log(minDeletionSize(["xc","yb","za"]));       // 0
console.log(minDeletionSize(["zyx","wvu","tsr"]));    // 3
console.log(minDeletionSize(["a","b"]));               // 0
