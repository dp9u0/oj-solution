/*
 * @lc app=leetcode.cn id=1057 lang=javascript
 *
 * [1057] 校园自行车分配
 */

// @lc code=start
/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number[]}
 */
var assignBikes = function(workers, bikes) {
    const n = workers.length, m = bikes.length;
    // pack (dist, worker, bike) into one int: numeric order == lexicographic tie-break order
    const pairs = new Int32Array(n * m);
    let idx = 0;
    for (let w = 0; w < n; w++) {
        for (let b = 0; b < m; b++) {
            const d = Math.abs(workers[w][0] - bikes[b][0]) + Math.abs(workers[w][1] - bikes[b][1]);
            pairs[idx++] = (d << 20) | (w << 10) | b; // fits 31 bits: d<=1998, w,b<=999
        }
    }
    pairs.sort(); // TypedArray sort is numeric

    const workerUsed = new Array(n).fill(false);
    const bikeUsed = new Array(m).fill(false);
    const ans = new Array(n);
    let done = 0;
    for (const key of pairs) {
        const w = (key >> 10) & 1023, b = key & 1023;
        if (!workerUsed[w] && !bikeUsed[b]) {
            workerUsed[w] = true;
            bikeUsed[b] = true;
            ans[w] = b;
            if (++done === n) break;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(assignBikes([[0,0],[2,1]], [[1,2],[3,3]]))); // [1,0]
console.log(JSON.stringify(assignBikes([[0,0],[1,1],[2,0]], [[1,0],[2,2],[2,1]]))); // [0,2,1]
console.log(JSON.stringify(assignBikes([[0,0]], [[5,5]]))); // [0]
console.log(JSON.stringify(assignBikes([[0,0]], [[1,0],[0,1]]))); // [0] (tie -> smaller bike)
console.log(JSON.stringify(assignBikes([[0,0],[1,1]], [[2,2],[3,3]]))); // [1,0]
