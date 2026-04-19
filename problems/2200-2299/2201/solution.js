/*
 * @lc app=leetcode id=2201 lang=javascript
 *
 * [2201] Count Artifacts That Can Be Extracted
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} artifacts
 * @param {number[][]} dig
 * @return {number}
 */
var digArtifacts = function(n, artifacts, dig) {
    const dug = new Set(dig.map(([r, c]) => r * n + c));
    let count = 0;
    for (const [r1, c1, r2, c2] of artifacts) {
        let extracted = true;
        for (let r = r1; r <= r2 && extracted; r++) {
            for (let c = c1; c <= c2 && extracted; c++) {
                if (!dug.has(r * n + c)) extracted = false;
            }
        }
        if (extracted) count++;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(digArtifacts(2, [[0,0,0,0],[0,1,1,1]], [[0,0],[0,1]])); // 1
console.log(digArtifacts(2, [[0,0,0,0],[0,1,1,1]], [[0,0],[0,1],[1,1]])); // 2
console.log(digArtifacts(3, [[0,0,1,1]], [[0,0],[0,1],[1,0],[1,1]])); // 1
console.log(digArtifacts(2, [[0,0,0,0]], [[0,0]])); // 1
console.log(digArtifacts(2, [[0,0,0,0]], [[1,1]])); // 0
console.log(digArtifacts(3, [[0,0,0,1],[1,2,2,2]], [[0,0],[0,1],[1,2],[2,2]])); // 2
