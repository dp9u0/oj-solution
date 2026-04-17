/*
 * @lc app=leetcode id=3341 lang=javascript
 *
 * [3341] Find Minimum Time to Reach Last Room I
 */

// @lc code=start
/**
 * @param {number[][]} moveTime
 * @return {number}
 */
var minTimeToReach = function(moveTime) {
    const n = moveTime.length, m = moveTime[0].length;
    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
    const dist = Array.from({length: n}, () => new Float64Array(m).fill(Infinity));
    dist[0][0] = 0;

    // Min-heap: [time, row, col]
    const pq = [[0, 0, 0]];
    const push = (item) => {
        pq.push(item);
        let i = pq.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (pq[p][0] <= pq[i][0]) break;
            [pq[p], pq[i]] = [pq[i], pq[p]];
            i = p;
        }
    };
    const pop = () => {
        const top = pq[0];
        const last = pq.pop();
        if (pq.length > 0) {
            pq[0] = last;
            let i = 0;
            while (true) {
                let s = i, l = 2*i+1, r = 2*i+2;
                if (l < pq.length && pq[l][0] < pq[s][0]) s = l;
                if (r < pq.length && pq[r][0] < pq[s][0]) s = r;
                if (s === i) break;
                [pq[s], pq[i]] = [pq[i], pq[s]];
                i = s;
            }
        }
        return top;
    };

    while (pq.length) {
        const [t, r, c] = pop();
        if (t > dist[r][c]) continue;
        if (r === n - 1 && c === m - 1) return t;
        for (const [dr, dc] of dirs) {
            const nr = r + dr, nc = c + dc;
            if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue;
            const nt = Math.max(t, moveTime[nr][nc]) + 1;
            if (nt < dist[nr][nc]) {
                dist[nr][nc] = nt;
                push([nt, nr, nc]);
            }
        }
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(minTimeToReach([[0,4],[4,4]]));       // 6
console.log(minTimeToReach([[0,0,0],[0,0,0]]));   // 3
console.log(minTimeToReach([[0,1],[1,2]]));        // 3
console.log(minTimeToReach([[0,0],[0,0]]));        // 2
console.log(minTimeToReach([[10]]));                // 0
