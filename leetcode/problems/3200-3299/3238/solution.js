/*
 * @lc app=leetcode id=3238 lang=javascript
 *
 * [3238] Find the Number of Winning Players
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} pick
 * @return {number}
 */
var winningPlayerCount = function(n, pick) {
    const cnt = Array.from({ length: n }, () => new Map());
    for (const [x, y] of pick) {
        cnt[x].set(y, (cnt[x].get(y) || 0) + 1);
    }
    let ans = 0;
    for (let i = 0; i < n; i++) {
        for (const c of cnt[i].values()) {
            if (c > i) { ans++; break; }
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(winningPlayerCount(4, [[0,0],[1,0],[1,0],[2,1],[2,1],[2,0]])); // 2
console.log(winningPlayerCount(5, [[1,1],[1,2],[1,3],[1,4]])); // 0
console.log(winningPlayerCount(5, [[1,1],[2,4],[2,4],[2,4]])); // 1
console.log(winningPlayerCount(2, [[0,0],[0,0]])); // 1
console.log(winningPlayerCount(3, [[0,0],[0,1],[1,0],[1,0],[2,0],[2,0],[2,0]])); // 3
