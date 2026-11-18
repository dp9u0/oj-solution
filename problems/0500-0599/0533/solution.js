/*
 * @lc app=leetcode.cn id=533 lang=javascript
 *
 * [533] 孤独像素 II
 */

// @lc code=start
/**
 * @param {character[][]} picture
 * @param {number} target
 * @return {number}
 */
var findBlackPixel = function(picture, target) {
    const m = picture.length, n = picture[0].length;
    const rows = new Array(m).fill(0), cols = new Array(n).fill(0);
    const sigCount = new Map();
    for (let i = 0; i < m; i++) {
        const sig = picture[i].join('');
        sigCount.set(sig, (sigCount.get(sig) || 0) + 1);
        for (let j = 0; j < n; j++) {
            if (picture[i][j] === 'B') { rows[i]++; cols[j]++; }
        }
    }
    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (picture[i][j] === 'B' && rows[i] === target && cols[j] === target &&
                sigCount.get(picture[i].join('')) === target) {
                count++;
            }
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(findBlackPixel([["W","B","W","B","B","W"],["W","B","W","B","B","W"],["W","B","W","B","B","W"],["W","W","B","W","B","W"]], 3)); // 6
console.log(findBlackPixel([["W","W","B"],["W","W","B"],["W","W","B"]], 1)); // 0
console.log(findBlackPixel([["B"]], 1)); // 1
console.log(findBlackPixel([["W"]], 1)); // 0
console.log(findBlackPixel([["B","W"],["W","B"]], 1)); // 2
console.log(findBlackPixel([["B","B"],["B","B"]], 2)); // 4 (identical rows, both cols)
