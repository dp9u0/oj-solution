/*
 * @lc app=leetcode.cn id=1066 lang=javascript
 *
 * [1066] 校园自行车分配 II
 */

// @lc code=start
/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number}
 */
var assignBikes = function(workers, bikes) {
    const n = workers.length, m = bikes.length;
    const dist = (w, b) =>
        Math.abs(workers[w][0] - bikes[b][0]) + Math.abs(workers[w][1] - bikes[b][1]);

    const memo = new Map(); // key = i * 1024 + mask
    const dp = (i, mask) => {
        if (i === n) return 0;
        const key = i * 1024 + mask;
        if (memo.has(key)) return memo.get(key);
        let best = Infinity;
        for (let b = 0; b < m; b++) {
            if (mask & (1 << b)) continue;
            const cand = dist(i, b) + dp(i + 1, mask | (1 << b));
            if (cand < best) best = cand;
        }
        memo.set(key, best);
        return best;
    };
    return dp(0, 0);
};
// @lc code=end

// TEST:
console.log(assignBikes([[0,0],[2,1]], [[1,2],[3,3]])); // 6
console.log(assignBikes([[0,0],[1,1],[2,0]], [[1,0],[2,2],[2,1]])); // 4
console.log(assignBikes([[0,0],[1,0],[2,0],[3,0],[4,0]], [[0,999],[1,999],[2,999],[3,999],[4,999]])); // 4995
console.log(assignBikes([[0,0]], [[5,5]])); // 10
console.log(assignBikes([[0,0]], [[9,9],[1,1]])); // 2 (picks the closer bike)
