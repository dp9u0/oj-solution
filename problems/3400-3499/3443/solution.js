/*
 * @lc app=leetcode id=3443 lang=javascript
 *
 * [3443] Maximum Manhattan Distance After K Changes
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxDistance = function(s, k) {
    const n = s.length;
    let ans = 0;

    // Try all 4 diagonal directions: NE, NW, SE, SW
    const configs = [
        ['N', 'E'], // NE: good are N and E
        ['N', 'W'], // NW
        ['S', 'E'], // SE
        ['S', 'W'], // SW
    ];

    for (const [g1, g2] of configs) {
        let score = 0, badCount = 0;
        for (let i = 0; i < n; i++) {
            const c = s[i];
            if (c === g1 || c === g2) {
                score++;
            } else {
                score--;
                badCount++;
            }
            ans = Math.max(ans, score + 2 * Math.min(k, badCount));
        }
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(maxDistance("NWSE", 1)); // 3
console.log(maxDistance("NSWWEW", 3)); // 6
console.log(maxDistance("N", 0)); // 1
console.log(maxDistance("NS", 0)); // 1
console.log(maxDistance("NSNS", 1)); // 3
