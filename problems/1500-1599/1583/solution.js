/*
 * @lc app=leetcode id=1583 lang=javascript
 *
 * [1583] Count Unhappy Friends
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} preferences
 * @param {number[][]} pairs
 * @return {number}
 */
var unhappyFriends = function(n, preferences, pairs) {
    // rank[i][j] = preference rank of j for person i (lower = more preferred)
    const rank = Array.from({ length: n }, () => new Array(n));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < preferences[i].length; j++) {
            rank[i][preferences[i][j]] = j;
        }
    }

    const match = new Array(n);
    for (const [x, y] of pairs) {
        match[x] = y;
        match[y] = x;
    }

    let result = 0;
    for (let x = 0; x < n; x++) {
        const y = match[x];
        for (const u of preferences[x]) {
            if (u === y) break;
            const v = match[u];
            if (rank[u][x] < rank[u][v]) {
                result++;
                break;
            }
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(unhappyFriends(4, [[1,2,3],[3,2,0],[3,1,0],[1,2,0]], [[0,1],[2,3]])); // 2
console.log(unhappyFriends(2, [[1],[0]], [[1,0]])); // 0
console.log(unhappyFriends(4, [[1,3,2],[2,3,0],[1,3,0],[0,2,1]], [[1,3],[0,2]])); // 4
