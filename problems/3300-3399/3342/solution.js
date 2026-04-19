/*
 * @lc app=leetcode id=3342 lang=javascript
 *
 * [3342] Find Minimum Time to Reach Last Room II
 */

// @lc code=start
/**
 * @param {number[][]} moveTime
 * @return {number}
 */
var minTimeToReach = function(moveTime) {
    let n = moveTime.length, m = moveTime[0].length;
    let INF = 1e18;
    let dist = Array.from({ length: n }, () => Array.from({ length: m }, () => [INF, INF]));
    dist[0][0][0] = 0;
    let heap = [[0, 0, 0, 0]]; // [time, i, j, parity]
    let dirs = [[0,1],[0,-1],[1,0],[-1,0]];
    while (heap.length > 0) {
        let [t, i, j, p] = heap[0];
        heap[0] = heap[heap.length - 1]; heap.pop();
        let sz = heap.length, idx = 0;
        while (true) {
            let s = idx, l = 2*idx+1, r = 2*idx+2;
            if (l < sz && heap[l][0] < heap[s][0]) s = l;
            if (r < sz && heap[r][0] < heap[s][0]) s = r;
            if (s !== idx) { [heap[idx], heap[s]] = [heap[s], heap[idx]]; idx = s; } else break;
        }
        if (t > dist[i][j][p]) continue;
        let cost = p === 0 ? 1 : 2;
        let np = 1 - p;
        for (let [di, dj] of dirs) {
            let ni = i + di, nj = j + dj;
            if (ni < 0 || ni >= n || nj < 0 || nj >= m) continue;
            let nt = Math.max(t, moveTime[ni][nj]) + cost;
            if (nt < dist[ni][nj][np]) {
                dist[ni][nj][np] = nt;
                heap.push([nt, ni, nj, np]);
                let k = heap.length - 1;
                while (k > 0) {
                    let pk = (k - 1) >> 1;
                    if (heap[k][0] < heap[pk][0]) { [heap[k], heap[pk]] = [heap[pk], heap[k]]; k = pk; } else break;
                }
            }
        }
    }
    return Math.min(dist[n-1][m-1][0], dist[n-1][m-1][1]);
};
// @lc code=end

// TEST:
console.log(minTimeToReach([[0,4],[4,4]]));
console.log(minTimeToReach([[0,0,0,0],[0,0,0,0]]));
console.log(minTimeToReach([[0,1],[1,2]]));
