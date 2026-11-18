/*
 * @lc app=leetcode.cn id=531 lang=javascript
 *
 * [531] 孤独像素 I
 */

// @lc code=start
/**
 * @param {character[][]} picture
 * @return {number}
 */
var findLonelyPixel = function(picture) {
    const m = picture.length, n = picture[0].length;
    const rows = new Array(m).fill(0), cols = new Array(n).fill(0);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (picture[i][j] === 'B') { rows[i]++; cols[j]++; }
        }
    }
    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (picture[i][j] === 'B' && rows[i] === 1 && cols[j] === 1) count++;
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(findLonelyPixel([["W","W","B"],["W","B","W"],["B","W","W"]])); // 3
console.log(findLonelyPixel([["B","B","B"],["B","B","W"],["B","B","B"]])); // 0
console.log(findLonelyPixel([["B"]])); // 1
console.log(findLonelyPixel([["W"]])); // 0
console.log(findLonelyPixel([["W","B"],["B","W"]])); // 2
console.log(findLonelyPixel([["B","B"],["W","W"]])); // 0
