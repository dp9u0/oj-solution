/*
 * @lc app=leetcode id=1840 lang=javascript
 *
 * [1840] Maximum Building Height
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} restrictions
 * @return {number}
 */
var maxBuilding = function(n, restrictions) {
    // Add building 1 restriction
    restrictions.push([1, 0]);
    // Sort by position
    restrictions.sort((a, b) => a[0] - b[0]);

    const m = restrictions.length;

    // Left to right pass: propagate constraints forward
    for (let i = 1; i < m; i++) {
        const dist = restrictions[i][0] - restrictions[i - 1][0];
        restrictions[i][1] = Math.min(restrictions[i][1], restrictions[i - 1][1] + dist);
    }

    // Right to left pass: propagate constraints backward
    for (let i = m - 2; i >= 0; i--) {
        const dist = restrictions[i + 1][0] - restrictions[i][0];
        restrictions[i][1] = Math.min(restrictions[i][1], restrictions[i + 1][1] + dist);
    }

    let ans = 0;

    // For each pair of adjacent restrictions, find max height between them
    for (let i = 0; i < m - 1; i++) {
        const [pos1, h1] = restrictions[i];
        const [pos2, h2] = restrictions[i + 1];
        const dist = pos2 - pos1;
        // Max height between them: (h1 + h2 + dist) / 2
        const peak = Math.floor((h1 + h2 + dist) / 2);
        ans = Math.max(ans, peak);
    }

    // Check after the last restriction up to building n
    const [lastPos, lastH] = restrictions[m - 1];
    ans = Math.max(ans, lastH + (n - lastPos));

    return ans;
};
// @lc code=end

// TEST:
console.log(maxBuilding(5, [[2,1],[4,1]])); // 2
console.log(maxBuilding(6, [])); // 5
console.log(maxBuilding(10, [[5,3],[2,5],[7,4],[10,3]])); // 5
console.log(maxBuilding(3, [[2,0]])); // 1
console.log(maxBuilding(100, [[50,0]])); // 50
