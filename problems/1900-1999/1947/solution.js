/*
 * @lc app=leetcode id=1947 lang=javascript
 *
 * [1947] Maximum Compatibility Score Sum
 */

// @lc code=start
/**
 * @param {number[][]} students
 * @param {number[][]} mentors
 * @return {number}
 */
var maxCompatibilitySum = function(students, mentors) {
    const m = students.length;
    const n = students[0].length;

    // Precompute compatibility scores
    const score = Array.from({ length: m }, (_, i) =>
        Array.from({ length: m }, (_, j) => {
            let s = 0;
            for (let k = 0; k < n; k++) {
                if (students[i][k] === mentors[j][k]) s++;
            }
            return s;
        })
    );

    // Bitmask DP
    const full = (1 << m) - 1;
    const dp = new Int32Array(full + 1).fill(-1);
    dp[0] = 0;

    for (let mask = 0; mask <= full; mask++) {
        if (dp[mask] < 0) continue;
        const student = popcount(mask);
        if (student >= m) continue;
        for (let j = 0; j < m; j++) {
            if (mask & (1 << j)) continue;
            const next = mask | (1 << j);
            dp[next] = Math.max(dp[next], dp[mask] + score[student][j]);
        }
    }

    return dp[full];
};

function popcount(x) {
    let c = 0;
    while (x) { c++; x &= x - 1; }
    return c;
}
// @lc code=end

// TEST:
console.log(maxCompatibilitySum([[1,1,0],[1,0,1],[0,0,1]], [[1,0,0],[0,0,1],[1,1,0]])); // 8
console.log(maxCompatibilitySum([[0,0],[0,0],[0,0]], [[1,1],[1,1],[1,1]])); // 0
console.log(maxCompatibilitySum([[1,1]], [[1,1]])); // 2
console.log(maxCompatibilitySum([[1,0,1],[0,0,1]], [[1,1,0],[0,0,1]])); // 4
console.log(maxCompatibilitySum([[0,1],[1,0]], [[1,0],[0,1]])); // 2
