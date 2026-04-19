/*
 * @lc app=leetcode id=1691 lang=javascript
 *
 * [1691] Maximum Height by Stacking Cuboids
 */

// @lc code=start
/**
 * @param {number[][]} cuboids
 * @return {number}
 */
var maxHeight = function(cuboids) {
    for (const c of cuboids) c.sort((a, b) => a - b);
    cuboids.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);

    const n = cuboids.length;
    const dp = new Array(n);
    let ans = 0;
    for (let i = 0; i < n; i++) {
        dp[i] = cuboids[i][2];
        for (let j = 0; j < i; j++) {
            if (cuboids[j][1] <= cuboids[i][1] && cuboids[j][2] <= cuboids[i][2]) {
                dp[i] = Math.max(dp[i], dp[j] + cuboids[i][2]);
            }
        }
        ans = Math.max(ans, dp[i]);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxHeight([[50,45,20],[95,37,53],[45,23,12]]) === 190);
console.log(maxHeight([[38,25,45],[76,35,3]]) === 76);
console.log(maxHeight([[7,11,17],[7,17,11],[11,7,17],[11,17,7],[17,7,11],[17,11,7]]) === 102);
console.log(maxHeight([[1,1,1]]) === 1);
console.log(maxHeight([[50,45,20],[95,37,53],[45,23,12]]) === 190);
