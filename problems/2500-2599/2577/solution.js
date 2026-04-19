/*
 * @lc app=leetcode id=2577 lang=javascript
 *
 * [2577] Minimum Time to Visit a Cell In a Grid
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumTime = function(grid) {
    if (grid[0][1] > 1 && grid[1][0] > 1) return -1;
    let m = grid.length, n = grid[0].length;
    let dist = Array.from({ length: m }, () => new Array(n).fill(Infinity));
    dist[0][0] = 0;
    let heap = [[0, 0, 0]];
    let dirs = [[0,1],[0,-1],[1,0],[-1,0]];
    while (heap.length > 0) {
        let [t, i, j] = heap[0];
        heap[0] = heap[heap.length - 1]; heap.pop();
        let sz = heap.length, idx = 0;
        while (true) {
            let s = idx, l = 2*idx+1, r = 2*idx+2;
            if (l < sz && heap[l][0] < heap[s][0]) s = l;
            if (r < sz && heap[r][0] < heap[s][0]) s = r;
            if (s !== idx) { [heap[idx], heap[s]] = [heap[s], heap[idx]]; idx = s; } else break;
        }
        if (t > dist[i][j]) continue;
        for (let [di, dj] of dirs) {
            let ni = i + di, nj = j + dj;
            if (ni < 0 || ni >= m || nj < 0 || nj >= n) continue;
            let nt = t + 1;
            if (nt < grid[ni][nj]) {
                let diff = grid[ni][nj] - nt;
                if (diff % 2 === 1) diff++;
                nt += diff;
            }
            if (nt < dist[ni][nj]) {
                dist[ni][nj] = nt;
                heap.push([nt, ni, nj]);
                let k = heap.length - 1;
                while (k > 0) {
                    let pk = (k - 1) >> 1;
                    if (heap[k][0] < heap[pk][0]) { [heap[k], heap[pk]] = [heap[pk], heap[k]]; k = pk; } else break;
                }
            }
        }
    }
    return dist[m - 1][n - 1];
};
// @lc code=end

// TEST:
console.log(minimumTime([[0,1,3,2],[5,1,2,5],[4,3,8,6]]));
console.log(minimumTime([[0,2,4],[3,2,1],[1,0,4]]));
