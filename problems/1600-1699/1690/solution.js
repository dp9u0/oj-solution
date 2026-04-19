/*
 * @lc app=leetcode id=1690 lang=javascript
 *
 * [1690] Stone Game VII
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVII = function(stones) {
    const n = stones.length;
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + stones[i];
    const sum = (i, j) => prefix[j + 1] - prefix[i];

    let prev = new Array(n).fill(0);

    for (let len = 2; len <= n; len++) {
        const curr = new Array(n).fill(0);
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;
            curr[i] = Math.max(sum(i + 1, j) - prev[i + 1], sum(i, j - 1) - prev[i]);
        }
        prev = curr;
    }

    return prev[0];
};
// @lc code=end

// TEST:
console.log(stoneGameVII([5,3,1,4,2])); // 6
console.log(stoneGameVII([7,90,5,1,100,10,10,2])); // 122
console.log(stoneGameVII([1,2])); // 1
