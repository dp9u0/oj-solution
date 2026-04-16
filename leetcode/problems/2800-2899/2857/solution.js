/*
 * @lc app=leetcode id=2857 lang=javascript
 *
 * [2857] Count Pairs of Points With Distance k
 */

// @lc code=start
/**
 * @param {number[][]} coordinates
 * @param {number} k
 * @return {number}
 */
var countPairs = function(coordinates, k) {
    const cnt = new Map();
    let result = 0;
    for (const [x, y] of coordinates) {
        for (let kx = 0; kx <= k; kx++) {
            const ky = k - kx;
            const tx = x ^ kx;
            const ty = y ^ ky;
            const key = tx * 2000001 + ty;
            result += cnt.get(key) || 0;
        }
        const key = x * 2000001 + y;
        cnt.set(key, (cnt.get(key) || 0) + 1);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(countPairs([[1,2],[4,2],[1,3],[5,2]], 5)); // 2
console.log(countPairs([[1,3],[1,3],[1,3],[1,3],[1,3]], 0)); // 10
console.log(countPairs([[0,0],[1,1]], 0)); // 0
