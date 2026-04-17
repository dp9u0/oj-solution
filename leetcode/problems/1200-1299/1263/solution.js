/*
 * @lc app=leetcode id=1263 lang=javascript
 *
 * [1263] Minimum Moves to Move a Box to Their Target Location
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var minPushBox = function(grid) {
    const m = grid.length, n = grid[0].length;
    let br, bc, sr, sc, tr, tc;
    for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) {
        const c = grid[i][j];
        if (c === 'B') { br = i; bc = j; }
        else if (c === 'S') { sr = i; sc = j; }
        else if (c === 'T') { tr = i; tc = j; }
    }

    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
    const MN = m * n;
    const dist = new Array(MN * MN).fill(-1);
    const key = (bp, pp) => bp * MN + pp;

    // 0-1 BFS with ring buffer deque
    const Q = 500000;
    const dq = new Array(Q);
    let f = Q >> 1, b = Q >> 1;

    const startB = br * n + bc, startP = sr * n + sc;
    dist[key(startB, startP)] = 0;
    dq[b++] = [startB, startP, 0];

    while (f < b) {
        const [bp, pp, d] = dq[f++];
        const k = key(bp, pp);
        if (dist[k] < d) continue;

        const bR = bp / n | 0, bC = bp % n;
        if (bR === tr && bC === tc) return d;

        const pR = pp / n | 0, pC = pp % n;

        for (const [dr, dc] of dirs) {
            const npR = pR + dr, npC = pC + dc;
            if (npR < 0 || npR >= m || npC < 0 || npC >= n || grid[npR][npC] === '#') continue;

            if (npR === bR && npC === bC) {
                // Push box
                const nbR = bR + dr, nbC = bC + dc;
                if (nbR < 0 || nbR >= m || nbC < 0 || nbC >= n || grid[nbR][nbC] === '#') continue;
                const nbp = nbR * n + nbC;
                const nk = key(nbp, bp);
                if (dist[nk] === -1) {
                    dist[nk] = d + 1;
                    dq[b++] = [nbp, bp, d + 1];
                }
            } else {
                // Walk (cost 0)
                const npp = npR * n + npC;
                const nk = key(bp, npp);
                if (dist[nk] === -1) {
                    dist[nk] = d;
                    dq[--f] = [bp, npp, d]; // push front
                }
            }
        }
    }
    return -1;
};
// @lc code=end
