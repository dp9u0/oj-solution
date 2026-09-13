/*
 * @lc app=leetcode.cn id=835 lang=javascript
 *
 * [835] 图像重叠
 */

// @lc code=start
/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) {
    const n = img1.length;
    const count = new Map();
    let best = 0;
    for (let r1 = 0; r1 < n; r1++) {
        for (let c1 = 0; c1 < n; c1++) {
            if (img1[r1][c1] !== 1) continue;
            for (let r2 = 0; r2 < n; r2++) {
                for (let c2 = 0; c2 < n; c2++) {
                    if (img2[r2][c2] !== 1) continue;
                    const key = (r2 - r1) * 100 + (c2 - c1);
                    const v = (count.get(key) || 0) + 1;
                    count.set(key, v);
                    if (v > best) best = v;
                }
            }
        }
    }
    return best;
};
// @lc code=end

// TEST:
console.log(largestOverlap([[1,1,0],[0,1,0],[0,1,0]], [[0,0,0],[0,1,1],[0,0,1]]) === 3);
console.log(largestOverlap([[1]], [[1]]) === 1);
console.log(largestOverlap([[0]], [[0]]) === 0);
console.log(largestOverlap([[1,0],[0,0]], [[0,1],[0,0]]) === 1);
console.log(largestOverlap([[0,0],[0,0]], [[1,1],[1,1]]) === 0);
console.log(largestOverlap([[1,1],[1,1]], [[1,1],[1,1]]) === 4);
