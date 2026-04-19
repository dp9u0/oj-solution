/*
 * @lc app=leetcode id=1105 lang=javascript
 *
 * [1105] Filling Bookcase Shelves
 */

// @lc code=start
/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function(books, shelfWidth) {
    const n = books.length;
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= n; i++) {
        let width = 0;
        let maxHeight = 0;
        for (let j = i; j >= 1; j--) {
            width += books[j - 1][0];
            if (width > shelfWidth) break;
            maxHeight = Math.max(maxHeight, books[j - 1][1]);
            dp[i] = Math.min(dp[i], dp[j - 1] + maxHeight);
        }
    }
    return dp[n];
};
// @lc code=end

// TEST:
console.log(minHeightShelves([[1,1],[2,3],[2,3],[1,1],[1,1],[1,1],[1,2]], 4)); // 6
console.log(minHeightShelves([[1,3],[2,4],[3,2]], 6));                         // 4
