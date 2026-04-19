/*
 * @lc app=leetcode id=1326 lang=javascript
 *
 * [1326] Minimum Number of Taps to Open to Water a Garden
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
    const maxReach = new Array(n + 1).fill(0);
    for (let i = 0; i <= n; i++) {
        const l = Math.max(0, i - ranges[i]);
        const r = Math.min(n, i + ranges[i]);
        maxReach[l] = Math.max(maxReach[l], r);
    }

    let taps = 0, end = 0, farthest = 0;
    for (let i = 0; i <= n; i++) {
        farthest = Math.max(farthest, maxReach[i]);
        if (i === end) {
            if (i === n) break;
            if (farthest <= i) return -1;
            end = farthest;
            taps++;
        }
    }
    return taps;
};
// @lc code=end

// TEST:
console.log(minTaps(5, [3, 4, 1, 1, 0, 0])); // 1
console.log(minTaps(3, [0, 0, 0, 0])); // -1
console.log(minTaps(7, [1, 2, 1, 0, 2, 1, 0, 1])); // 3
console.log(minTaps(1, [1, 1])); // 1
console.log(minTaps(5, [1, 1, 1, 1, 1, 1])); // 3
