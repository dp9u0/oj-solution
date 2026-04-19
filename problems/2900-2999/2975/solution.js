/*
 * @lc app=leetcode id=2975 lang=javascript
 *
 * [2975] Maximum Square Area by Removing Fences From a Field
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[]} hFences
 * @param {number[]} vFences
 * @return {number}
 */
var maximizeSquareArea = function(m, n, hFences, vFences) {
    const MOD = 1e9 + 7;
    const h = [1, ...hFences, m].sort((a, b) => a - b);
    const v = [1, ...vFences, n].sort((a, b) => a - b);

    const hSet = new Set();
    for (let i = 0; i < h.length; i++) {
        for (let j = i + 1; j < h.length; j++) {
            hSet.add(h[j] - h[i]);
        }
    }

    let maxSide = 0;
    for (let i = 0; i < v.length; i++) {
        for (let j = i + 1; j < v.length; j++) {
            const d = v[j] - v[i];
            if (hSet.has(d)) maxSide = Math.max(maxSide, d);
        }
    }

    return maxSide > 0 ? Number(BigInt(maxSide) * BigInt(maxSide) % BigInt(MOD)) : -1;
};
// @lc code=end

// TEST:
console.log(maximizeSquareArea(4, 3, [2,3], [2]) === 4);
console.log(maximizeSquareArea(6, 7, [2], [4]) === -1);
console.log(maximizeSquareArea(3, 3, [2], [2]) === 4);
console.log(maximizeSquareArea(4, 4, [2,3], [2,3]) === 9);
console.log(maximizeSquareArea(10, 10, [2,5,9], [3,7]) === 81);
